import React, { useState } from "react";

export const Task = ({name, status}) => {
    
    return (
        <>
        <p>{name}</p>
        <div>
            <button onClick={() => {console.log('Done')}}>Done</button>
            <button onClick={() => {console.log('Delete')}}>Delete</button>
        </div>
        </>
    )
}