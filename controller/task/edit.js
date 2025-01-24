const task = require("../../model/task");
const taskModel = require('../../model/task');


const editTask = async (req, res) => {
  try {
      const { taskId } = req.params;  // Get the task ID from the URL
      const updatedData = req.body;   // Get the updated task data from the form submission
      
      // Update the task in the database
      const task = await taskModel.findByIdAndUpdate(taskId, updatedData, { new: true });
      
      if (!task) {
          return res.status(404).json({ message: 'Task not found' });
      }
 
      // Redirect to home page after updating
      res.redirect('/home');
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
};


module.exports = {editTask}