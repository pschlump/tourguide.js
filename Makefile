
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

NODE_LIB= \
	node_modules/@floating-ui/core/dist/floating-ui.core.esm.js \
	node_modules/@floating-ui/core/dist/floating-ui.core.umd.js \
	node_modules/@floating-ui/core/dist/floating-ui.core.umd.min.js \
	node_modules/@floating-ui/dom/dist/floating-ui.dom.esm.js \
	node_modules/@floating-ui/dom/dist/floating-ui.dom.umd.js \
	node_modules/@floating-ui/dom/dist/floating-ui.dom.umd.min.js \
	node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.esm.js \
	node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.umd.js \
	node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.umd.min.js \
	node_modules/@floating-ui/utils/dist/floating-ui.utils.esm.js \
	node_modules/@floating-ui/utils/dist/floating-ui.utils.umd.js \
	node_modules/@floating-ui/utils/dist/floating-ui.utils.umd.min.js

tourguide.esm.js tourguide.js tourguide.min.js tourguide.umd.js: $(SRC) $(NODE_LIB)
	npm run build

install: tourguide.js tourguide.min.js
	cp tourguide.js tourguide.min.js /Users/philip/go/src/github.com/write-it-right/write-it-right/appsvr/www/js
