// require('dotenv').config();
// const envVarSchema = require('./../validations/env.validation');
// const { value: envVars, error } = envVarSchema.validate(process.env);

// if (error) {
//     console.log(error); 
// }

// module.exports = {
//     port: envVars.PORT,
//     dbConnection: envVars.DB_CONNECTION,
//     //   env: envVars.NODE_ENV,
// };

require('dotenv').config();
const envVarSchema = require('./../validations/env.validation');

const { value: envVars, error } = envVarSchema.validate(process.env);

if (error) {
    console.log('Environment variable validation error:', error);
    throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
    port: envVars.PORT,
    dbConnection: envVars.DB_CONNECTION,
    access_token_secret: envVars.ACCESS_TOKEN_SECRET,
    refresh_token_secret: envVars.REFRESH_TOKEN_SECRET,
};