install: # установить зависимости
	npm ci
	
gendiff: # запустить приложение
	node bin/gendiff.js

publish: #обновление пакетов 
	npm publish --dry-run

lint: #lint
	npx eslint .