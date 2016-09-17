# OpenBasement

## Requirements

Node and NPM installation is required beforehand.

## Building prod setup

```bash
cd openbasement
npm install
npm run dist
cd docs
python -m SimpleHTTPServer 8000 # just to check it works
```

## Running dev version

```bash
cd openbasement
npm install
npm start
```

## Reseting data for test purposed

Call in console:

```javascript
window.resetState()
```