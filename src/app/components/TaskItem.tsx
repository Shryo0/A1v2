// Importa o hook useStore para acessar o estado global da aplicação
'use client'
import React from 'react';
import useStore from './useStore';

// Define a interface das propriedades do componente
interface TaskItemProps {
  id: string;
  name: string;
  completed: boolean;
  toggleTask: (id: string) => void; // Função para alternar o estado da tarefa
  deleteTask: (id: string) => void; // Função para excluir a tarefa
}

// Componente de item de tarefa
const TaskItem: React.FC<TaskItemProps> = ({ id, name, completed, toggleTask, deleteTask }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTask(id)} // Chama a função toggleTask para alternar o estado da tarefa
      />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>{name}</span>
      <button onClick={() => deleteTask(id)}>Delete</button> 
    </div>
    // Chama a função deleteTask para excluir a tarefa
  );
};

export default TaskItem;