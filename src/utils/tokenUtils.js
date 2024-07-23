const jwt = require('jsonwebtoken');
const config = require("../config/config");

const generateAccessToken = (user) => {
    return jwt.sign(user, config.access_token_secret, { expiresIn: '1m' });
};

const generateRefreshToken = (user) => {
    return jwt.sign(user, config.refresh_token_secret);
};

module.exports = { generateAccessToken, generateRefreshToken };