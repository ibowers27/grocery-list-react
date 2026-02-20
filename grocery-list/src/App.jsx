import { useState } from 'react'
import './App.css';
import GroceryItem from './components/GroceryItem';
import groceryIcon from './assets/grocery-list-icon.png';

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    const trimmed = newItem.trim();
    if (!trimmed) return;
    setItems([...items, { id: Date.now(), name: trimmed, count: 1 }]);
    setNewItem('');
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const updateItemName = (id, newName) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, name: newName } : item
      )
    );
  };

  const updateItemCount = (id, newCount) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, count: newCount } : item
      )
    );
  };

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  return (
    <>
    <img src={groceryIcon} alt="Grocery list icon" style={{ width: 60, height: 60, borderRadius: 8 }} />
    <h1>Grocery List</h1>
    <p>{items.length} item{items.length !== 1 ? 's' : ''} · {totalCount} total</p>

      <div className="item-div">
        <input
          type="text"
          placeholder="Add a grocery item..."
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addItem()}
        />
        <button onClick={addItem}>+ Add</button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map((item) => (
          <GroceryItem
            key={item.id}
            item={item}
            onDelete={deleteItem}
            onUpdateName={updateItemName}
            onUpdateCount={updateItemCount}
          />
        ))}
      </ul>
    </>
  );
}

export default App
