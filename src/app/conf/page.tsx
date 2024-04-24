'use client'

import React from 'react';
import TaskStats from '../components/TaskStats'; // Importa o novo componente
import Link from 'next/link';

const ConfPage: React.FC = () => {
  return (
    <div>
      <li>
        <Link href="/">Voltar para a lista de tarefas</Link>
      </li>
      <h1>Configurações</h1>
      {/* Adiciona o componente de estatísticas de tarefas */}
      <TaskStats />
    </div>
  );
};

export default ConfPage;