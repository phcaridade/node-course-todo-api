var env = process.env.NODE_ENV || 'development';
//console.log('env *****:', env);


if (env === 'development' || env === 'test'){
    //read JSON
    var config = require('./config.json');

    //get JSON/Property(Object) => utilizar [...]
    var envConfig = config[env];

    //For each KEY => set ENV variable
    Object.keys(envConfig).forEach((key)=>{
        process.env[key] = envConfig[key];
    });
}

/*
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
*/