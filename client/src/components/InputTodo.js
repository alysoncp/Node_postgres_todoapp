import React, { useState } from 'react'

export default function InputTodo() {

  const [description, setDescription] = useState("");

  const onSubmit = async(e) => {
    e.preventDefault()
    try {
      const body = { description }
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      });

      window.location = "/";
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <div>
      <h1>Input Todo</h1>
      <form onSubmit={onSubmit}>
        <input type='text' className="form-control" value={description} onChange={e => setDescription(e.target.value)}/>
        <button  className="btn">Add</button>
      </form>
    </div>
  )
}
