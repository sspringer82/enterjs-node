# Links

- node version manager: https://github.com/creationix/nvm (geht auch unter windows)
- node version manager für windows: https://github.com/marcelklehr/nodist
- Airbnb style guide: https://github.com/airbnb/javascript
- Eslint: https://eslint.org/
- Prettier: https://github.com/prettier/prettier
- Nodemon: https://nodemon.io/
- Winston logger: https://github.com/winstonjs/winston
- Morgan: https://github.com/expressjs/morgan
- Pug (template engine): https://pugjs.org/api/getting-started.html
- Handlebars (template engine): https://handlebarsjs.com/
- Caniuse: https://caniuse.com/#search=http2
- node.green: https://node.green/
- docker image guide: https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

# Debugger

Applikation im Debugger starten: node --inspect index.js

Applikation im Debugger mit Break on First line starten: node --inspect-brk index.js

Mit den Chrome Dev Tools verbinden: chrome://inspect

Anleitung für:

- Webstorm: https://www.jetbrains.com/help/webstorm/running-and-debugging-node-js.html
- VSCode: https://code.visualstudio.com/docs/nodejs/nodejs-debugging

# Template engine

npm install ejs

# Zertifikate

````openssl genrsa -out localhost.key 2048
```openssl req -new -x509 -key localhost.key -out localhost.cert -days 9999 -subj /CN=localhost
````
