const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
// console.log(result);
// })

//Todo.findOneAndRemove({})
//Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '5bc4abc143cf4f932db82b05'}).then(todo => {
  console.log(todo);
});

Todo.findOneAndRemove('5bc4abc143cf4f932db82b05').then((todo) => {
  console.log(todo);
})
