const express = require("express");
const app = express();

app.use(express.json()); 
app.use(express.urlencoded());

const logger = require('./utility/logger');
const environment = require('./utility/environment');

const applyBuildConfiguration = require("./configuration/apply-build-configuration");
applyBuildConfiguration();

const configureModules = require("./configuration/configure-modules");
configureModules.forEach(configuredModule => {
    app.use(configuredModule.route, configuredModule.module);
});

app.listen(environment.port || 85);

logger.log(`Server started on port: ${environment.port || 85}`);