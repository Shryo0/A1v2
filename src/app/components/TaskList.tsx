'use client'
import React from 'react';
import useStore from './useStore';
import TaskItem from './TaskItem';

const TaskList: React.FC = () => {
  const tasks = useStore(state => state.tasks);
  const toggleTask = useStore(state => state.toggleTask);
  const deleteTask = useStore(state => state.deleteTask);

  return (
    <div>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          id={task.id}
          name={task.name}
          completed={task.completed}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
