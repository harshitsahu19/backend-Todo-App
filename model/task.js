const mongoose = require('mongoose');


const taskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Task title is required'],
            trim: true,
        },
        description: {
            type: String,
            trim: true,
           
        },
        completed: {
            type: Boolean,
            default: false, 
        },
        createdAt: {
            type: Date,
            default: Date.now, 
        },
        userId: {
            type:  mongoose.SchemaTypes.ObjectId,
            ref: 'User', // Reference to the User model
            required: true, // Make sure the user ID is always present
        },
       
    },
    {
        timestamps: true, 
    }
);

module.exports = mongoose.model('Task', taskSchema);
