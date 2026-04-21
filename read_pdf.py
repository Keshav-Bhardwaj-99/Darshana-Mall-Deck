import os
from pypdf import PdfReader

pdf_file = "Mall - Screening Assignment.pdf"
output_file = "extracted_text.txt"

reader = PdfReader(pdf_file)
text = ""
for page in reader.pages:
    text += page.extract_text() + "\n"

with open(output_file, "w", encoding="utf-8") as f:
    f.write(text)
print("done")
