import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    let timeoutNumber = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timeoutNumber);
    }
  }, [value]);

  return debouncedValue;
}

// useDebounce
const _7_useDebounce = () => {
  const [value, setValue] = useState(0);
  const debouncedValue = useDebounce(value, 500);

  // useEffect(() => {
  //   fetch("")
  // }, [debouncedValue])

  return (
    <>
      Debounced Value: {debouncedValue}
      <input type="text" onChange={e => setValue(e.target.value)} />
    </>
  )
}


export default _7_useDebounce
