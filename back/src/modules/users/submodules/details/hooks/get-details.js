const usersService = require('../../../../../services/users.service');
const responseService = require('../../../../../services/response.service');

const getDetails = function (request, response) {
    const params = request.params;

    // authorizationService.verifyUserAccess(request, response);
    // validationService.verifyRequestParams(request, response, ['id']);

    usersService.getUserWithDetails(params.id).then(
        results => {
            const details = results.length >= 1 ? results[0] : null;

            if (details) {
                response.send(responseService.formatResponseData(details));
            } else {
                response.send(responseService.formatResponseError(`User with id ${params.id} not found!`));
            }
        }
    ).catch(error => console.error(error));
}

module.exports = getDetails;