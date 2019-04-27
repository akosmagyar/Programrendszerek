//npm install --save bcryptjs
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username: {type: String, unique: true, required: true, lowercase: true},
    password: {type: String, required: true},
    role: String
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

userSchema.set('toJSON', {
    transform: function(doc, ret, options) {
      delete ret.password;
      return ret;
    }
  });

const User = mongoose.model('User', userSchema);

//mongoose.model('user', userSchema); eredeti

export default User;


