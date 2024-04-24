'use client'
import React from 'react';
import useStore from './useStore';
interface TaskItemProps {
  id: string;
  name: string;
  completed: boolean;
  toggleTask: (id: string) => void; 
  deleteTask: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ id, name, completed, toggleTask, deleteTask }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTask(id)}
      />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>{name}</span>
      <button onClick={() => deleteTask(id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
