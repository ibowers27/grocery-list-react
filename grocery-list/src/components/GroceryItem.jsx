import React, { useState } from 'react';

const GroceryItem = ({ item, onDelete, onUpdateName, onUpdateCount }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(item.name);

  const addToList = () => {
    onUpdateCount(item.id, item.count + 1);
  };

  const removeFromList = () => {
    if (item.count > 0) {
      onUpdateCount(item.id, item.count - 1);
    }
  };

  const startEditing = () => {
    setEditValue(item.name);
    setIsEditing(true);
  };

  const saveEdit = () => {
    const trimmed = editValue.trim();
    if (!trimmed) return;
    onUpdateName(item.id, trimmed);
    setIsEditing(false);
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setEditValue(item.name);
  };

  return (
    <li>
      <div>
        {isEditing ? (
          <div className="item-div">
            <input
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') saveEdit();
                if (e.key === 'Escape') cancelEdit();
              }}
              autoFocus
            />
            <button onClick={saveEdit}>Save</button>
            <button onClick={cancelEdit}>Cancel</button>
          </div>
        ) : (
          <div className="item-div">
            <p>{item.name}</p>
            <button onClick={startEditing}>Edit</button>
            <button onClick={() => onDelete(item.id)}>Delete</button>
          </div>
        )}
      </div>
      <div className="item-div">
        <button onClick={addToList}>+</button>
        <p>{item.count}</p>
        <button onClick={removeFromList}>-</button>
      </div>
    </li>
  );
};

export default GroceryItem;