import React from 'react';

function Task({ item, onSelect }) {
  return (
    <div>
      {item.description} {item.priority}
      <button onClick={() => onSelect(item)}>select</button>
    </div>
  );
}

export default Task;
