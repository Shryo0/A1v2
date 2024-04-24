'use client'
import React, { useState } from 'react';
import useStore from './useStore';

const TaskInput: React.FC = () => {
  const [taskName, setTaskName] = useState('');
  const addTask = useStore(state => state.addTask);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (taskName.trim() !== '') {
      console.log("Adding task:", taskName); 
      addTask(taskName);
      setTaskName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task"
        value={taskName}
        onChange={handleInputChange}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskInput;
