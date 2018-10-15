// const MongoClient = require('mongodb').MongoClient; // requires mongoCLient
//identical on line 1
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true},  (err, client) => { //mongo wont create any DB until first collections was created.
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp')

  //findOneAndUpdate

  // db.collection('Todos').findOneAndUpdate({_id: new ObjectID("5bc43a5243cf4f932db81eed")}, {
  //   $set: {
  //       completed: true
  //   }
  // }, {returnOriginal: false}).then(result => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({name: 'Greta'}, {
    $set: {
      name: 'Mantas',
    },
    $inc: {
      age: 1
    }
  }, {returnOriginal: false}).then(result => {
    console.log(result);
  });

  // client.close(); // closes the connection with mongoDB
});
