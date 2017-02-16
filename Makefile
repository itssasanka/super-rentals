.PHONY: rentals image enter ready
rentals:
	docker run -it  --rm --name rentals -v $(PWD):/code -p 4000:4000 -p 5000:5000 ember-app ember server --port 4000 --live-reload-port 5000
image:
	docker build -t ember-app .
enter:
	docker exec -it rentals bash
ready:
	docker run -it --rm -v $(PWD):/code \
	ember-app npm install
