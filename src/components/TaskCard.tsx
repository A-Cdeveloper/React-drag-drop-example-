import { useDraggable } from "@dnd-kit/core";
import { Task } from "../types";

const TaskCard = ({ task }: { task: Task }) => {
  const { setNodeRef, listeners, attributes, transform } = useDraggable({
    id: task.id,
  });
  return (
    <div
      className="cursor-grab rounded-lg bg-neutral-700 p-4 shadow-sm hover:shadow-md"
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{
        transform: transform
          ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
          : undefined,
      }}
    >
      <h3 className="font-medium text-neutral-100">
        {task.id} - {task.title}
      </h3>
      <p className="mt-2 text-sm text-neutral-400">{task.description}</p>
    </div>
  );
};

export default TaskCard;
