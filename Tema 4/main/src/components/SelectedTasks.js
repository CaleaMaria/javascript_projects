import React from 'react';

function SelectedTasks({ selectedTasks, onDeselect }) {
  return (
    <div>
      <h2>Selected Tasks</h2>
      {selectedTasks.map((task) => (
        <div key={task.id}>
          {task.description} {task.priority}
          <button onClick={() => onDeselect(task)}>deselect</button> {}
        </div>
      ))}
    </div>
  );
}

export default SelectedTasks;
