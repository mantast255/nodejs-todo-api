const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mantast255:program123@ds133353.mlab.com:33353/todoapp' || 'mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose
}
