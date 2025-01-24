const taskModel = require('../../model/task');
const userModel = require('../../model/user');

const jwt = require('jsonwebtoken');
require('dotenv').config();

const create = async (req, res) => {
    try {
        const token = req.session.token;

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY); // Replace with your secret key
        const userId = decoded.id; // Extract the user ID from the token

        // Create the task
        let createdTask = await taskModel.create({
            title: req.body.title,
            description: req.body.description,
           
            userId: userId
        });

        // Populate the userId field
      
        await userModel.findByIdAndUpdate(userId, {
            $push: { tasks: createdTask._id }, // Add the task ID to the user's tasks array
        });

        // Respond with the populated task
        res.redirect('/home')
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { create };
