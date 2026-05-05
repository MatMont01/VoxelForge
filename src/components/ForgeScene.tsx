import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

type AnimatedParts = {
  printHead?: THREE.Object3D;
  buildPlate?: THREE.Object3D;
  printedPiece?: THREE.Object3D;
};

type PerformanceNavigator = Navigator & {
  deviceMemory?: number;
  connection?: {
    saveData?: boolean;
    effectiveType?: string;
  };
};

function disposeObject(object: THREE.Object3D) {
  object.traverse((child) => {
    const mesh = child as THREE.Mesh;
    if (mesh.geometry) mesh.geometry.dispose();
    const material = mesh.material;
    if (Array.isArray(material)) {
      material.forEach((item) => item.dispose());
    } else if (material) {
      material.dispose();
    }
  });
}

function createGroundShadow() {
  const material = new THREE.ShadowMaterial({
    color: 0x000000,
    opacity: 0.32,
    transparent: true,
  });
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(7, 4.6), material);
  ground.rotation.x = -Math.PI / 2;
  ground.position.set(0.1, -1.74, 0.12);
  ground.receiveShadow = true;
  return ground;
}

export function ForgeScene() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const performanceNavigator = navigator as PerformanceNavigator;
    const connection = performanceNavigator.connection;
    const lowPowerMode =
      reduceMotion ||
      connection?.saveData ||
      connection?.effectiveType === "2g" ||
      connection?.effectiveType === "slow-2g" ||
      (performanceNavigator.deviceMemory ?? 16) <= 8 ||
      (navigator.hardwareConcurrency ?? 8) <= 6;
    const pixelRatioLimit = lowPowerMode ? 1 : 1.18;
    const useRealtimeShadows = !lowPowerMode;
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x070809, 0.045);

    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 80);
    camera.position.set(0, 1.55, 7.8);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !lowPowerMode,
      powerPreference: lowPowerMode ? "default" : "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, pixelRatioLimit));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.08;
    renderer.shadowMap.enabled = useRealtimeShadows;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    mount.appendChild(renderer.domElement);

    scene.add(new THREE.HemisphereLight(0xfff3df, 0x17262a, 1.4));

    const key = new THREE.DirectionalLight(0xffd6a0, 2.4);
    key.position.set(3.4, 5.4, 4.8);
    key.castShadow = useRealtimeShadows;
    key.shadow.mapSize.set(1024, 1024);
    scene.add(key);

    const rim = new THREE.DirectionalLight(0x56b2ad, 1.5);
    rim.position.set(-4, 2.6, 3.2);
    scene.add(rim);

    const forgeGlow = new THREE.PointLight(0xd78a28, 3.4, 8);
    forgeGlow.position.set(0.1, -1.1, 1.8);
    scene.add(forgeGlow);

    const root = new THREE.Group();
    root.name = "KobraHeroRig";
    scene.add(root);
    root.add(createGroundShadow());

    const parts: AnimatedParts = {};
    let model: THREE.Object3D | null = null;
    let mounted = true;

    const loader = new GLTFLoader();
    loader.load(
      `${import.meta.env.BASE_URL}models/anycubic-kobra-x-forge.glb`,
      (gltf) => {
        if (!mounted) {
          disposeObject(gltf.scene);
          return;
        }
        model = gltf.scene;
        model.name = "AnycubicKobraXBlenderModel";
        model.rotation.set(0.08, -0.42, 0);
        model.scale.setScalar(1.06);
        model.position.set(0, -1.74, -0.25);
        model.traverse((child) => {
          const mesh = child as THREE.Mesh;
          if (mesh.isMesh) {
            mesh.castShadow = useRealtimeShadows;
            mesh.receiveShadow = useRealtimeShadows;
          }
        });
        root.add(model);
        parts.printHead = model.getObjectByName("PrintHead");
        parts.buildPlate = model.getObjectByName("BuildPlate");
        parts.printedPiece = model.getObjectByName("PrintedPiece");
      },
      undefined,
      () => {
        // The 2D machine composition remains visible if the GLB ever fails to load.
      },
    );

    const pointer = new THREE.Vector2();
    const handlePointer = (event: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / Math.max(rect.width, 1) - 0.5) * 2;
      pointer.y = ((event.clientY - rect.top) / Math.max(rect.height, 1) - 0.5) * -2;
    };
    window.addEventListener("pointermove", handlePointer, { passive: true });

    const resize = () => {
      const { width, height } = mount.getBoundingClientRect();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, pixelRatioLimit));
      renderer.setSize(width, height, false);
      camera.aspect = width / Math.max(height, 1);
      camera.position.set(width < 760 ? 0.4 : 0.1, width < 760 ? 1.48 : 1.55, width < 760 ? 8.9 : 7.8);
      camera.lookAt(width < 760 ? 0.9 : 1.05, 0.14, -0.35);
      camera.updateProjectionMatrix();
      root.position.x = width < 760 ? 1.08 : 1.92;
      root.scale.setScalar(width < 760 ? 0.78 : 0.92);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(mount);
    resize();

    let frame = 0;
    let animationId: number | null = null;
    let isInViewport = true;
    let documentVisible = !document.hidden;

    const shouldAnimate = () => mounted && isInViewport && documentVisible;
    const requestRender = () => {
      if (animationId === null) animationId = window.requestAnimationFrame(render);
    };

    const handleVisibility = () => {
      documentVisible = !document.hidden;
      requestRender();
    };
    document.addEventListener("visibilitychange", handleVisibility);

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      isInViewport = entry.isIntersecting;
      requestRender();
    });
    intersectionObserver.observe(mount);

    function render() {
      animationId = null;
      if (!shouldAnimate()) return;

      frame += reduceMotion ? 0 : 0.016;

      root.rotation.y = pointer.x * 0.035 + Math.sin(frame * 0.32) * 0.018;
      root.rotation.x = pointer.y * 0.018;

      if (model) {
        model.position.y = -1.74 + Math.sin(frame * 0.55) * 0.025;
      }
      if (parts.printHead) {
        parts.printHead.position.x = Math.sin(frame * 1.12) * 0.5;
      }
      if (parts.buildPlate) {
        parts.buildPlate.position.y = Math.cos(frame * 0.8) * 0.08;
      }
      if (parts.printedPiece) {
        const pulse = 1 + Math.sin(frame * 1.4) * 0.035;
        parts.printedPiece.scale.set(pulse, 1, pulse);
      }

      forgeGlow.intensity = 2.8 + Math.sin(frame * 2.6) * 0.35;
      renderer.render(scene, camera);
      requestRender();
    }
    requestRender();

    return () => {
      mounted = false;
      if (animationId !== null) window.cancelAnimationFrame(animationId);
      document.removeEventListener("visibilitychange", handleVisibility);
      intersectionObserver.disconnect();
      window.removeEventListener("pointermove", handlePointer);
      resizeObserver.disconnect();
      renderer.domElement.remove();
      disposeObject(scene);
      renderer.dispose();
    };
  }, []);

  return <div className="forge-scene" ref={mountRef} aria-hidden="true" />;
}
