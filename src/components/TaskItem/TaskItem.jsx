import React from 'react'
import './TaskItem.scss'
import { FaTrashAlt } from "react-icons/fa";

const TaskItem = ({ task, deleteTask, handleChangeStatus }) => {

  return (
    <li className='TaskItem'>
      <input onChange={() => handleChangeStatus(task.id)} id='Task' type='checkbox' checked={task.status} />
      <h2>{task.title}</h2>
      <button onClick={() => { deleteTask(task.id) }}>
        <FaTrashAlt />
      </button>
    </li>
  )
}

export default TaskItem