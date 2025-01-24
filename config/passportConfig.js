const passport = require('passport');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const userModel = require('../model/user');
require('dotenv').config();

// Tell Passport how to verify the token
const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Get token from the "Authorization" header
    secretOrKey: process.env.JWT_SECRET_KEY, // Secret key to verify the token
};

passport.use(new JwtStrategy(options, async (payload, done) => {
    // Payload contains the user's ID from the token
    try {
        const user = await userModel.findById(payload.id); // Find the user in the database
        if (user) return done(null, user); // User found, success!
        return done(null, false); // No user, fail
    } catch (err) {
        return done(err, false); // Error occurred
    }
}));

module.exports = passport;


module.exports = passport;
