// import module
const express = require('express');
const appConfig = require('./config/appConfig');

const app = express();
app.get('/', (req, res) => res.send('Hello World'));
app.listen(appConfig.port, () => {console.log('Server running at http://127.0.0.1:3000/')});