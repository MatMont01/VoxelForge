import { useEffect, useRef } from "react";
import type * as Three from "three";

export type ForgeMode = "prototype" | "collectible" | "event";

const modeColors: Record<ForgeMode, number> = {
  prototype: 0x82e6c9,
  collectible: 0xff7a2f,
  event: 0x8fb8ff,
};

const canUseWebGL = () => {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
};

export function ForgeScene({ mode }: { mode: ForgeMode }) {
  const mountRef = useRef<HTMLDivElement>(null);
  const modeRef = useRef(mode);

  useEffect(() => {
    modeRef.current = mode;
  }, [mode]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount || !canUseWebGL()) return;

    let cleanupScene: (() => void) | undefined;
    let cancelled = false;

    void import("three").then((THREE) => {
      if (cancelled || !mount.isConnected) return;

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      const clock = new THREE.Clock();
      const pointer = new THREE.Vector2(0, 0);
      const targetPointer = new THREE.Vector2(0, 0);
      const activeColor = new THREE.Color(modeColors[modeRef.current]);
      const emberColor = new THREE.Color(0xff7a2f);
      const emissiveTarget = new THREE.Color();
      const disposableGeometries: Three.BufferGeometry[] = [];
      const disposableMaterials: Three.Material[] = [];
      let animationId = 0;

      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.25;
      renderer.setClearColor(0x000000, 0);
      renderer.domElement.className = "forge-webgl";
      mount.appendChild(renderer.domElement);

      const collectGeometry = <T extends Three.BufferGeometry>(geometry: T) => {
        disposableGeometries.push(geometry);
        return geometry;
      };

      const collectMaterial = <T extends Three.Material>(material: T) => {
        disposableMaterials.push(material);
        return material;
      };

      const root = new THREE.Group();
      root.rotation.x = -0.12;
      scene.add(root);

      const ambient = new THREE.AmbientLight(0xffffff, 0.48);
      scene.add(ambient);

      const keyLight = new THREE.DirectionalLight(0xffd7a0, 3.8);
      keyLight.position.set(5, 7, 5);
      scene.add(keyLight);

      const cyanLight = new THREE.PointLight(0x82e6c9, 28, 16);
      cyanLight.position.set(-4.2, 2.4, -1.8);
      scene.add(cyanLight);

      const emberLight = new THREE.PointLight(0xff7a2f, 38, 14);
      emberLight.position.set(2.4, 2.2, 2.2);
      scene.add(emberLight);

      const plateMaterial = collectMaterial(
        new THREE.MeshStandardMaterial({
          color: 0x13161a,
          roughness: 0.68,
          metalness: 0.25,
        })
      );
      const plate = new THREE.Mesh(
        collectGeometry(new THREE.BoxGeometry(6.8, 0.1, 4.7)),
        plateMaterial
      );
      plate.position.y = -0.08;
      root.add(plate);

      const grid = new THREE.GridHelper(7, 20, 0x37505a, 0x233139);
      grid.position.y = 0.005;
      grid.scale.z = 0.68;
      root.add(grid);
      disposableGeometries.push(grid.geometry);
      const gridMaterial = Array.isArray(grid.material)
        ? grid.material
        : [grid.material];
      disposableMaterials.push(...gridMaterial);

      const chamberMaterial = collectMaterial(
        new THREE.MeshBasicMaterial({
          color: 0xffffff,
          transparent: true,
          opacity: 0.16,
        })
      );
      const railGeometry = collectGeometry(
        new THREE.BoxGeometry(0.045, 0.045, 1)
      );
      const rails = [
        [0, 2.72, -2.35, 6.9, 1, 1],
        [0, 2.72, 2.35, 6.9, 1, 1],
        [-3.45, 2.72, 0, 1, 1, 4.7],
        [3.45, 2.72, 0, 1, 1, 4.7],
        [-3.45, 1.28, -2.35, 1, 58, 1],
        [3.45, 1.28, -2.35, 1, 58, 1],
        [-3.45, 1.28, 2.35, 1, 58, 1],
        [3.45, 1.28, 2.35, 1, 58, 1],
      ] as const;

      rails.forEach(([x, y, z, sx, sy, sz]) => {
        const rail = new THREE.Mesh(railGeometry, chamberMaterial);
        rail.position.set(x, y, z);
        rail.scale.set(sx, sy, sz);
        root.add(rail);
      });

      const cubeGeometry = collectGeometry(
        new THREE.BoxGeometry(0.26, 0.16, 0.26)
      );
      const cubeMaterial = collectMaterial(
        new THREE.MeshStandardMaterial({
          color: 0xff7a2f,
          emissive: 0x3b1303,
          emissiveIntensity: 0.42,
          roughness: 0.52,
          metalness: 0.06,
        })
      );
      const dimension = 14;
      const count = dimension * dimension;
      const voxels = new THREE.InstancedMesh(cubeGeometry, cubeMaterial, count);
      const matrix = new THREE.Matrix4();
      const color = new THREE.Color();
      let index = 0;

      for (let x = 0; x < dimension; x += 1) {
        for (let z = 0; z < dimension; z += 1) {
          const nx = (x / (dimension - 1) - 0.5) * 2;
          const nz = (z / (dimension - 1) - 0.5) * 2;
          const radius = Math.sqrt(nx * nx + nz * nz);
          const wave =
            Math.sin(nx * Math.PI * 2.5) * Math.cos(nz * Math.PI * 2);
          const height = Math.max(
            0.16,
            0.22 + (1 - radius) * 0.92 + wave * 0.18
          );

          matrix.compose(
            new THREE.Vector3(
              (x - dimension / 2) * 0.31 + 0.15,
              height / 2,
              (z - dimension / 2) * 0.31 + 0.15
            ),
            new THREE.Quaternion(),
            new THREE.Vector3(1, height / 0.16, 1)
          );
          voxels.setMatrixAt(index, matrix);
          color.setHSL(0.08 + radius * 0.08, 0.9, 0.48 + (1 - radius) * 0.18);
          voxels.setColorAt(index, color);
          index += 1;
        }
      }

      voxels.instanceMatrix.needsUpdate = true;
      if (voxels.instanceColor) voxels.instanceColor.needsUpdate = true;
      root.add(voxels);

      const toolGroup = new THREE.Group();
      root.add(toolGroup);

      const carriageMaterial = collectMaterial(
        new THREE.MeshStandardMaterial({
          color: 0xd8dde3,
          roughness: 0.26,
          metalness: 0.72,
        })
      );
      const darkMaterial = collectMaterial(
        new THREE.MeshStandardMaterial({
          color: 0x1c2229,
          roughness: 0.5,
          metalness: 0.55,
        })
      );
      const hotMaterial = collectMaterial(
        new THREE.MeshStandardMaterial({
          color: 0xffb25f,
          emissive: 0xff5a1f,
          emissiveIntensity: 1.4,
          roughness: 0.2,
        })
      );

      const carriage = new THREE.Mesh(
        collectGeometry(new THREE.BoxGeometry(1.15, 0.52, 0.72)),
        darkMaterial
      );
      carriage.position.y = 2.3;
      toolGroup.add(carriage);

      const nozzle = new THREE.Mesh(
        collectGeometry(new THREE.ConeGeometry(0.24, 0.7, 24)),
        carriageMaterial
      );
      nozzle.position.y = 1.72;
      nozzle.rotation.x = Math.PI;
      toolGroup.add(nozzle);

      const bead = new THREE.Mesh(
        collectGeometry(new THREE.SphereGeometry(0.13, 24, 16)),
        hotMaterial
      );
      bead.position.y = 1.33;
      toolGroup.add(bead);

      const pathCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-2.4, 1.34, 1.2),
        new THREE.Vector3(-1.2, 1.34, -1.1),
        new THREE.Vector3(0.2, 1.34, -0.2),
        new THREE.Vector3(1.2, 1.34, -1.35),
        new THREE.Vector3(2.2, 1.34, 0.8),
      ]);
      const pathMaterial = collectMaterial(
        new THREE.MeshBasicMaterial({
          color: 0xffb25f,
          transparent: true,
          opacity: 0.78,
        })
      );
      const path = new THREE.Mesh(
        collectGeometry(new THREE.TubeGeometry(pathCurve, 80, 0.018, 8, false)),
        pathMaterial
      );
      root.add(path);

      const filamentCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-1.2, 3.55, 0.2),
        new THREE.Vector3(-0.4, 3.15, 0),
        new THREE.Vector3(0.15, 2.78, 0.1),
        new THREE.Vector3(0.15, 2.48, 0.1),
      ]);
      const filamentMaterial = collectMaterial(
        new THREE.MeshStandardMaterial({
          color: 0x82e6c9,
          emissive: 0x173f36,
          emissiveIntensity: 0.7,
          roughness: 0.34,
        })
      );
      const filament = new THREE.Mesh(
        collectGeometry(
          new THREE.TubeGeometry(filamentCurve, 48, 0.045, 12, false)
        ),
        filamentMaterial
      );
      root.add(filament);

      const particleCount = 110;
      const particlePositions = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount; i += 1) {
        const offset = i * 3;
        particlePositions[offset] = (Math.random() - 0.5) * 7;
        particlePositions[offset + 1] = Math.random() * 3.4 + 0.4;
        particlePositions[offset + 2] = (Math.random() - 0.5) * 5;
      }
      const particleGeometry = collectGeometry(new THREE.BufferGeometry());
      particleGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(particlePositions, 3)
      );
      const particleMaterial = collectMaterial(
        new THREE.PointsMaterial({
          color: 0xffb25f,
          size: 0.035,
          transparent: true,
          opacity: 0.62,
          depthWrite: false,
        })
      );
      const particles = new THREE.Points(particleGeometry, particleMaterial);
      root.add(particles);

      camera.position.set(0, 2.45, 7.2);
      camera.lookAt(0, 1, 0);

      const resize = () => {
        const rect = mount.getBoundingClientRect();
        const width = Math.max(1, rect.width);
        const height = Math.max(1, rect.height);
        const pixelRatio = Math.min(
          window.devicePixelRatio || 1,
          width < 720 ? 1.35 : 1.8
        );
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setPixelRatio(pixelRatio);
        renderer.setSize(width, height, false);
      };

      const onPointerMove = (event: PointerEvent) => {
        const rect = mount.getBoundingClientRect();
        targetPointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
        targetPointer.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      };

      const animate = () => {
        const elapsed = clock.getElapsedTime();
        const rootElement = document.documentElement;
        const maxScroll = Math.max(1, rootElement.scrollHeight - window.innerHeight);
        const pageProgress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
        activeColor.setHex(modeColors[modeRef.current]);
        pointer.lerp(targetPointer, 0.055);
        cubeMaterial.color.lerp(activeColor, 0.035);
        emissiveTarget.copy(activeColor).multiplyScalar(0.28);
        cubeMaterial.emissive.lerp(emissiveTarget, 0.025);
        filamentMaterial.color.lerp(activeColor, 0.04);
        pathMaterial.color.lerp(activeColor, 0.04);
        cyanLight.color.lerp(activeColor, 0.025);
        emberColor.lerp(activeColor, 0.018);
        particleMaterial.color.lerp(emberColor, 0.02);

        const speed = reducedMotion ? 0.08 : 1;
        camera.position.x = (pageProgress - 0.5) * 1.7 + pointer.x * 0.16;
        camera.position.y = 2.25 + Math.sin(pageProgress * Math.PI * 1.4) * 0.58;
        camera.position.z = 7.4 - pageProgress * 1.35;
        camera.lookAt(0, 1.05 + pageProgress * 0.35, 0);
        root.position.x = (0.5 - pageProgress) * 0.55;
        root.position.z = -pageProgress * 0.45;
        root.rotation.y =
          Math.sin(elapsed * 0.16 * speed) * 0.18 +
          pointer.x * 0.1 +
          (pageProgress - 0.5) * 0.34;
        root.rotation.x = -0.12 + pointer.y * 0.04;
        particles.rotation.y = elapsed * 0.03 * speed;
        particles.position.y = Math.sin(elapsed * 0.7 * speed) * 0.08;

        const t = (Math.sin(elapsed * 0.34 * speed) + 1) / 2;
        const toolPosition = pathCurve.getPointAt(t);
        toolGroup.position.copy(toolPosition);
        toolGroup.position.y += 0.72 + Math.sin(elapsed * 2.2 * speed) * 0.035;
        emberLight.position.set(
          toolGroup.position.x,
          toolGroup.position.y + 0.2,
          toolGroup.position.z
        );
        bead.scale.setScalar(1 + Math.sin(elapsed * 7 * speed) * 0.12);

        renderer.render(scene, camera);
        animationId = window.requestAnimationFrame(animate);
      };

      resize();
      mount.addEventListener("pointermove", onPointerMove, { passive: true });
      window.addEventListener("resize", resize, { passive: true });
      animationId = window.requestAnimationFrame(animate);

      cleanupScene = () => {
        window.cancelAnimationFrame(animationId);
        window.removeEventListener("resize", resize);
        mount.removeEventListener("pointermove", onPointerMove);
        renderer.dispose();
        disposableGeometries.forEach((geometry) => geometry.dispose());
        disposableMaterials.forEach((material) => material.dispose());
        renderer.domElement.remove();
      };
    });

    return () => {
      cancelled = true;
      cleanupScene?.();
    };
  }, []);

  return (
    <div ref={mountRef} className="forge-canvas-shell" aria-hidden="true">
      <div className="forge-fallback">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
