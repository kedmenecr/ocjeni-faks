const environment = require('../utility/environment');
const logger = require('../utility/logger');
const mysql = require('mysql');

/**
 * Service used for database connection.
 */
class DatabaseService {

    constructor() {
        this.connection = mysql.createConnection({
            host     : environment.databaseHost,
            user     : environment.databaseUser,
            password : environment.databasePassword,
            database : environment.databaseName
          }
        );
        
        this.connection.connect();
    }

    query(query) {
        return new Promise((resolve, reject) => {

            this.connection.query(query, (error, results, fields) => {
                if (error) reject(error);
                resolve(results, fields);
            });
        })
    }
}

module.exports = new DatabaseService();