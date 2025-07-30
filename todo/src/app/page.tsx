'use client';

import { useState } from 'react';
import TodoList from "@/components/TodoList";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface Task {
  id: number;
  text: string;
  completed: boolean; 
}

export default function HomePage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputText, setInputText] = useState('');

  const addTask = () => {
    if (!inputText.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: inputText, completed: false }]);
    setInputText('');
  };

  const toggleComplete = (id: number) =>
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));

  const removeTask = (id: number) =>
    setTasks(tasks.filter(task => task.id !== id));

  return (
    <main className="max-w-md mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">Simple To-Do List</h1>

      <div className="flex gap-2 mb-4">
        <Input
          placeholder="Enter a task"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <Button onClick={addTask}>Add</Button>
      </div>

      <TodoList tasks={tasks} onToggle={toggleComplete} onDelete={removeTask} />
    </main>
  );
}