import math
import sys
from pathlib import Path

import bpy


ROOT = Path(__file__).resolve().parents[1]
DEFAULT_OUTPUT = ROOT / "public" / "models" / "anycubic-kobra-x-forge.glb"


def get_output_path() -> Path:
    if "--" in sys.argv:
        args = sys.argv[sys.argv.index("--") + 1 :]
        if args:
            return Path(args[0]).resolve()
    return DEFAULT_OUTPUT


def clear_scene() -> None:
    bpy.ops.object.select_all(action="SELECT")
    bpy.ops.object.delete()


def make_material(name, color, metallic=0.0, roughness=0.38, alpha=1.0, emission=None):
    material = bpy.data.materials.new(name)
    material.use_nodes = True
    bsdf = material.node_tree.nodes.get("Principled BSDF")
    if bsdf:
        bsdf.inputs["Base Color"].default_value = color
        bsdf.inputs["Metallic"].default_value = metallic
        bsdf.inputs["Roughness"].default_value = roughness
        bsdf.inputs["Alpha"].default_value = alpha
        if emission:
            bsdf.inputs["Emission Color"].default_value = emission[0]
            bsdf.inputs["Emission Strength"].default_value = emission[1]
    material.diffuse_color = color
    if alpha < 1:
        material.blend_method = "BLEND"
        material.use_screen_refraction = True
    return material


def cube(name, location, dimensions, material, bevel=0.0, rotation=(0, 0, 0)):
    bpy.ops.mesh.primitive_cube_add(size=1, location=location, rotation=rotation)
    obj = bpy.context.object
    obj.name = name
    obj.dimensions = dimensions
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    if material:
        obj.data.materials.append(material)
    if bevel:
        modifier = obj.modifiers.new(f"{name}_soft_edges", "BEVEL")
        modifier.width = bevel
        modifier.segments = 3
        obj.modifiers.new(f"{name}_weighted_normals", "WEIGHTED_NORMAL")
    return obj


def cylinder(name, location, radius, depth, material, vertices=48, rotation=(0, 0, 0)):
    bpy.ops.mesh.primitive_cylinder_add(
        vertices=vertices,
        radius=radius,
        depth=depth,
        location=location,
        rotation=rotation,
    )
    obj = bpy.context.object
    obj.name = name
    if material:
        obj.data.materials.append(material)
    obj.modifiers.new(f"{name}_weighted_normals", "WEIGHTED_NORMAL")
    return obj


def torus(name, location, major_radius, minor_radius, material, rotation=(0, 0, 0)):
    bpy.ops.mesh.primitive_torus_add(
        major_segments=44,
        minor_segments=8,
        major_radius=major_radius,
        minor_radius=minor_radius,
        location=location,
        rotation=rotation,
    )
    obj = bpy.context.object
    obj.name = name
    if material:
        obj.data.materials.append(material)
    obj.modifiers.new(f"{name}_weighted_normals", "WEIGHTED_NORMAL")
    return obj


def path_curve(name, points, material, bevel_depth=0.018):
    curve = bpy.data.curves.new(name, type="CURVE")
    curve.dimensions = "3D"
    curve.resolution_u = 8
    curve.bevel_depth = bevel_depth
    curve.bevel_resolution = 3
    spline = curve.splines.new("POLY")
    spline.points.add(len(points) - 1)
    for point, coords in zip(spline.points, points):
        point.co = (coords[0], coords[1], coords[2], 1)
    obj = bpy.data.objects.new(name, curve)
    bpy.context.collection.objects.link(obj)
    if material:
        obj.data.materials.append(material)
    return obj


def text_label(name, text, location, size, material, rotation=(math.radians(90), 0, 0)):
    bpy.ops.object.text_add(location=location, rotation=rotation)
    obj = bpy.context.object
    obj.name = name
    obj.data.body = text
    obj.data.align_x = "CENTER"
    obj.data.align_y = "CENTER"
    obj.data.size = size
    obj.data.extrude = 0.003
    if material:
        obj.data.materials.append(material)
    return obj


def parent_to(obj, parent):
    obj.parent = parent
    return obj


