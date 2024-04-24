'use client'
import create from 'zustand';


interface Task {
  id: string;
  name: string;
  completed: boolean;
}

interface TaskStore {
  tasks: Task[];
  addTask: (name: string) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

const useStore = create<TaskStore>((set, get) => ({
  tasks: [],
  addTask: (name: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      name,
      completed: false,
    };
    set(state => ({ tasks: [...state.tasks, newTask] }));
  },
  toggleTask: (id: string) => {
    set(state => ({
      tasks: state.tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    }));
  },
  deleteTask: (id: string) => {
    set(state => ({
      tasks: state.tasks.filter(task => task.id !== id),
    }));
  },
}));

export default useStore;
