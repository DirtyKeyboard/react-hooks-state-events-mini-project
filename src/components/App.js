import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });


function App() {
  const [tasksToShow, setTasksToShow] = useState(TASKS)
  const [filtering, setFiltering] = useState('All')
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter filtering={filtering} setFiltering={setFiltering} tasks={tasksToShow} cats={CATEGORIES} setTasks={setTasksToShow} />
      <NewTaskForm cats={CATEGORIES} setTasks={setTasksToShow} />
      <TaskList filtering={filtering} tasks={tasksToShow} setTasks={setTasksToShow} />
    </div>
  );
}

export default App;
