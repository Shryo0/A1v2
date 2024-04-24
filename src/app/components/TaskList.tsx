// Importa o hook useStore para acessar o estado global da aplicação
'use client'

import React from 'react';
import useStore from '../components/useStore';

// Componente de estatísticas de tarefas
const TaskStats: React.FC = () => {
  const tasks = useStore(state => state.tasks); // Obtém a lista de tarefas do estado global

  // Calcula o número de tarefas concluídas
  const completedTasks = tasks.filter(task => task.completed).length;

  // Calcula o número total de tarefas
  const totalTasks = tasks.length;

  return (
    <div>
      <h2>Estatísticas de Tarefas</h2>
      <p>Total de tarefas concluídas: {completedTasks}</p>
      <p>Total de tarefas pendentes: {totalTasks - completedTasks}</p>
    </div>
  );
};

export default TaskStats;