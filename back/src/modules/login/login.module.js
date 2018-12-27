const express = require('express');
const loginModule = express()

loginModule.post('', require('./hooks/post-login'));

module.exports = loginModule;