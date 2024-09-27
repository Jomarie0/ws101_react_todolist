import React, { useState } from 'react';
const ToDoList = () => {
  
  const [tasks, setTasks] = useState(["Add task"]);
  const [newTask, setNewTask] = useState("");

  const handleInputchange = (event) => {
    setNewTask(event.target.value);
  }
  const addtask = () => {
    
    if(newTask.trim() !== "") {
      setTasks( t => [...tasks, newTask]);
      setNewTask("");
    }
    
  }
  const DeleteTask = (index) => {

    const updatedTask = tasks.filter((_, i) => i !== index);
    setTasks(updatedTask)
  }

  const movetaskUp = (index) => {
    
    if(index > 0) {
      const updatedTask = [...tasks];
      [updatedTask[index], updatedTask[index - 1]] = 
      [updatedTask[index -1], updatedTask[index]];
      setTasks(updatedTask)
    }
  }
  const movetaskDown = (index) => {

    if(index < tasks.length -1) {
      const updatedTask = [...tasks];
      [updatedTask[index], updatedTask[index + 1]] = 
      [updatedTask[index + 1], updatedTask[index]];
      setTasks(updatedTask)
    }

  }
  return (
    
    <div className='to-do-list'>
      <aside className='sidePanel'>
        <h1>Listly</h1>
        <div>
          <button>Home</button>
          <button>Add Task</button>
          <button>Log out</button>
        </div>
      </aside>
      <div className='panel'>
        <h2>Manage Your Tasks</h2>
        <div className='task-input-container'>
          <input 
            type="text" 
            placeholder='Enter a new task...'
            value={newTask}
            onChange={handleInputchange}>

            </input>

          <button 
          className='add-button'
          onClick={addtask}
          >
            Add
          </button>
        </div>
        <div className='tasks-list'>
          <ol >
            {tasks.map((task, index) =>
              <li key={index}>
                <span className='text'>{task}</span>
                <button
                className='delete-button'
                onClick={() => DeleteTask(index)}>
                  delete
                </button>
                <button
                className='delete-button'
                onClick={() => movetaskUp(index)}>
                  up
                </button>
                <button
                className='delete-button'
                onClick={() => movetaskDown(index)}>
                  down
                </button>
              </li>)}
          </ol>
        </div>
      </div>
      
      
    </div>
  );
}

export default ToDoList;
