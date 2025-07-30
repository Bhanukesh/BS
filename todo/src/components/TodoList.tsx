// TodoList.tsx - Renders the list of tasks (React Component)

import TodoItem from "./TodoItem";

// What a single task looks like (This is more like a blueprint...props)
interface Task {
  id: number;
  text: string;
  completed: boolean;
}

// Props that TodoList expects
interface TodoListProps {
  tasks: Task[];
  onToggle: (id: number) => void; /* independent event handler */
  onDelete: (id: number) => void;
}

// Show all tasks using TodoItem
export default function TodoList({ tasks, onToggle, onDelete }: TodoListProps) {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <TodoItem
          key={task.id} /* React */
          id={task.id}
          text={task.text}
          completed={task.completed}
          onToggle={() => onToggle(task.id)}
          onDelete={() => onDelete(task.id)}
        />
      ))}
    </ul>
  );
}