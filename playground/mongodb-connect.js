//const MongoClient = require('mongodb').MongoClient;

//Destructuring assignment
const {MongoClient, ObjectID} = require('mongodb');

//Generate Unique ID using 'ObjectID'
/*
var obj = new ObjectID();
console.log(obj);
*/

//Destructuring assignment
/*
var user = { name: 'Andrew', age:25};
var {name} = user;
console.log(name);
*/

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDb server');

    /*
    db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (err, result) => {
        if(err){
           return console.log('Unable to insert todo', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });
    */

    /*
    db.collection('Users').insertOne({
        name: 'Paulo',
        age: 47,
        location: 'Maia'
    }, (err, result) => {
        if(err){
            return console.log('Unable to insert todo', err);
         }
         console.log(result.ops[0]._id.getTimestamp());
         //console.log(JSON.stringify(result.ops, undefined, 2));
    });
    */

    db.close();
});