
const taskModel = require('../../model/task');
const userModel = require('../../model/user');

const getHome = async (req, res) => {
    try {
       
        const userId = req.userId; 

        // Fetch user details
        const user = await userModel.findById(userId).populate('tasks'); // Keep `user` scoped to this line
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Respond with user details
        // res.status(200).json({ user });
        res.render('home',{user})
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { getHome };
