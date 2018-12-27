class Environment {
    
    constructor() {
        this.DEVELOPMENT = 'DEVELOPMENT';
        this.STAGING = 'STAGING';
        this.PRODUCTION = 'PRODUCTION';

        this.environments = {
            'DEVELOPMENT': require('./environments/development.json'),
            'STAGING': require('./environments/staging.json'),
            'PRODUCTION': require('./environments/production.json')
        };

        this._verifyEnvironments();
    }

    getCurrent() {
        return this._current;
    }

    apply(env) {
        if (this.check(env)) {
            // Set current environment
            this._current = env;

            // Set current environment configuration
            Object.keys(this.environments[env]).forEach(key => {
                this[key] = this.environments[env][key];
            });
            
            console.log(`Environment set to: ${env}`);
        } else {
            console.log(`Unsupported environment: ${env}`);
            process.exit(0);
        }
    }

    check(env) {
        if (env == this.DEVELOPMENT || env == this.STAGING || env == this.PRODUCTION) {
            return true;
        } else {
            return false;
        }
    }

    // Verify that each defined environment has an enum key
    _verifyEnvironments() {
        Object.keys(this.environments).forEach(environment => {
            if (!this[environment]) {
                console.log(`Environment defined without enum key: ${environment}`);
                process.exit(0);
            }
        })
    }
}

module.exports = new Environment();