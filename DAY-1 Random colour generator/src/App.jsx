import React, { useState } from 'react';

function App() {
  const [backgroundColor] = useState('red');

  function handleClick() {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    document.body.style.backgroundColor = randomColor;
  }

  return (
    <button 
      onClick={handleClick} 
      style={{ 
        backgroundColor
      }}
    >
      Click me!
    </button>
  );
}
export default App