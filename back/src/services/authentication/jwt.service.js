const environment = require('../../utility/environment');
const jwt = require('jsonwebtoken');



/*
 * Service handling all jwt logic
 */
class jwtService {

    

    async signJwt(userId) {
        const secret = environment.authentication.jwt.secret;
        return await jwt.sign(
            { userId: userId },
            secret,
            {
                expiresIn: environment.authentication.jwt.expiresIn,
                audience: environment.authentication.jwt.audience,
                issuer: environment.authentication.jwt.issuer,
                subject: environment.authentication.jwt.subject
            }
        )
    }


    async verifyJwt(token) {
        const secret = environment.authentication.secret;
        return await jwt.verify(
            token,
            secret,
            {
                audience: environment.authentication.jwt.audience,
                issuer: environment.authentication.jwt.issuer,
                subject: environment.authentication.jwt.subject
            }
        )
    }

}

module.exports = new jwtService();