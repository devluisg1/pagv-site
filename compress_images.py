import os
from PIL import Image, ImageOps

ROOT = "public"
MAX_SIDE = 2560
MIN_SIZE = 150_000  # só mexe em arquivos > 150KB

total_before = total_after = 0
count = 0
for dirpath, _, files in os.walk(ROOT):
    for f in files:
        ext = f.lower().rsplit(".", 1)[-1]
        if ext not in ("jpg", "jpeg", "webp", "png"):
            continue
        p = os.path.join(dirpath, f)
        size = os.path.getsize(p)
        if size < MIN_SIZE:
            continue
        try:
            im = Image.open(p)
            im = ImageOps.exif_transpose(im)
            w, h = im.size
            if max(w, h) > MAX_SIDE:
                r = MAX_SIDE / max(w, h)
                im = im.resize((round(w * r), round(h * r)), Image.LANCZOS)
            tmp = p + ".tmp"
            if ext in ("jpg", "jpeg"):
                im.convert("RGB").save(tmp, "JPEG", quality=78, optimize=True, progressive=True)
            elif ext == "webp":
                im.save(tmp, "WEBP", quality=75, method=6)
            else:
                im.save(tmp, "PNG", optimize=True)
            new = os.path.getsize(tmp)
            if new < size * 0.92:
                os.replace(tmp, p)
            else:
                os.remove(tmp)
                new = size
            total_before += size
            total_after += new
            count += 1
        except Exception as e:
            print("ERRO", p, e)

print(f"{count} arquivos: {total_before/1e6:.1f} MB -> {total_after/1e6:.1f} MB")
