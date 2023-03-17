import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });


function App() {
  const [tasksToShow, setTasksToShow] = useState(TASKS)
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter tasks={tasksToShow} cats={CATEGORIES} setTasks={setTasksToShow}/>
      <NewTaskForm cats={CATEGORIES} setTasks={setTasksToShow} />
      <TaskList tasks={tasksToShow} setTasks={setTasksToShow}/>
    </div>
  );
}

export default App;
