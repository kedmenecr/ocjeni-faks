const bcrypt = require('bcrypt');
const responseService = require('../../../services/response.service');
const userService = require('../../../services/users.service');
//const authenticationService = require('../../../services/authentication/authentication.service');
const jwtService = require('../../../services/authentication/jwt.service');


const postLogin = async function (request, response) {
    const body = request.body;

    let rows;
    if (body.username.indexOf('@') > -1) {
        rows = await userService.getUserByEmail(body.username);
    } else {
        rows = await userService.getUserByUsername(body.username);
    }

    try {
        const auth = await bcrypt.compare(body.passoword, rows[0].password);
        if (auth) {
            const token = await jwtService.signJwt(rows[0].id);
            // TODO: Send to sessions db
            response.send(responseService.formatResponseData({authToken: token}));
        } else {
            response.send(responseService.formatResponseError('Invalid username or password.'))
        }
    } catch (err) {
        response.send(responseService.formatResponseError('Invalid username or password.'))
    }
}

module.exports = postLogin;