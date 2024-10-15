import React, { useState } from "react";
import { Task } from './Task'


export const ToDoList = () => {
    const [tasks, setTasks] = useState([
        { name: 'Task 1', status: 'pending'},
        { name: 'Task 2', status: 'pending'},
        { name: 'Task 3', status: 'pending'},
    ])
    return (
        <div>
            <h2>Tasks</h2>
            {tasks.map((task, index) => (
                <Task key = {index} name = {tasks.name} status = {tasks.status} />
            ))}

        </div>
    )
}
