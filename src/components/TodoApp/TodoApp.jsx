import React from 'react'
import {
    AddTaskForm,
    TaskList,
    FilterFooter,
} from '../'

const TodoApp = () => {
    return (
        <div>
            <AddTaskForm />
            <TaskList />
            <FilterFooter />
        </div>
    )
}

export default TodoApp