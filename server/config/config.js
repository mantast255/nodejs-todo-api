var env = process.env.NODE_ENV || 'development';
console.log('env **********', env);

if(env === 'development') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp'
} else if(env === 'test') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest'
} else if(env === 'production') {
  process.env.MONGODB_URI = 'mongodb://mantast255:program123@ds133353.mlab.com:33353/todoapp'
}
