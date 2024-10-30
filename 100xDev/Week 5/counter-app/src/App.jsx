import { useState } from 'react'

function App() {

  const [todos, setTodos] = useState([{
    title: "Go to the gym",
    description: "Go to the gym at 6pm",
    completed: false
  }, {
    title: "Study DSA",
    description: "Study DSA at 10pm",
    completed: true
  }]);

  function addTodo() {
    // [1,2]
    // [...todos, 3] => [1,2,3]
    setTodos([...todos, {
      title: "new Todo",
      description: "desc of new todo",
      completed: false
    }])
  }
  return (
    <div>
      <button style={{ padding: 10 }} onClick={addTodo}>Add a Random Todo</button>
      {/* {JSON.stringify(todos)} */}

      {todos.map((todo) => {
        return <Todo title={todo.title} description={todo.description} completed={todo.completed} />
      })}
    </div>
  )
}

function Todo(props) {
  return <div>
    <h1>{props.title}</h1>
    <p>{props.description}</p>
    <p>{props.completed ? "Completed" : "Not Completed"}</p>
  </div>
}

export default App
