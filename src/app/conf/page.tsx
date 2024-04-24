'use client'

// Importa o componente de estatísticas de tarefas e o componente de link

import React from 'react';
import TaskStats from '../components/TaskStats'; // Importa o novo componente
import Link from 'next/link';

// Componente da segunda página
const ConfPage: React.FC = () => {
  return (
    <div>
      {/* Link para retornar à lista de tarefas */}
      <li>
        <Link href="/">Voltar para a lista de tarefas</Link>
      </li>
      <h1>Configurações</h1>
      {/* Renderiza o componente de estatísticas de tarefas */}
      <TaskStats />
    </div>
  );
};

export default ConfPage;