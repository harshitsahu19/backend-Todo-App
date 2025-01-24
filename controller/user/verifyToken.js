const jwt = require('jsonwebtoken');
const userModel = require('../../model/user');

const verifyToken = async (req, res, next) => {
    // Get the token from the session
    const token = req.session.token;

    if (!token) {
        return res.redirect('/');
    }

    // Verify the token
    jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid or expired token' });
        }

        // If the token is valid, decoded data will have the user ID
        req.userId = decoded.id; // Attach the userId to the request object
        next(); // Proceed to the next middleware or route handler
    });
};

module.exports = verifyToken;
