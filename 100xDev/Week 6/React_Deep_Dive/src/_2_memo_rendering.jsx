import React, { useState } from 'react';

function App() {
  const [title, setTitle] = useState("my name is harkirat");
  function changeTitle() {
    setTitle("My name is " + Math.random())
  }

  return (
    <div>
      <button onClick={changeTitle}>Change Title</button>
      <Header title={title} />
      <Header title="title1" />
      <Header title="title2" />
      <Header title="title3" />
    </div>
  );
}

// Memo rendering
// memo lets you skip re-rendering a component if its props have not changed.
const Header = React.memo(function Header({ title }) {
  return <h1>{title}</h1>;
})

export default App;