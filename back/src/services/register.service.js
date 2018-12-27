const environment = require('../utility/environment');
const logger = require('../utility/logger');
const responseService = require('../services/response.service');
const usersService = require('../services/users.service');


/**
 * Service used for ...
 */
// TODO: Add MySQL trigger for on-create on users to also generate a row in userDetails table
// TODO: Rework logic of 
class RegisterService {

    async registerUser(userData) {
        try {
            // Check if username or email already exist before registering new user
            const usernameLookup = await usersService.getUserByUsername(userData.username);
            const emailLookup = await usersService.getUserByEmail(userData.email);

            if (usernameLookup.length > 0) {
                return {
                    success: false,
                    error: 'Username already exists!'
                };
            } else if (emailLookup.length > 0) {
                return {
                    success: false,
                    error: 'Email already exists!'
                };
            } else {
                const createdUser = await usersService.createUser(userData);

                if (createdUser.insertId) {
                    return {
                        success: true,
                        data: (await usersService.getUserById(createdUser.insertId))[0]
                    };
                } else {
                    return {
                        success: false,
                        error: 'Unknown'
                    }
                }
            }
        } catch (e) {
            console.error(e);
            return {
                success: false,
                error: e
            }
        }
    }
}

module.exports = new RegisterService();