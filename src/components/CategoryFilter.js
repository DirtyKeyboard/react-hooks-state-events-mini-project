import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

function CategoryFilter({cats, setTasks, tasks, filtering, setFiltering}) {
  // const [selected, setSelected] = useState('All')
  function handleClick(e)
  {/*
    if (e.target.innerText === 'All')
      setTasks(tasks)
    else
    {
      setTasks(tasks.filter(el => (el.category === e.target.innerText)))
    }*/
    setFiltering(e.target.innerText)
  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {cats.map(el => <button 
      key={uuidv4()} 
      onClick={handleClick} 
      className={filtering===el ? 'selected' : null}>{el}</button>)}
    </div>
  );
}

export default CategoryFilter;
