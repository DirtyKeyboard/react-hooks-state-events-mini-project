import React, {useState} from "react";
import Task from "./Task"

function TaskList({tasks, setTasks, filtering}) {
  function showTasks(fil, el)
  {
    if (fil === 'All')
      return <Task key={el.id} task={el} setTasks={setTasks}/>
    else
    {
      if (el.category === fil)
        return <Task key={el.id} task={el} setTasks={setTasks}/>
    }
  }
  return (
    <div className="tasks">
      {tasks.map(el => (
        filtering==='All' ? showTasks('All', el) : showTasks(filtering, el)
        ))}
    </div>
  );
}

export default TaskList;