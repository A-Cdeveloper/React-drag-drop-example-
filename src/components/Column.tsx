import { useDroppable } from "@dnd-kit/core";
import { Task, type Column } from "../types";
import TaskCard from "./TaskCard";

type ColumnType = {
  column: Column;
  tasks: Task[];
};

const Column = ({ column, tasks }: ColumnType) => {
  const { setNodeRef } = useDroppable({
    id: column.id,
  });
  return (
    <div className="flex w-80 flex-col rounded-lg bg-neutral-800 p-4">
      <h2 className="mb-4 font-semibold text-neutral-100">{column.title}</h2>
      <div className="flex flex-1 flex-col gap-4" ref={setNodeRef}>
        {tasks.map((task) => {
          return <TaskCard key={task.id} task={task} />;
        })}
      </div>
    </div>
  );
};

export default Column;
