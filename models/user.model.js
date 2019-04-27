//npm install --save bcryptjs
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: {type: String, unique: true, required: true, lowercase: true},
    password: {type: String, required: true},
    age: {type: Number}
}, {collection: 'user'});

userSchema.pre('save', function(next) {
    var user = this;
    if(user.isModified('password')) {
        bcrypt.genSalt(10, function(error, salt) {
            if(error) {
                return next(error);
            }
            bcrypt.hash(user.password, salt, function(error, hash) {
                if(error) {
                    return next(error);
                }
                user.password = hash;
                return next();
            });
        });
    } else {
        return next();
    }
});

userSchema.methods.comparePasswords = function(password, next) {
    bcrypt.compare(password, this.password, function(error, isMatch) {
        next(error, isMatch);
    });
};

mongoose.model('user', userSchema);

