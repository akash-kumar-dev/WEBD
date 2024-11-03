// card wrapper

import React, { useState } from 'react';



function App() {

  return (
    <div>
      <CardWrapper>
        <TextComponent />
      </CardWrapper>

      <CardWrapper>
        <TextComponent2 />
      </CardWrapper>
    </div>
  );

}

function CardWrapper({ children }) {
  return (
    <div style={{ border: "1px solid black", padding: 10 }}>
      {children}
    </div>
  );
}


// --------------------------------------------------------------

// real card wrapper

// function App() {

//   return (
//     <div>
//       <CardWrapper innerComponent={<TextComponent />} />
//       <CardWrapper innerComponent={<TextComponent2 />} />
//     </div>
//   );

// }

// function CardWrapper({ innerComponent }) {
//   return (
//     <div style={{border: "1px solid black", padding: 10}}>
//       {innerComponent}
//     </div>
//   );
// }

function TextComponent() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>This is a simple React component.</p>
    </div>
  );
}

function TextComponent2() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>This is a simple second text component.</p>
    </div>
  );
}

export default App;