const 
  mongoose = require('mongoose'),
  Todo = mongoose.model('Todo', {
  title: {
    type: String,
    required: true,
    minlength: 1,
    trim :true
  },
  text:{
    type: String
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt:  {
    type: Number,
    default: null
  }
});

module.exports = {Todo};