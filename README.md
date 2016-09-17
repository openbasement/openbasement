# OpenBasement

Revolutionary app for people who don't like social media and all kind of networks because they have no friends.

This application will let them achieve social-media like experience but without all information noise, people spamming
random content all day long, advertising, duck-face pictures and proofs of social retardness.

Decision to deliver to basement dwellers only allowd us to perform amazing optimizations - we have no backend! As we
have no need to send data to server, we could provide you the best experience without cost, so no advertising and no
spying.

Also, no friends.

## Requirements

Node and NPM installation is required beforehand if you want to run local/develop you own version.

Otherwise just access [openbasement.github.io](https://openbasement.github.io).

## Building prod setup

```bash
cd openbasement
npm install
npm run dist
cd docs
python -m SimpleHTTPServer 8000 # just to check if it works
```

## Running dev version

```bash
cd openbasement
npm install
npm start
```

## Reseting data for test purposes

Call in the console:

```javascript
window.resetState()
```
