import React from "react";

interface TaskCardProps {
  title: string;
  completed: boolean;
}

const TaskCard: React.FC<TaskCardProps> = ({ title, completed }) => {
  return (
    <div className={`p-4 rounded-lg shadow-md ${completed ? "bg-green-100" : "bg-red-100"}`}>
      <h4 className="text-md font-semibold mb-2">{title}</h4>
      <span
        className={`text-sm font-medium px-2 py-1 rounded ${
          completed ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {completed ? "Completed ✅" : "Incomplete ❌"}
      </span>
    </div>
  );
};

export default TaskCard;
