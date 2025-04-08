import React, { useState, useEffect } from 'react';
import store from '../stores/TaskStore';
import Task from './Task';
import SelectedTasks from './SelectedTasks';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [selectedTasks, setSelectedTasks] = useState([]);

  useEffect(() => {
    setTasks(store.getItems());
    store.emitter.addEventListener('UPDATE', () => {
      setTasks([...store.getItems()]);
    });
  }, []);

  const select = (item) => {
    if (!selectedTasks.find((e) => e.id === item.id)) {
      setSelectedTasks([...selectedTasks, item]);
    }
  };

  const deselect = (item) => {
    setSelectedTasks(selectedTasks.filter((e) => e.id !== item.id));
  };

  return (
    <div>
      <h2>Task List</h2>
      {tasks.map((task) => (
        <Task item={task} key={task.id} onSelect={select} />
      ))}
      <SelectedTasks selectedTasks={selectedTasks} onDeselect={deselect} />
    </div>
  );
}

export default TaskList;
