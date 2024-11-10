import React, { useEffect, useState } from 'react'
import './App.css'

const _2_Lifecycle_Events = () => {
  const [render, setRender] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setRender(r => !r);
    }, 5000);
  }, [])

  return (
    <>
    {render ? <MyComponent /> : <div>2nd div</div>}
    </>
  )
}

// function MyComponent() {
//   useEffect(() => {
//     // only execute this code when the component is mounted
//     console.error("component mounted");

//     // Execute this code when the component is unmounted only
//     return () => {
//       console.log("component unmounted")
//     }
//   }, []);

//   return (
//     <>
//     <h1>From inside my component</h1>
//     </>
//   )
// }


// lifecycle components under class based components
class MyComponent extends React.Component {
  componentDidMount() {
    // Perform setup or data fetching here
    console.log("component mounted");
  }

  componentWillUnmount() {
    // Perform cleanup or data cleanup here, eg: remove event listeners or cancel subscriptions
    console.log("component unmounted");
  }

  render() {
    return (
      <>
      <h1>From inside my component</h1>
      </>
    )
  }
}

export default _2_Lifecycle_Events
