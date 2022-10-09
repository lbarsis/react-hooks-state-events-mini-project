import React from "react";
import { v4 as uuidv4 } from 'uuid';

function Task({ text, category, onDelete }) {

  function handleDeleteClick() {
    onDelete(text)
  }

  return (
    <div className="task" id={uuidv4()}>
      <div className="label">{category}</div>
      <div className="text" >{text}</div>
      <button  className="delete" onClick={handleDeleteClick}>X</button>
    </div>
  );
}

export default Task;
