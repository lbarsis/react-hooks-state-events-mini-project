import React from "react";
import Task from "./Task";
import { v4 as uuidv4 } from 'uuid';

function TaskList( {tasks, setTasks, filterClass} ) {

  function handleDelete(taskText) {
    const newTasks = tasks.filter(task => task.text !== taskText)
    setTasks(newTasks)
  }

  const filteredTasks = tasks.filter(task => {
    if (filterClass === "All") return true;
    return task.category === filterClass;
  })

  const tasksToDisplay = filteredTasks.map(task => (
    <Task key={uuidv4()} text={task.text} category={task.category} onDelete={handleDelete} />
  ))

  return (
    <div className="tasks" >
      {tasksToDisplay}
    </div>
  );
}

export default TaskList;
