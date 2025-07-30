// TodoItem.tsx - Renders one task

import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";


// Props the component receives
interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
}

// Component for one task
export default function TodoItem({
  text,
  completed,
  onToggle,
  onDelete,
}: TodoItemProps) {
  return (
    <Card className="flex justify-between items-center p-4">
      <div className="flex items-center gap-2">
        <Checkbox checked={completed} onCheckedChange={onToggle} />
        <span className={completed ? "line-through text-gray-400" : ""}>
          {text}
        </span>
      </div>
      <Button variant="ghost" onClick={onDelete} size="icon">
        <Trash className="w-4 h-4" />
      </Button>

    </Card>
  );
}