'use client'
// Importa o hook useStore para acessar o estado global da aplicação

import React, { useState } from 'react';
import useStore from './components/useStore'; // Importa o hook useStore
import Link from 'next/link';

// Componente da página principal da aplicação
const AppPage: React.FC = () => {
  // Define o estado local para o nome da nova tarefa
  const [newTaskName, setNewTaskName] = useState('');
  // Obtém a função addTask e a lista de tarefas do estado global
  const addTask = useStore(state => state.addTask);
  const tasks = useStore(state => state.tasks);

  // Manipulador para alterações no campo de entrada
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskName(e.target.value);
  };

  // Manipulador para envio do formulário de adição de tarefa
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTaskName.trim() !== '') {
      // Chama a função addTask do estado global para adicionar a nova tarefa
      addTask(newTaskName);
      // Limpa o campo de entrada após adicionar a tarefa
      setNewTaskName('');
    }
  };

  return (
    <div>
      {/* Link para a página de configurações */}
      <li>
        <Link href="/conf">configuração</Link>
      </li>
      <h1>Lista de Tarefas</h1>
      {/* Formulário para adicionar nova tarefa */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Adicionar nova tarefa"
          value={newTaskName}
          onChange={handleInputChange}
        />
        <button type="submit">Adicionar</button>
      </form>
      {/* Lista de tarefas */}
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              // Chama a função toggleTask do estado global para alternar o estado da tarefa
              onChange={() => useStore.getState().toggleTask(task.id)}
            />
            {/* Aplica estilo de risco no texto da tarefa se estiver concluída */}
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.name}
            </span>
            {/* Botão para excluir a tarefa */}
            <button onClick={() => useStore.getState().deleteTask(task.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppPage;
