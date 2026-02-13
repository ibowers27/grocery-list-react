//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css';
import GroceryItem from './components/GroceryItem';

function App() {
  const inputs = [
    [true, 10],
    [false, 5],
    [true, 12],
    [true, 9],
  ]
  
  return (
    <>
      {inputs.map(([a, b], index) => (
        <GroceryItem
          key={index}
          upOrDown={a}
          valueBy={b}
        ></GroceryItem>
      ))}
    </>
  );
}

export default App
