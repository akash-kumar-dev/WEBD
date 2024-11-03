import React, { useState } from 'react';

function App() {

  return (
    <div>
      <HeaderWithButton />
      <Header title="title1" />
      <Header title="title2" />
      <Header title="title3" />
    </div>
  );

  // down renerning
  function HeaderWithButton() {
  const [title, setTitle] = useState("my name is harkirat");

  function changeTitle() {
    setTitle("My name is " + Math.random())
  }

  return <>
    <button onClick={changeTitle}>Click me to change the title</button>
    <Header title={title} />
  </>
}
}

function Header({ title }) {
  return <h1>{title}</h1>;
}

// ------------------------------------------------------------------------------

// with parent re-rendering it triggers the all child re-rendering


// function App() {
//   const [title, setTitle] = useState('My name is Harkirat');

//   function changeTitle() {
//     setTitle('My name is ' + Math.random());
//   }

//   return (
//     <div>
//       <button onClick={changeTitle}>Click me to change the title</button>
//       <Header title={title} />
//       <Header title="title1" />
//       <Header title="title2" />
//       <Header title="title3" />
//     </div>
//   );
// }

// function Header({ title }) {
//   return <h1>{title}</h1>;
// }

// ------------------------------------------------------------------------------

export default App;