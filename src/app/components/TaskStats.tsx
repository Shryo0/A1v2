'use client'

import React from 'react';
import useStore from '../components/useStore';

const TaskStats: React.FC = () => {
  const tasks = useStore(state => state.tasks);

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
