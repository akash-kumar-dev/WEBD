/*
  Todo{
    title: string,
    description: string,
    completed: boolean
  }
*/

const mongoose = require('mongoose');

// put link in .env file 
mongoose.connect("INSERT_LINK")

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean
})

const todo = mongoose.model('todoapp', todoSchema);

module.exports = {
  todo: todo
}