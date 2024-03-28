import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
    let [todos, setTodos] = useState([{ task: "smaple Task", id: uuidv4(), isDone: false }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos) => {
            setNewTodo("");
            return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
        });
    }

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
        // console.log(event.target.value);
    }

    let deleteTodo = (id) => {
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
        console.log(id);
    }

    let upperCaseAll = () => {
        setTodos((prevTodos) => (prevTodos.map((todo) => {
            return {
                ...todo,
                task: todo.task.toUpperCase()
            }
        })));
    }

    let upperCaseOne = (id) => {
        setTodos((prevTodos) => (prevTodos.map((todo) => {
            if (todo.id == id) {
                return {
                    ...todo,
                    task: todo.task.toUpperCase()
                }
            } else {
                return todo;
            }
        })));
    }

    let markAsDone = (id) => {
        setTodos((prevTodos) => (prevTodos.map((todo) => {
            if (todo.id == id) {
                return {
                    ...todo,
                    isDone: true,
                }
            } else {
                return todo;
            }
        })));
    }

    return (
        <div>
            <input placeholder="Add a Task" value={newTodo} onChange={updateTodoValue}></input> <br /> <br />
            <button onClick={addNewTask}>Add Task</button>
            <br /><br /><br /><hr />

            <h4>Todo List</h4>
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <span style={todo.isDone ? { textDecorationLine: "line-through" } : {}}>{todo.task}</span>
                            &nbsp;&nbsp;
                            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                            <button onClick={() => upperCaseOne(todo.id)}>UpperCase One</button>
                            <button onClick={() => markAsDone(todo.id)}>Marks asDone</button>
                        </li>
                    ))
                }
            </ul>
            <br /><br />
            <button onClick={upperCaseAll}>UpperCase All</button>
        </div>
    )
}