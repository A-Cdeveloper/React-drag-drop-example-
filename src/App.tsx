import { useState } from "react";
import type { Task, Column as ColumnType } from "./types";
import Column from "./components/Column";
import { DndContext, DragEndEvent } from "@dnd-kit/core";

const COLUMNS: ColumnType[] = [
  { id: "TODO", title: "To Do" },
  { id: "IN_PROGRESS", title: "In Progress" },
  { id: "DONE", title: "Done" },
];

const INITIAL_TASKS: Task[] = [
  {
    id: "1",
    title: "Research Project",
    description: "Gather requirements and create initial documentation",
    status: "TODO",
  },
  {
    id: "2",
    title: "Design System",
    description: "Create component library and design tokens",
    status: "TODO",
  },
  {
    id: "3",
    title: "API Integration",
    description: "Implement REST API endpoints",
    status: "IN_PROGRESS",
  },
  {
    id: "4",
    title: "Testing",
    description: "Write unit tests for core functionality",
    status: "DONE",
  },
];

export default function App() {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);

  const handleDragEnd = (e: DragEndEvent) => {
    const { over, active } = e;
    console.log(e);
    if (!over) return;
    const taskId = active.id as string;
    const newStatus = over.id as Task["status"];

    setTasks((prev) => {
      return prev.map((task) => {
        if (task.id === taskId) {
          return { ...task, status: newStatus };
        }
        return task;
      });
    });
  };

  return (
    <div className="p-4">
      <div className="flex gap-8 mx-auto justify-center">
        <DndContext onDragEnd={handleDragEnd}>
          {COLUMNS.map((column) => {
            return (
              <Column
                column={column}
                key={column.id}
                tasks={tasks.filter((task) => task.status === column.id)} // not optimal but it works
              />
            );
          })}
        </DndContext>
      </div>
    </div>
  );
}
