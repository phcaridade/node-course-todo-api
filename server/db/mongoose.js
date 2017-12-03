var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI);
/*
if (process.env.NODE && ~process.env.NODE.indexOf("heroku")){
    mongoose.connect('mongodb://xpto:xptopass@ds129156.mlab.com:29156/todo-app');
}
else{
    mongoose.connect('mongodb://localhost:27017/TodoApp');
}
*/
module.exports = {
    mongoose
};

