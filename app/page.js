"use client";

import { useState, useEffect, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import TaskStats from "@/components/TaskStats";
import TaskForm from "@/components/TaskForm";
import FilterButtons from "@/components/FilterButtons";
import TaskList from "@/components/TaskList";
import Footer from "@/components/Footer";

const STORAGE_KEY = "taskTracker.tasks";

const sampleTasks = [
  {
    id: 1,
    title: "Complete Next.js Assignment",
    description: "Build a task tracker application using Next.js with HyperUI components.",
    completed: false,
    priority: "High",
    createdAt: "2024-06-10T09:00:00.000Z",
  },
  {
    id: 2,
    title: "Explore HyperUI Components",
    description: "Review navbar, hero, footer, and card components from hyperui.dev.",
    completed: false,
    priority: "Medium",
    createdAt: "2024-06-08T14:30:00.000Z",
  },
  {
    id: 3,
    title: "Style Components with Tailwind",
    description: "Apply responsive design and smooth transitions to all components.",
    completed: true,
    priority: "Low",
    createdAt: "2024-06-05T11:15:00.000Z",
  },
  {
    id: 4,
    title: "Set Up Git Repository",
    description: "Initialize and commit with meaningful commit messages.",
    completed: true,
    priority: "Medium",
    createdAt: "2024-06-01T16:45:00.000Z",
  },
];

const initialTasks = sampleTasks;

export default function Home() {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // eslint-disable-next-line react-hooks/set-state-in-effect
          setTasks(parsed);
        }
      }
    } catch {
      // Keep sample data
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const addTask = useCallback((task) => {
    setTasks((prev) => [task, ...prev]);
  }, []);

  const toggleTask = useCallback((id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }, []);

  const deleteTask = useCallback((id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }, []);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") return true;
    if (filter === "Pending") return !task.completed;
    if (filter === "Completed") return task.completed;
    return true;
  });

  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;
  const pending = total - completed;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />

      <main>
        <FeaturesSection />
        <TaskStats total={total} completed={completed} pending={pending} />
        <FilterButtons activeFilter={filter} onFilterChange={setFilter} />

        <section id="add-task" className="scroll-mt-24">
          <TaskForm onAddTask={addTask} />
        </section>

        <TaskList
          tasks={filteredTasks}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
        />
      </main>

      <Footer />
    </div>
  );
}
