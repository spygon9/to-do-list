import React from "react";

export const Task = ({ name, status, markAsDone, deleteTask }) => {
  return (
    <>
      <p style={{ textDecoration: status === 'done' ? 'line-through' : 'none' }}>{name}</p>
      <div>
        <button onClick={markAsDone} disabled={status === 'done'}>
          Done
        </button>
        <button onClick={deleteTask}>Delete</button>
      </div>
    </>
  );
};
