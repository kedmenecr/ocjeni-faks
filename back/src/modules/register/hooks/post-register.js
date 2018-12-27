const responseService = require('../../../services/response.service');
const registerService = require('../../../services/register.service');
const environment = require('../../../utility/environment');
const bcrypt = require('bcrypt');

const postRegister = async function (request, response) {
    let body = request.body;
    body.password = await bcrypt.hash(body.password, environment.authentication.bcrypt.saltRounds)

    const registerResponse = await registerService.registerUser(body);

    if (registerResponse.success) {
        const response = {
            user: await usersService.getUserById(registerResponse.data.id),
        }
        response.send(responseService.formatResponseData(registerResponse.data));
    } else {
        response.send(responseService.formatResponseError(registerResponse.error));
    }
}

module.exports = postRegister;


// {
//     success: 'true',
//     data: {
//         authToke: "...."
//         user: {..},
//     }
// }