import React from "react";
import { Task } from './Task';

export const ToDoList = ({ tasks, markTaskAsDone, deleteTask }) => {
  return (
    <div>
      <h2>Tasks</h2>
      {tasks.map((task, index) => (
        <Task 
          key={index} 
          name={task.name} 
          status={task.status} 
          markAsDone={() => markTaskAsDone(index)} 
          deleteTask={() => deleteTask(index)} 
        />
      ))}
    </div>
  );
};
