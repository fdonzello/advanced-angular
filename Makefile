SHX="node_modules/shx/lib/cli.js"

BUILD_PATH="app-build"

setup:
	npm i

run:
	ng serve

test:
	ng test

e2e:
	ng e2e

build:
	$(SHX) rm -rf $(BUILD_PATH)
	ng build --aot --prod --output-path=$(BUILD_PATH)
