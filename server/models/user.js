const
  mongoose = require('mongoose'),
  User = mongoose.model('UUser', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 6
  }
});

module.exports = {User};