const express = require('express');
const detailsModule = express()

detailsModule.get('/:id/details', require('./hooks/get-details'));
detailsModule.put('/:id/details', require('./hooks/put-details'));

module.exports = detailsModule;