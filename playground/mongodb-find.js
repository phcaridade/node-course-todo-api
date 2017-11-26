//const MongoClient = require('mongodb').MongoClient;
//Destructuring assignment
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDb server');


    /*
    db.collection('Todos').find({
            _id: new ObjectID("5a1b1d50e9ee054c0b383799")
        }).toArray().then((docs)=>{
        console.log('Todos:');
        console.log(JSON.stringify(docs, undefined, 2));

    }, (err) => {
        console.log('Unable to fetch Todos', err);
    });
    */

    /*
    db.collection('Todos').find({completed: false}).toArray().then((docs)=>{
        console.log('Todos:');
        console.log(JSON.stringify(docs, undefined, 2));

    }, (err) => {
        console.log('Unable to fetch Todos', err);
    });
    */

    /*
    db.collection('Todos').find().count().then((count)=>{
        console.log(`Todos count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch Todos', err);
    });
    */

    db.collection('Users').find({name: 'Paulo'}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err)=>{
        console.log('Unable to fetch Todos', err);
    });

    //db.close();
});