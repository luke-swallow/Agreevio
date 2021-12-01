import gdown
import shutil
import os

def download_model():
	url = "https://drive.google.com/u/1/uc?export=download&id=1UvYnEzjaRn3CVwetLgN4GWvHqZuRJjFO"
	filename = 't5-small.zip'
	gdown.download(url, filename, quiet=False)
	shutil.unpack_archive(filename, 't5-small')
	os.remove(filename)

if __name__ == "__main__":
	download_model()



