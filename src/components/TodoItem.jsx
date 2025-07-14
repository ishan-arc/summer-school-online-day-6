import React from 'react'
import './TodoItem.css'

function TodoItem({ task, toggleTaskCompletion, deleteTask }) {
  return (
    <li className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(task.id)}
      />
      <span>{task.text}</span>
      <button className="delete-button" onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
