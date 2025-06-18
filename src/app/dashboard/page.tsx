"use client";
import { useState } from "react";

export default function Dashboard() {
  const [tasks, setTasks] = useState<{ id: number; text: string; done: boolean }[]>([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: newTask.trim(), done: false }]);
    setNewTask("");
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, done: !task.done } : task))
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Tasks</h1>
      <div className="flex mb-4">
        <input
          type="text"
          className="flex-grow border border-gray-300 rounded px-3 py-2 mr-4"
          placeholder="New task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={addTask}
        >
          Add
        </button>
      </div>
      <ul>
        {tasks.length === 0 && <li className="text-gray-500">No tasks yet</li>}
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`flex items-center justify-between mb-2 p-2 border rounded ${
              task.done ? "bg-green-100 text-green-800 line-through" : "bg-white"
            }`}
          >
            <label className="flex items-center flex-grow cursor-pointer">
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleTask(task.id)}
                className="mr-3"
              />
              {task.text}
            </label>
            <button
              className="text-red-600 hover:text-red-900 font-bold px-2"
              onClick={() => deleteTask(task.id)}
              aria-label={`Delete task: ${task.text}`}
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

