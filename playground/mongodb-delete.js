// const MongoClient = require('mongodb').MongoClient; // requires mongoCLient
//identical on line 1
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true},  (err, client) => { //mongo wont create any DB until first collections was created.
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp')

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then(result => {
  //   console.log(result);
  // })

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then(result => {
  //   console.log(result);
  // })

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then(result => {
  //   console.log(result);
  // })

  db.collection('Users').deleteMany({name: 'Mantas'}).then(result => {
    console.log(result);
  });

  db.collection('Users').findOneAndDelete({_id: new ObjectID("5bc39aac65e67a2020dd033b")}).then(result => {
    console.log(result);
  });
  // client.close(); // closes the connection with mongoDB
});
