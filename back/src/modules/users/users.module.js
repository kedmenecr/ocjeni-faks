const express = require('express');
const usersModule = express()

usersModule.get('/:id', require('./hooks/get-user'));
usersModule.post('', require('./hooks/post-user'));
usersModule.put('', require('./hooks/put-user'));
usersModule.delete('/:id', require('./hooks/delete-user'));

usersModule.use('/', require('./submodules/details/details.module'));

module.exports = usersModule;