import React, { useState } from "react";

function NewTaskForm({ categories, tasks, setTasks }) {
  const [formInput, setFormInput] = useState('')
  const [formCategory, setFormCategory] = useState('Code')

  function handleFormInput(event) {
    setFormInput(() => event.target.value)
  }

  function handleFormCategory(event) {
    setFormCategory(() => event.target.value)
  }

  function onTaskFormSubmit(event) {
    event.preventDefault()
    const newTask = {
      text: formInput,
      category: formCategory
    }

    setTasks([...tasks, newTask])
    setFormInput('')
    setFormCategory('Code')
  }

  const formCategories = categories.map(category => {
    if (category !== "All") {
      return <option key={category}>{category}</option>
    } else {
      return null
    }
  })

  return (
    <form className="new-task-form" onSubmit={event => onTaskFormSubmit(event)}>
      <label>
        Details
        <input type="text" name="text" value={formInput} onChange={handleFormInput}/>
      </label>
      <label>
        Category
        <select name="category" value={formCategory} onChange={handleFormCategory}>
          {/* render <option> elements for each category here */}
          {formCategories}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
