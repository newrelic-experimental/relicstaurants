#!make
.PHONY: checkout menu restaurant

checkout:
	cd checkout && npm install

menu:
	cd menu && npm install

restaurant:
	cd restaurant && npm install

install:
	npm install && make checkout menu restaurant

run:
	npx concurrently "npm:checkout" "npm:menu" "npm:restaurant" "npm:start" --kill-others
    
