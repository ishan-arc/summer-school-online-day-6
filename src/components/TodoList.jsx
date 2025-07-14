import React from 'react'
import TodoItem from './TodoItem'
import './TodoList.css'

function TodoList({ tasks, toggleTaskCompletion, deleteTask }) {
  if (tasks.length === 0) {
    return <p className="empty-message">No tasks available. Add some!</p>
  }

  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  )
}

export default TodoList
