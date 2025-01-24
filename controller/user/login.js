const userModel = require('../../model/user');
const jwt = require('jsonwebtoken');
require('dotenv').config();



// Function to generate a JWT token

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userModel.findOne({ email })

    if (!user || user.password !== password) {
        return res.status(401).json({ message: "invalid email or password" })
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '5h' });
    req.session.token = token;

    res.redirect('/home')
    } catch (error) {
       res.status(500).json({mssage:"details are invalid"})
    }
    
}

module.exports = { login }