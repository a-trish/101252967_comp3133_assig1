const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true,"Please enter username"],
        unique: [true, "Username already exist"],
        trim: true,
        lowercase: true,
        minlength: 4
    },
    firstname: {
        type: String,
        required: [true, "Please enter firstname"],
        trim: true,
    },
    lastname: {
        type: String,
        required: [true, "Please enter lastname"],
        trim: true,
    },
    password: {
        type: String,
        required: [true, 'Please enter password'],
        minlength: 6,
        validate: function(value) {
          var passwordRegex = /^[A-Za-z0-9#$&_]+$/
          return passwordRegex.test(value);
        }
    },
    email: {
        type: String,
        required: [true,"Please enter email"],
        unique: [true, "Email already in use"],
        trim: true,
        validate: function(value){
            var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return emailRegex.test(value)
        }
    },
    type: {
        type: String,
        required: true,
        default: 'customer',
        enum: ['customer', 'admin'],
        lowercase: true,
        trim: true
    }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;