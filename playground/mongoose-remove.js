const {ObjectID} = require('mongodb');

const {mongose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

/*
Todo.remove({}).then((result)=>{
    console.log(result);
});
*/

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '5a242dc66b590b70009e3046'}).then((todo)=>{
    console.log(todo);
});

/*
Todo.findByIdAndRemove('5a242dc66b590b70009e3046').then((todo)=>{
    console.log(todo);
});
*/
