import { useState } from 'react';
import './App.css';
import { ToDoList } from './components/ToDoList';
import { FormTask } from './components/FormTask';

function App() {
  const [tasks, setTasks] = useState([
    { name: 'Task 1', status: 'pending' },
    { name: 'Task 2', status: 'pending' },
    { name: 'Task 3', status: 'pending' },
  ]);

  // Añadir tarea
  const addTask = (taskName) => {
    setTasks([...tasks, { name: taskName, status: 'pending' }]);
  };

  // Marcar tarea como acabada
  const markTaskAsDone = (index) => {
    const updatedTasks = tasks.map((task, i) => 
      i === index ? { ...task, status: 'done' } : task
    );
    setTasks(updatedTasks);
  };

  // Eliminar tarea
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <>
      <h1>ToDo list 📝</h1>
      <h3>Actividad: Integrar la funcionalidad del ToDo list</h3>
      <FormTask addTask={addTask} />
      <ToDoList tasks={tasks} markTaskAsDone={markTaskAsDone} deleteTask={deleteTask} />
      <a href="https://github.com/spygon9/to-do-list.git" target="_blank"> Repositorio </a>
    </>
  );
}

export default App;
