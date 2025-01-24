const userModel = require('../../model/user');

const create = async (req, res) => {


    try {
        // Create a new user  

        const createdUser = await userModel.create({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        
        // Send the token to the client
        res.redirect('/home');
    } catch (error) {
        res.status(500).json({
            message: 'Error registering user',
            error: error.message,
        });
    }
};

module.exports = { create };
