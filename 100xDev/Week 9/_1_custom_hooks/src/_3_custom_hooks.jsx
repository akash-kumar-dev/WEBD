import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'

// custom hook
// function useTodos() {
//     const [todos, setTodos] = useState([]);

//     useEffect(() => {
//         axios.get('https://jsonplaceholder.typicode.com/todos')
//             .then(response => {
//                 setTodos(response.data);
//             })
//     }, []);

//     return todos;
// }

// returning with loading state
function useTodos() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                setTodos(response.data);
                setLoading(false);
            })
    }, []);

    return {todos, loading};
}

// if we want to fetch data at every interval of time
// function useTodos(n) {
//     const [todos, setTodos] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const value = setInterval(() => {
//             axios.get('https://jsonplaceholder.typicode.com/todos')
//             .then(response => {
//                 setTodos(response.data);
//                 setLoading(false);
//             })
//         }, n*1000)
        
//         axios.get('https://jsonplaceholder.typicode.com/todos')
//             .then(response => {
//                 setTodos(response.data);
//                 setLoading(false);
//             })
        
//         return () => {
//             clearInterval(value);
//         }
//     }, [n]);

//     return {todos, loading};
// }


const _3_custom_hooks = () => {
    // const [todos, setTodos] = useState([]);

    // useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/todos')
    //         .then(response => {
    //             setTodos(response.data);
    //         })
    // }, []);

    // const todos = useTodos();
    const {todos, loading} = useTodos();
    // const {todos, loading} = useTodos(2);

    if(loading) {
        return <div>Loading...</div>
    }
    


    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    );
}


export default _3_custom_hooks
