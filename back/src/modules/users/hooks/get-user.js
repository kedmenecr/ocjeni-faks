const usersService = require('../../../services/users.service');
const responseService = require('../../../services/response.service');

const getUser = function (request, response) {
    const params = request.params;

    // authorizationService.verifyUserAccess(request, response);
    // validationService.verifyRequestParams(request, response, ['id']);

    usersService.getUserById(params.id).then(
        results => {
            const user = results.length >= 1 ? results[0] : null;

            if (user) {
                response.send(responseService.formatResponseData(user));
            } else {
                response.send(responseService.formatResponseError(`User with id ${params.id} not found!`));
            }
        }
    ).catch(error => console.error(error));
}

module.exports = getUser;