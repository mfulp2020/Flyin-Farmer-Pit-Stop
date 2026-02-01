from rembg import remove
from PIL import Image
import sys

def process_logo(input_path, output_path):
    input_image = Image.open(input_path)
    output_image = remove(input_image)
    output_image.save(output_path)

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python process_logo.py <input_path> <output_path>")
    else:
        process_logo(sys.argv[1], sys.argv[2])
