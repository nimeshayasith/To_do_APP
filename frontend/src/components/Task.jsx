import React from 'react';

const Task = ({ task, onUpdate, onDelete }) => {
  return (
    <div
      className={`flex items-center justify-between p-4 mb-2 bg-white rounded-lg shadow-md ${
        task.completed ? 'line-through text-gray-400' : 'text-gray-700'
      }`}
    >
      <div className="flex items-center space-x-4">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onUpdate(task._id, !task.completed)}
          className="w-5 h-5 rounded border-gray-300 focus:ring-blue-500"
        />
        <span>{task.title}</span>
      </div>
      <button
        onClick={() => onDelete(task._id)}
        className="px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
};

export default Task;