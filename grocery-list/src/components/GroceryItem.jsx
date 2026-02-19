import React, {useState} from "react";

const GroceryItem = ({itemName}) => {

  const [count, setCount] = useState(0);


  const addToList = () => {
    setCount(count+1);
  };

  const removeFromList = () => {
    if (count > 0) {
        setCount(count-1);
    };
  };

  const clearFromList = () => {
    setCount(count - count)
  };

  return (
    <div>
        <p>{itemName}</p>
        <div className ={"item-div"}>
        <button onClick={addToList}>+</button>
        <p>{count}</p>
        <button onClick={removeFromList}>-</button>
        <h1></h1>
        </div>
        <button onClick={clearFromList}>Clear</button>
    </div>
  );
};

export default GroceryItem;