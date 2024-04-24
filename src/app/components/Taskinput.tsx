'use client'
import React, { useState } from 'react';
import useStore from './useStore';

// Componente de entrada de tarefa
const TaskInput: React.FC = () => {
  const [taskName, setTaskName] = useState('');
  const addTask = useStore(state => state.addTask); // Obtém a função addTask do estado global

  // Manipulador para alterações no campo de entrada
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
  };

  // Manipulador para envio do formulário
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (taskName.trim() !== '') {
      console.log("Adding task:", taskName); 
      addTask(taskName); // Chama a função addTask do estado global para adicionar a tarefa
      setTaskName(''); // Limpa o campo de entrada após adicionar a tarefa
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