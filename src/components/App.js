import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [newTasks, setTasks] = useState(TASKS)
  const [filterClass, setFilterClass] = useState("All")

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} filterClass={filterClass} setFilterClass={setFilterClass} />
      <NewTaskForm categories={CATEGORIES} tasks={newTasks} setTasks={setTasks}/>
      <TaskList tasks={newTasks} setTasks={setTasks} filterClass={filterClass}/>
    </div>
  );
}

export default App;
