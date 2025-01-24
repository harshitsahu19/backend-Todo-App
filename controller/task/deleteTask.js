const taskModel = require('../../model/task');  // Assuming you're using taskModel to interact with the DB


const deletetask = async ( req,res) =>{
    const { taskId } = req.params;  // Get the task ID from the URL
    try {
        const task = await taskModel.findByIdAndDelete(taskId);  // Delete the task

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        // Redirect to the home page or another page after deleting the task
        res.redirect('/home');
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports ={deletetask}