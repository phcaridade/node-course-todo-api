const {ObjectID} = require('mongodb');

const {mongose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
/*
var id = '5a219484ba0c68281a967820*';

if (!ObjectID.isValid(id)){
    console.log('ID not valid');
}
*/

/*
Todo.find({
    _id: id
}).then((todos)=>{
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then((todo)=>{
    console.log('Todo', todo);
});
*/

/*
Todo.findById(id).then((todo)=>{
    if(!todo){
        return console.log('Id not found');
    }
    console.log('Todo By Id', todo);
}).catch((e)=> console.log(e));
*/

var id = '5a2156cf94f0b11022ee785e';
User.findById(id).then((user) => {
    if(!user){
        return console.log('User Id not found');
    }
    console.log('User By Id', user);
}).catch((e) => console.log(e));



