const usersModule = require('../modules/users/users.module');
const registerModule = require('../modules/register/register.module');
const loginModule = require('../modules/login/login.module');

module.exports = [
    {
        route: '/register',
        module: registerModule
    },
    {
        route: '/login',
        module: loginModule
    },
    {
        route: '/users',
        module: usersModule
    }
];