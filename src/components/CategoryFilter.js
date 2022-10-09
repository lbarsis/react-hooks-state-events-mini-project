import React from "react";
import { v4 as uuidv4 } from 'uuid';

function CategoryFilter({ categories, filterClass, setFilterClass }) {

  function handleClick(event) {
    setFilterClass(() => event.target.textContent)
  }

  const categoriesList = categories.map(category => {
    return <button key={uuidv4()} onClick={handleClick} className={category === filterClass ? "selected" : ""}>{category}</button>
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categoriesList}
    </div>
  );
}

export default CategoryFilter;
