// const MongoClient = require('mongodb').MongoClient; // requires mongoCLient
//identical on line 1
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

var user = {name: 'Mantas', age:25};
var {name} = user;
console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true},  (err, client) => { //mongo wont create any DB until first collections was created.
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp')

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2)); //ops with return
  // })

  // db.collection('Users').insertOne({
  //   name: 'Mantas',
  //   age: 26,
  //   location: 'Vilnius'
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to inser user', err);
  //   }
  //   // console.log(JSON.stringify(result.ops, undefined, 2));
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  client.close(); // closes the connection with mongoDB
});
