import sys, os, glob
from pypdf import PdfReader

src = r"C:\Users\ZBZ20\Desktop\linux"
out = r"D:\AI\workbuddy_cunchu\2026-08-01-21-21-08\.pdfwork"
os.makedirs(out, exist_ok=True)
files = [
    "davechild_linux-command-line.pdf",
    "Linux-Cheat-Sheet-Sponsored-By-Loggly.pdf",
    "linux-commands-cheatsheet (1).pdf",
    "linux-commands-cheatsheet.pdf",
    "linux-commands-cheat-sheet-pdf.pdf",
    "最全Linux常用命令大全.pdf",
]
for f in files:
    p = os.path.join(src, f)
    try:
        r = PdfReader(p)
        n = len(r.pages)
        txt = []
        for pg in r.pages:
            txt.append(pg.extract_text() or "")
        full = "\n".join(txt)
        op = os.path.join(out, f.replace(".pdf", ".txt").replace(" ", "_"))
        with open(op, "w", encoding="utf-8") as w:
            w.write(full)
        print(f"{f}: pages={n} chars={len(full)} -> {os.path.basename(op)}")
    except Exception as e:
        print(f"{f}: ERROR {e}")
