//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css';
import GroceryItem from './components/GroceryItem';

function App() {
  const inputs = ["Cheese", "Cantaloupe"]
  
  return (
    <>
    <h1>Grocery List</h1>
      {inputs.map((a, index) => (
        <GroceryItem
          key={index}
          itemName={a}
        ></GroceryItem>
      ))}
    </>
  );
}

export default App
