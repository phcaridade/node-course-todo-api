const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');

var UserShema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            trim: true,
            minlength: 1,
            unique: true,
            validate: {
                validator: (value)=>{
                    return validator.isEmail(value);
                },
                message: '{VALUE} is not an email!'
            }
        },
        password: {
            type: String,
            required: true,
            minlength: 6
        },
        tokens:[{
            access:{
                type: String,
                required: true
            },
            token: {
                type: String,
                required: true
            }
        }]
    }
);

//.methods : Instance Method
UserShema.methods.toJSON = function () {
    var user = this;
    var userObject = user.toObject();
    return _.pick(userObject, ['_id', 'email']);
};

UserShema.methods.generateAuthToken = function () {
    var user = this;    //
    var access = 'auth';
    var token = jwt.sign({_id: user._id.toHexString(), access}, process.env.JWT_SECRET).toString();

    user.tokens.push({ access, token });
    
    return user.save().then(()=>{
        return token;
    });
};

UserShema.methods.removeToken = function(token){
    var user = this;

    return user.update({
        $pull: {
            tokens: {
                token: token
            }
        }
    });
    
};

//.statics : Model Method 
UserShema.statics.findByToken = function (token){
    var User = this;    //Model as the "binding"      
    var decoded;        //store jwt values

    try{
        decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch(e){
        /*
        return new Promise((resolve,reject)=>{
            reject();
        });
        */
        return Promise.reject();
    }

    //query id + nested document "tokens"
    return User.findOne({
        '_id': decoded._id,
        'tokens.token': token,
        'tokens.access': 'auth'
    });
};


UserShema.statics.findByCredentials = function(email, password){
    var User = this;
    
    return User.findOne({email}).then((user)=>{
        if(!user){
            return Promise.reject();
        }

        return new Promise((resolve, reject)=>{
            bcrypt.compare(password, user.password, (err,res)=>{
                if(res){
                    resolve(user);    
                }
                else{
                    reject();
                }                
            });
        });        
    });
};


UserShema.pre('save', function(next){
    var user = this;

    //check if password (any field) was modified
    if (user.isModified('password')){
        bcrypt.genSalt(10, (err,salt)=>{
            bcrypt.hash(user.password, salt, (err, hash)=>{
                user.password = hash;
                next();
            });
        });
    }
    else{
        next();
    }

});


var User = mongoose.model('User', UserShema);

module.exports = { User };