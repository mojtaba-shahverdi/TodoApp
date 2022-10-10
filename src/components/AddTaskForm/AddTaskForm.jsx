import React from 'react'

const AddTaskForm = () => {
  return (
    <div className='taskform'>
        <form>
          <input type='text' placeholder='What needs to be done?' />
          <button type='submit'>
            Add
          </button>
        </form>
      </div>
  )
}

export default AddTaskForm