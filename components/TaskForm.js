"use client";

import { useState } from "react";

const priorityOptions = ["High", "Medium", "Low"];

export default function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      completed: false,
      priority,
      createdAt: new Date().toISOString(),
    };

    onAddTask(newTask);
    setTitle("");
    setDescription("");
    setPriority("Medium");
  };

  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-2xl font-bold text-gray-900">Add a New Task</h2>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Task Title *
            </label>
            <input
              type="text"
              id="title"
              placeholder="e.g. Complete Next.js Assignment"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-teal-600 focus:ring-1 focus:ring-teal-600 outline-none transition-colors"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Description
            </label>
            <textarea
              id="description"
              placeholder="Add a brief description..."
              rows={3}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-teal-600 focus:ring-1 focus:ring-teal-600 outline-none transition-colors resize-y"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="priority"
                className="block text-sm font-medium text-gray-700 mb-1.5"
              >
                Priority
              </label>
              <select
                id="priority"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-teal-600 focus:ring-1 focus:ring-teal-600 outline-none bg-white transition-colors"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                {priorityOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                className="w-full rounded-lg bg-teal-600 px-5 py-3 font-medium text-white shadow-sm transition-all duration-200 hover:scale-[1.02] hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                Add Task
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
