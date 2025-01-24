const jwt = require('jsonwebtoken');
const userModel = require('../../model/user');

const getUser = async (req, res) => {   
    try {
        const user = await userModel.findById(req.userId).populate('tasks');

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json({
            message: 'User retrieved successfully',
            user: user
        });
    } catch (error) {
        return res.status(500).json({ message: 'Error retrieving user data', error: error.message });
    }
};

module.exports = { getUser };
