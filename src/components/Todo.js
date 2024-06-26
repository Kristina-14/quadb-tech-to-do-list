import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'

const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className='Todo'>
      <p onClick={() => toggleComplete(task.id)}
      className={`${task.completed ? "completed":""}`}>
        {task.task}
        </p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} 
        onClick={() => editTodo(task.id)}/>
        <FontAwesomeIcon icon={faTrash} className='trash-btn'
        onClick={() => deleteTodo(task.id)}/>
      </div>
    </div>
  )
}

export default Todo