def build_model(output_path: Path) -> None:
    clear_scene()
    output_path.parent.mkdir(parents=True, exist_ok=True)

    white = make_material("warm white aluminum", (0.88, 0.86, 0.8, 1), 0.25, 0.28)
    soft_white = make_material("matte white plastic", (0.95, 0.94, 0.88, 1), 0.08, 0.4)
    black = make_material("graphite black", (0.018, 0.02, 0.022, 1), 0.28, 0.32)
    dark = make_material("dark rubber", (0.045, 0.047, 0.05, 1), 0.08, 0.55)
    rail = make_material("brushed rail", (0.68, 0.69, 0.66, 1), 0.72, 0.2)
    glass = make_material("screen glass", (0.015, 0.018, 0.02, 1), 0.0, 0.12)
    orange = make_material(
        "voxel orange filament",
        (0.85, 0.46, 0.12, 1),
        0.08,
        0.32,
        emission=((0.9, 0.36, 0.08, 1), 0.25),
    )
    teal = make_material("teal bowden tube", (0.36, 0.86, 0.82, 1), 0.08, 0.28)
    purple = make_material("purple filament", (0.34, 0.08, 0.64, 1), 0.1, 0.42)
    yellow = make_material("yellow filament", (0.78, 0.72, 0.08, 1), 0.1, 0.42)
    charcoal = make_material("black filament", (0.03, 0.03, 0.032, 1), 0.1, 0.42)
    silver_filament = make_material("silver filament", (0.72, 0.72, 0.68, 1), 0.28, 0.32)
    label = make_material("printed label white", (1.0, 0.96, 0.88, 1), 0.0, 0.58)
    red = make_material("brand red", (0.78, 0.12, 0.08, 1), 0.0, 0.4)

    model_root = bpy.data.objects.new("KobraXForgeModel", None)
    bpy.context.collection.objects.link(model_root)

    base_parts = [
        cube("rounded base shell", (0, 0, 0.18), (3.55, 1.9, 0.34), soft_white, 0.12),
        cube("black base underside", (0, 0, -0.03), (3.32, 1.68, 0.16), dark, 0.06),
        cube("front base slot", (0, -0.98, 0.26), (0.56, 0.04, 0.08), dark, 0.02),
        cube("home button", (0, -0.99, 0.42), (0.22, 0.04, 0.08), rail, 0.04),
    ]
    for part in base_parts:
        parent_to(part, model_root)

    frame_specs = [
        ("left tower", (-1.45, 0, 1.88), (0.26, 0.23, 3.16)),
        ("right tower", (1.45, 0, 1.88), (0.26, 0.23, 3.16)),
        ("lower gantry", (0, 0, 0.95), (3.22, 0.18, 0.16)),
        ("x gantry rail", (0, 0, 2.42), (2.78, 0.12, 0.12)),
        ("top bridge", (0, 0, 3.48), (3.32, 0.18, 0.16)),
        ("left top cap", (-1.45, 0, 3.66), (0.42, 0.3, 0.18)),
        ("right top cap", (1.45, 0, 3.66), (0.42, 0.3, 0.18)),
    ]
    for name, loc, dims in frame_specs:
        parent_to(cube(name, loc, dims, white, 0.055), model_root)

    for x in (-1.63, -1.28, 1.28, 1.63):
        parent_to(cylinder(f"z rail {x}", (x, -0.16, 2.05), 0.035, 2.9, rail), model_root)

    for x in (-1.45, 1.45):
        pulley = torus(f"top pulley {x}", (x, -0.18, 3.64), 0.13, 0.025, dark, (math.pi / 2, 0, 0))
        parent_to(pulley, model_root)

    bed_empty = bpy.data.objects.new("BuildPlate", None)
    bpy.context.collection.objects.link(bed_empty)
    bed_empty.parent = model_root
    for part in [
        cube("bed carriage", (0, 0.05, 0.6), (2.02, 1.38, 0.1), rail, 0.03),
        cube("magnetic build sheet", (0, 0.02, 0.72), (1.92, 1.28, 0.045), black, 0.025),
        cube("front bed lip", (0, -0.66, 0.78), (1.88, 0.06, 0.075), soft_white, 0.02),
    ]:
        parent_to(part, bed_empty)

    print_piece = bpy.data.objects.new("PrintedPiece", None)
    bpy.context.collection.objects.link(print_piece)
    print_piece.parent = bed_empty
    for index in range(14):
        ring = torus(
            f"printed layer {index:02d}",
            (0, 0.02, 0.8 + index * 0.045),
            0.24 + index * 0.004,
            0.011,
            orange if index % 4 else teal,
            (0, 0, 0),
        )
        ring.scale.y = 0.72
        parent_to(ring, print_piece)

    head_empty = bpy.data.objects.new("PrintHead", None)
    bpy.context.collection.objects.link(head_empty)
    head_empty.parent = model_root
    for part in [
        cube("print head body", (0, -0.24, 2.08), (0.52, 0.34, 0.62), soft_white, 0.055),
        cube("print head face", (0, -0.43, 2.08), (0.38, 0.045, 0.42), glass, 0.025),
        cube("print head top port", (0, -0.24, 2.48), (0.22, 0.18, 0.1), rail, 0.025),
        cylinder("hotend nozzle", (0, -0.36, 1.65), 0.07, 0.22, orange, 6, (math.pi, 0, 0)),
        text_label("head display label", "ACE GEN2", (0, -0.456, 2.18), 0.07, label, (math.radians(90), 0, 0)),
        text_label("brand on head", "ANYCUBIC", (0, -0.456, 1.84), 0.055, black, (math.radians(90), 0, 0)),
    ]:
        parent_to(part, head_empty)

    side_box = bpy.data.objects.new("SideModule", None)
    bpy.context.collection.objects.link(side_box)
    side_box.parent = model_root
    for part in [
        cube("side module shell", (1.82, -0.04, 1.12), (0.46, 0.42, 0.46), soft_white, 0.08),
        cube("side module face", (1.82, -0.27, 1.12), (0.34, 0.04, 0.28), white, 0.03),
        text_label("side module model", "KOBRA X", (1.82, -0.292, 1.12), 0.07, red, (math.radians(90), 0, 0)),
    ]:
        parent_to(part, side_box)

    screen_empty = bpy.data.objects.new("TouchScreen", None)
    bpy.context.collection.objects.link(screen_empty)
    screen_empty.parent = model_root
    screen_rotation = (math.radians(72), 0, 0)
    for part in [
        cube("screen body", (1.25, -0.92, 0.58), (0.62, 0.08, 0.44), black, 0.05, screen_rotation),
        cube("screen glass", (1.25, -0.955, 0.6), (0.52, 0.025, 0.34), glass, 0.025, screen_rotation),
        text_label("screen logo", "ANYCUBIC", (1.25, -0.973, 0.61), 0.055, label, (math.radians(72), 0, 0)),
    ]:
        parent_to(part, screen_empty)

    spool_specs = [
        (-1.22, purple, "1"),
        (-0.48, yellow, "2"),
        (0.48, charcoal, "3"),
        (1.22, silver_filament, "4"),
    ]
    for x, spool_mat, number in spool_specs:
        parent_to(cylinder(f"spool filament {number}", (x, 0.04, 4.08), 0.32, 0.26, spool_mat, 44, (0, math.pi / 2, 0)), model_root)
        parent_to(cylinder(f"spool left flange {number}", (x - 0.15, 0.04, 4.08), 0.36, 0.035, dark, 44, (0, math.pi / 2, 0)), model_root)
        parent_to(cylinder(f"spool right flange {number}", (x + 0.15, 0.04, 4.08), 0.36, 0.035, dark, 44, (0, math.pi / 2, 0)), model_root)
        parent_to(cylinder(f"spool hub {number}", (x, 0.04, 4.08), 0.09, 0.36, rail, 36, (0, math.pi / 2, 0)), model_root)
        parent_to(cube(f"spool bracket {number}", (x, 0.12, 3.58), (0.1, 0.14, 0.76), white, 0.04), model_root)
        parent_to(text_label(f"spool number {number}", number, (x, -0.16, 4.46), 0.08, black), model_root)

    for name, points, mat in [
        ("purple bowden path", [(-1.22, -0.08, 3.88), (-0.98, -0.4, 3.48), (-0.42, -0.34, 2.8), (0, -0.32, 2.46)], purple),
        ("yellow bowden path", [(-0.48, -0.08, 3.88), (-0.32, -0.5, 3.2), (-0.08, -0.42, 2.72), (0, -0.32, 2.46)], yellow),
        ("black bowden path", [(0.48, -0.08, 3.88), (0.32, -0.48, 3.08), (0.12, -0.38, 2.66), (0, -0.32, 2.46)], charcoal),
        ("silver bowden path", [(1.22, -0.08, 3.88), (0.92, -0.52, 3.18), (0.42, -0.42, 2.74), (0, -0.32, 2.46)], silver_filament),
        ("side cable", [(1.82, -0.26, 1.0), (2.22, -0.44, 0.64), (2.1, -0.75, 0.2), (1.54, -0.84, 0.14)], dark),
    ]:
        parent_to(path_curve(name, points, mat, 0.018), model_root)

    belt_specs = [
        ("front belt upper", (-1.42, -0.28, 2.54), (2.84, 0.035, 0.035)),
        ("front belt lower", (-1.42, -0.28, 2.32), (2.84, 0.035, 0.035)),
        ("left vertical belt", (-1.58, -0.28, 2.18), (0.035, 0.035, 2.58)),
        ("right vertical belt", (1.58, -0.28, 2.18), (0.035, 0.035, 2.58)),
    ]
    for name, loc, dims in belt_specs:
        parent_to(cube(name, loc, dims, dark, 0.012), model_root)

    bpy.ops.object.light_add(type="AREA", location=(0, -4, 6))
    key = bpy.context.object
    key.name = "softbox reflection"
    key.data.energy = 450
    key.data.size = 4
    bpy.ops.object.camera_add(location=(0, -6, 2.6), rotation=(math.radians(68), 0, 0))
    bpy.context.scene.camera = bpy.context.object

    bpy.ops.export_scene.gltf(
        filepath=str(output_path),
        export_format="GLB",
        export_apply=True,
        export_animations=False,
        export_yup=True,
    )


if __name__ == "__main__":
    build_model(get_output_path())
