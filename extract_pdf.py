import fitz
import sys

def extract_text(pdf_path, txt_path):
    try:
        doc = fitz.open(pdf_path)
        text = ""
        for page in doc:
            text += page.get_text()
        with open(txt_path, "w", encoding="utf-8") as f:
            f.write(text)
        print(f"Successfully extracted to {txt_path}")
    except Exception as e:
        print(f"Error reading {pdf_path}: {e}")

if __name__ == "__main__":
    extract_text(sys.argv[1], "pdf_output.txt")
