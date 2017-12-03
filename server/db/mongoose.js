var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/TodoApp');
mongoose.connect('mongodb://xpto:xptopass@ds129156.mlab.com:29156/todo-app');

module.exports = {
    mongoose
};

