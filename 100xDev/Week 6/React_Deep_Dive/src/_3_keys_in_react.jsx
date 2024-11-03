// keys in React

import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([{
    id: 1,
    title: 'Learn React',
    description: 'Learn React and build a web application',
  }, {
    id: 2,
    title: 'Learn Next.js',
    description: 'Learn Next.js and build a web application',
  }, {
    id: 3,
    title: 'Learn React Native',
    description: 'Learn React Native and build a mobile application',
  }]);

  function addTodo() {
    setTodos([...todos, {
      id: todos.length + 1,
      title: Math.random().toString(36).substring(7),
      description: Math.random().toString(36).substring(7),
    }])
  }
  return (
    <div>
    <button onClick={addTodo}>Add a Todo</button>

    {/* {todos.map(todo => <Todo title={todo.title} description={todo.description} />)} */}

    {/* each child in a list should have a unique "key" prop */}
    {/* keys in React are used to identify which items in the list have changed, are added, or are removed. */}

    {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}

    </div>
  )
}

function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}

export default App;