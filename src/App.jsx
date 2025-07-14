import React, { useState } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (taskText) => {
    if (taskText.trim() === '') return
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false
    }
    setTasks([newTask, ...tasks])
  }

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  return (
    <div className="app-container">
      <h1>To-Do List</h1>
      <TodoInput addTask={addTask} />
      <TodoList
        tasks={tasks}
        toggleTaskCompletion={toggleTaskCompletion}
        deleteTask={deleteTask}
      />
    </div>
  )
}

export default App
