import React from 'react'
import './styles.css'
import { useState } from 'react'

export default function Hi() {
  const[newItem, setNewItem] = useState("")
  const[toDo, setToDo] = useState([])
  
  function handleSubmit(e) {
    e.preventDefault()

    setToDo(currentToDo=>{
      return [
        ...currentToDo,{id:crypto.randomUUID(),title:newItem,complete:false}
      ]
    })
  }
  
  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
            name="item"
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1>To-do List</h1>
      <ul className="list">
        {toDo.map((toDo) => (
          <li key={toDo.id}>
            <label>
              <input type="checkbox" checked={item.complete}/>
              {toDo.title}
            </label>
            <button className="btn btn-danger">Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
