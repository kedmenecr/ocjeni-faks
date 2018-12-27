const logger = require('../utility/logger');
const environment = require('../utility/environment');

const applyBuildConfiguration = function() {
    const args = process.argv;

    const env = args.find(arg => arg.includes('env'));

    if (env && env.indexOf('=') > 0) {
        const parsedEnv = env.substring(env.indexOf('=') + 1, env.length);

        if (!environment.check(parsedEnv)) {
            logger.error(`Environment ${parsedEnv} is not suppored!`);
            process.exit(0);
        } else {
            environment.apply(parsedEnv);
        }
    } else {
        // Set default environment
        environment.apply(environment.DEVELOPMENT);
    }
}

module.exports = applyBuildConfiguration;