import React, {useState} from "react";
import {v4 as uuidv4} from 'uuid';

function NewTaskForm({cats, setTasks}) {
  const [form, setForm] = useState({
    text: "",
    category: "Code",
    id: uuidv4()
  })

  function handleChange(e)
  {
    setForm({...form, [e.target.name]: e.target.value})
  }
  
  function onFormSubmit(e) {
    e.preventDefault()
    setTasks(allTasks => [...allTasks, form])
    setForm({
      text: "",
      category: "Code",
      id: uuidv4()
    })
  }
  cats = cats.filter(el => (el !== 'All'))
  return (
    <form className="new-task-form" onSubmit={onFormSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleChange} value={form.text} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleChange} value={form.category}>
          {cats.map(el => (<option key={uuidv4()}>{el}</option>))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;