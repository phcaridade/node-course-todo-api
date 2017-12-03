var env = process.env.NODE_ENV || 'development';
//console.log('env *****:', env);

if(env === 'development'){
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
} else if (env === 'test'){
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
} else {
    //Heroku
    process.env.MONGODB_URI = 'mongodb://xpto:xptopass@ds129156.mlab.com:29156/todo-app'
}
