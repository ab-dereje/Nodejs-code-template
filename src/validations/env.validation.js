// const joi = require('joi');
// const envVarSchema = joi
//   .object({
//     DB_CONNECTION: joi.string().required(),
//     PORT: joi.number().positive().default(3000),
//   })
//   .unknown();
// module.exports = envVarSchema;

const Joi = require('joi');

const envVarSchema = Joi.object({
    DB_CONNECTION: Joi.string().required(),
    PORT: Joi.number().positive().default(3000),
    ACCESS_TOKEN_SECRET: Joi.string().required(),
    REFRESH_TOKEN_SECRET: Joi.string().required(),
}).unknown();

module.exports = envVarSchema;