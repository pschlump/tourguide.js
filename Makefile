
all: tourguide.esm.js tourguide.js tourguide.min.js tourguide.umd.js

SRC= \
	src/handler/index.js \
	src/decorator/index.js \
	src/step/index.js \
	src/utils/assert.js \
	src/utils/index.js \
	src/utils/color.js \
	src/utils/await.js \
	src/Tour.js \
	src/icons/index.js \
	src/overlay/index.js \
	src/scrollintoview/index.js 

tourguide.esm.js tourguide.js tourguide.min.js tourguide.umd.js: $(SRC)
	npm run build

install: tourguide.js tourguide.min.js
	cp tourguide.js tourguide.min.js /Users/philip/go/src/github.com/write-it-right/write-it-right/appsvr/www/js
