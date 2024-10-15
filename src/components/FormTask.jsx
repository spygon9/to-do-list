import React, { useState } from "react";

export const FormTask = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleAddTask = () => {
    if (taskName.trim()) {
      addTask(taskName);
      setTaskName(''); // Limpiar el input después de agregar
    }
  };

  return (
    <div>
      <label htmlFor="add_task">Add new task</label>
      <input 
        type="text" 
        name="add_task" 
        id="add_task" 
        value={taskName} 
        onChange={(e) => setTaskName(e.target.value)} 
      />
      <button onClick={handleAddTask}>Add task</button>
    </div>
  );
};
