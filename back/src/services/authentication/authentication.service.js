const databaseService = require('../database.service');

/*
 * Service used for authentication operations on database.
 */

class authenticationService {

    // GET authentication
    getAuthenticationById(id) {
        return databaseService.query(`SELECT * FROM authentication WHERE id=${id}`);
    }

    getAuthenticationByUsername(username) {
        return databaseService.query(`SELECT * FROM authentication WHERE username=${username}`);
    }


    // CREATE authentication, returns id (log in)
    // Should use queue
    createAuthentication(payload) {
        return databaseService.query(`INSERT INTO authentication (paload) VALUES ('${payload}')`);
    }


    // UPDATE authentication (renew, access from new ip)
    // Should use queue 
    updateAuthentication(id, payload) {
        return databaseService.query(`UPDATE authenticationPayload () VALUES  WHERE id=${id}`);
    }

    
    // DELETE authentication (log out)
    deleteAuthentication(id) {
        return databaseService.query(`DELETE FROM authentication WHERE id=${id}`);
    }
}

module.exports = new authenticationService();