import React, { useState } from 'react'
import './AddTaskForm.scss'

const AddTaskForm = ({addTask}) => {
  const [value, setValue] = useState('')

  const handleChange = (e) => {
    if (e) e.preventDefault()
    setValue(e.target.value)
    console.log(value)
  }

  const handleSubmit = (e) => {
    if (e) e.preventDefault()
    if (!value || value === ''){
      return
    }
    addTask(value)
  }

  return (
    <div className='AddTaskForm'>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} type='text' placeholder='What needs to be done?' />
          <button type='submit'>
            Add
          </button>
        </form>
      </div>
  )
}

export default AddTaskForm