const databaseService = require('./database.service');

/**
 * Service used for users operations on the database.
 */
class UsersService {

    getUserById(id) {
        return databaseService.query(`SELECT * FROM users WHERE id=${id}`);
    }

    getUserByEmail(email) {
        return databaseService.query(`SELECT * FROM users WHERE email='${email}'`);
    }

    getUserByUsername(username) {
        return databaseService.query(`SELECT * FROM users WHERE username='${username}'`);
    }

    getUserDetails(id) {
        return databaseService.query(`SELECT * FROM userDetails WHERE userId=${id}`);
    }

    getUserWithDetails(id) {
        return databaseService.query(`SELECT * FROM users JOIN userDetails ON userDetails.userId=users.id WHERE users.id=${id}`)
    }

    updateUserDetails(id, details) {
        return databaseService.query(`UPDATE userDetails () VALUES  WHERE userId=${id}`);
    }

    updateUserPassword(id, password) {
        return databaseService.query(`UPDATE users() VALUES  WHERE id=${id}`);
    }

    updateUserEmail(id, email) {
        return databaseService.query(`UPDATE users() VALUES  WHERE id=${id}`);
    }

    createUser(userData) {
        return databaseService.query(`INSERT INTO users (username, email, password) VALUES ('${userData.username}', '${userData.email}', '${userData.password}')`);
    }

    deleteUser(id) {
        return databaseService.query(`DELETE FROM users WHERE userId=${id}`);
    }
}

module.exports = new UsersService();