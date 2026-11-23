"""Regenerate responsive portfolio images with Python and Pillow.

Run from any directory: python scripts/optimize_images.py
Original images remain available for the full-resolution lightbox.
"""
import json
import re
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
projects = json.loads((ROOT / "src/data/portfolioProjects.json").read_text(encoding="utf-8"))
sources = {image["src"] for project in projects["projects"] for image in project["images"]}
sources.update(re.findall(r"src: '([^']+)'", (ROOT / "src/data/awards.ts").read_text(encoding="utf-8")))
sources.add("/images/cvImg.png")
manifest = {}
original_bytes = optimized_bytes = 0

for source in sorted(sources):
    original = PUBLIC / source.lstrip("/")
    original_bytes += original.stat().st_size
    with Image.open(original) as image:
        image = ImageOps.exif_transpose(image)
        width, height = image.size
        variants = []
        for size in sorted({min(width, size) for size in (160, 640, 1280)}):
            url = f"/images/optimized/{source.removeprefix('/images/')}-{size}.webp"
            output = PUBLIC / url.lstrip("/")
            output.parent.mkdir(parents=True, exist_ok=True)
            resized = image.resize((size, max(1, round(height * size / width))), Image.Resampling.LANCZOS)
            resized.save(output, "WEBP", quality=82, method=6)
            variants.append({"src": url, "width": size})
        manifest[source] = {"width": width, "height": height, "variants": variants}
        optimized_bytes += (PUBLIC / variants[-1]["src"].lstrip("/")).stat().st_size

(ROOT / "src/data/imageVariants.json").write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")
print(f"Generated variants for {len(manifest)} images. Largest variants: {original_bytes:,} -> {optimized_bytes:,} bytes.")
