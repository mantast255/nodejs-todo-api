const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5bc4761d4517f7402e068e81';
//
// if(!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id //do not need to provide new ObjectID
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo', todo);
// }).cath((e) => {
//   console.log(e);
// })

var userId = '5bc46085230d53b8215a30ec';

User.findById(userId).then((user) => {
  if(!user) {
    return console.log('Such user was not found');
  }

  console.log('User: ', user);
}).catch(e => {
  console.log(e);
})
