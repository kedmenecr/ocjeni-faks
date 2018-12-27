const express = require('express');
const registerMogule = express()

registerMogule.post('', require('./hooks/post-register'));

module.exports = registerMogule;