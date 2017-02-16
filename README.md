# super-rentals
Just rough hands-on to create a sample Ember app;
Please refer to the official Ember site:
https://guides.emberjs.com/v2.11.0/tutorial/ember-cli/

## Prerequisites

You will either need:
- Docker

(OR)

the following things properly installed on your computer:
- [Node.js](https://nodejs.org/) (with NPM)


## Installation and running the App
#### Without Docker
- `npm install -g ember-cli`
- `npm install`
- `ember serve --port 4000 --live-reload-port 5000`

#### With Docker
- `make image`
- `make ready`
- `make rentals`


Your server is running inside a Docker container. You can access the container with `make enter`

