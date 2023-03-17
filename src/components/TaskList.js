import React, {useState} from "react";
import Task from "./Task"

function TaskList({tasks, setTasks}) {
  return (
    <div className="tasks">
      {tasks.map(el => (<Task key={el.id} task={el} setTasks={setTasks}/>))}
    </div>
  );
}

export default TaskList;
