# strip-exif-data

Takes a seed directory of images and copies all images minus there exif data. It will rotate images as needed when copying, so that they won't need orientation exif data anymore.

## setup

`cp .env.sample .env` and fill in values.

`docker-compose build` followed by `docker-compose run app yarn` to install app dependencies.

## run

**Either:**
bash into the `app` container with `docker-compose run app sh` and then run `yarn run strip` separately, staying in the container's scope.
***or***
run the script in the container from outwith the container (on the/your host machine), `docker-compose run app yarn run strip`, then return to the host scope after.

## todo

- read in env vars, if missing some required - exit with error
- function that reads a file and its exif data, and saves it without exif data
	- sharp to read/save image 
	- orientate image based on exif
	- but then save without exif data
- read through whole seed dir and for all images, to the above