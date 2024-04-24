'use client'
import React, { useState } from 'react';
import useStore from './components/useStore';
import Link from 'next/link';

const AppPage: React.FC = () => {
  const [newTaskName, setNewTaskName] = useState('');
  const addTask = useStore(state => state.addTask);
  const tasks = useStore(state => state.tasks);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTaskName.trim() !== '') {
      addTask(newTaskName);
      setNewTaskName('');
    }
  };

  return (
    <div>
      <li>
      <Link href="/conf">configuração</Link>
      </li>
      <h1>Lista de Tarefas</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Adicionar nova tarefa"
          value={newTaskName}
          onChange={handleInputChange}
        />
        <button type="submit">Adicionar</button>
      </form>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => useStore.getState().toggleTask(task.id)}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.name}
            </span>
            <button onClick={() => useStore.getState().deleteTask(task.id)}>Excluir</button>
          </li>
          
        ))}
      </ul>
    </div>
  );
};

export default AppPage;
