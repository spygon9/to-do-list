import { useState } from 'react'
import './App.css'
import { ToDoList } from './components/ToDoList'
import { FormTask } from './components/FormTask'

function App() {
  return (
    <>
      <h1>ToDo list 📝</h1>
      <h3>Actidad: Integrar la funcionalidad del ToDo list</h3>
      <FormTask />
      <ToDoList />


      <a href="https://github.com/spygon9/to-do-list.git" target="_blank"> Repositorio </a>
    </>
  )
}

export default App