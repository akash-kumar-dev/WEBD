import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'

function useInterval(fn, timeout)  {
    useEffect(() => {
        setInterval(() => {
            fn()
        }, timeout);
        return () => {
            clearInterval();
        }
    })
}

const _6_useInterval = () => {
   const [count, setCount] = useState(0);

   useInterval(() => {
    setCount(c  => c + 1);
  }, 1000);

  return (
    <>
    <p>Time is at {count}</p>
    </>
  )
}


export default _6_useInterval
