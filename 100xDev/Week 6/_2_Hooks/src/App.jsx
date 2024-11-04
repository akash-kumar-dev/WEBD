import {memo, useState, useCallback }from 'react';

var a = 1;
var b =1;
// a == b returns true

function sum(a, b){  return a + b;}
function sum2(a, b){  return a + b;}
// sum == sum2 returns false

// so if we pass direct varibale to rerendering component then it will not re-render but if we pass function then it will re-render
// for preventing re-rendering of functions also we use useCallback hook

function App() {
  
  const [counter, setCounter] = useState(0);

//  re-rendered will be called if we use normal function - see in console
  // function a(){
  //   console.log('a called');
  // }


// Re-rendered won't be called if we use useCallback - see in console
  const a = useCallback(function(){
    console.log('a called');
  }, [])

  
  return (
    <>
      <h2>06 useCallback</h2>
      <p>UseCallback is a hook that returns a memoized callback function. The callback function is memoized and will only be re-rendered if any of the dependencies change.</p>

      <button onClick={() => {setCounter(counter + 1)}}>Counter ({counter})</button>

      <Demo a={a} />
    </>
  ) 
};


const Demo = memo(({a}) => {
  console.log('Demo rerendered');
  return
  <div>
    Hi there {a}
  </div>
});

export default App