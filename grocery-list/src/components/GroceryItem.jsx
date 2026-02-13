import React, {useState} from "react";

const GroceryItem = ({upOrDown, valueBy}) => {

  const [count, setCount] = useState(0);


  const handleCount = () => {
    if (upOrDown) setCount(count+valueBy);
    else setCount(count-valueBy);
  };

  const handleClearCount = () => {
    setCount(count - count)
  };

  return (
    <div className={upOrDown ? "up-div":"down-div"}>
        <h1>React Day 1</h1>
        <button onClick={handleCount}>Do Some Counting</button>
        <p>{count}</p>
        <button onClick={handleClearCount}>Clear</button>
    </div>
  );
};

export default GroceryItem;