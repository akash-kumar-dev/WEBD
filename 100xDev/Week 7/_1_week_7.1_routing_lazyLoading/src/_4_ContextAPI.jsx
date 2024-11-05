// contextAPI

import { useContext, useState } from 'react';
import { CountContext } from './context';

// Context API get rid of prop drilling.
// Context API is a way to share data between components without having to explicitly pass a prop through every level of the tree.
const _4_ContextAPI = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <CountContext.Provider value={count}>
        <Count setCount={setCount} />
      </CountContext.Provider>
    </div>
  )
};


function Count({setCount}){
  return <div>
     <CounterRender />
    <Button setCount={setCount} />
  </div>
}

function CounterRender(){
  const count = useContext(CountContext);
  
  return <div>
    {count}
  </div>
}

function Button({setCount}){
  const count = useContext(CountContext);

  return <div>
    <button onClick={() => {
      setCount(count + 1)
    }}>Increase</button>
    
    <button onClick={() => {
      setCount(count - 1)
    }}>Decrease</button>
  </div>
  
}

export default _4_ContextAPI;