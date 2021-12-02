from gdown import download
from shutil import unpack_archive
import os

def download_model():
	url = "https://drive.google.com/u/1/uc?export=download&id=1JZ7pYrkV_xatXh-0R3eB4DFFyw4DKauP"
	filename = 't5-small.zip'
	download(url, filename, quiet=False)
	if os.path.isdir('models') is False:
		os.mkdir('models')
	unpack_archive(filename, 'models/t5-small')
	os.remove(filename)

if __name__ == "__main__":
	download_model()



