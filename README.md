# TaskFlow

## About

A Task Tracker application built with **Next.js** and styled using **HyperUI** components. The app lets users create, manage, and organise tasks with priority levels, completion status, filtering, and persistent local storage so tasks survive page refreshes.

The UI is built with Tailwind CSS components sourced from [HyperUI](https://hyperui.dev) — a free collection of Tailwind CSS components.

## Features

- **Add Tasks** — Enter a task title (required) and optional description with a priority level (High / Medium / Low)
- **Mark Complete** — Toggle any task between pending and completed with a single click
- **Delete Tasks** — Remove tasks that are no longer needed
- **Live Statistics** — Real-time counts of Total, Completed, and Pending tasks with a progress bar
- **Filter Tasks** — View All, Pending, or Completed tasks using dynamic filtering
- **Local Storage Persistence** — Tasks are automatically saved to `localStorage` and restored on reload
- **Conditional Rendering** — Completed tasks are visually distinct with strikethrough text
- **Responsive Design** — Works seamlessly on desktop, tablet, and mobile
- **HyperUI UI Components** — Navbar, hero section, feature grid, cards, and footer styled with HyperUI's Tailwind CSS components

## Tech Stack

- **Next.js 16** — App Router with Client/Server components
- **React** — `useState`, `useEffect`, `useCallback` for state and side-effects
- **Tailwind CSS** — Utility-first styling
- **HyperUI** — Pre-built UI components (navbar, hero, cards, footer)
- **JavaScript (ES6+)** — Arrow functions, destructuring, spread operator, `map()`, `filter()`, `JSON.stringify()` / `JSON.parse()`

## Components

```
task-tracker/
├── app/
│   ├── layout.js          # Root layout with metadata + font
│   ├── page.js            # Main page — state management & localStorage
│   └── globals.css        # Global Tailwind styles
├── components/
│   ├── Navbar.js          # HyperUI header/1 — top navigation bar
│   ├── Hero.js            # HyperUI banner/1 — hero section with CTA buttons
│   ├── FeaturesSection.js # HyperUI feature-grid/1 — feature highlights
│   ├── TaskStats.js       # Statistics: total, completed, pending + progress
│   ├── TaskForm.js        # Form to add tasks (title, description, priority)
│   ├── FilterButtons.js   # All / Pending / Completed filter tabs
│   ├── TaskList.js        # Renders task list (empty state included)
│   ├── TaskCard.js        # HyperUI cards/9 "Forum Post" style task card
│   └── Footer.js          # HyperUI footer/1 — site footer
├── public/
├── README.md
└── package.json
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer)
- npm

### Installation

```bash
git clone https://github.com/your-username/task-tracker.git
cd task-tracker
npm install
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## What I Learned

- **React Component Architecture** — Breaking a UI into reusable, composable components
- **Props** — Passing task data and callback handlers down through the component tree
- **State Management** — `useState` for tasks and filter, `useEffect` for localStorage sync, `useCallback` for stable handlers
- **Immutable State Updates** — Updating arrays with `map()`, `filter()`, and the spread operator
- **Event Handling** — Form submission, button clicks, and toggle actions
- **Conditional Rendering** — Ternary operators for completed vs pending task styling
- **Client Components** — Using `"use client"` directive for components that interact with `localStorage`
- **Local Storage API** — Serializing state with `JSON.stringify()` and parsing with `JSON.parse()` with error handling
- **HyperUI Integration** — Adapting pre-built Tailwind CSS components from the HyperUI component library
- **Responsive Design** — Building a layout that adapts from mobile to desktop using Tailwind's grid and utility classes

## HyperUI Components Used

| Feature | HyperUI Component | Source |
|---|---|---|
| Top navigation | Header (Icon and links on left, CTA on right) | `hyperui.dev/components/marketing/headers/` |
| Hero banner | Banner (Center, Dark) | `hyperui.dev/components/marketing/banners/` |
| Feature highlights | Feature Grids (Simple grid) | `hyperui.dev/components/marketing/feature-grids/` |
| Task cards | Blog Cards / Forum Post | `hyperui.dev/components/marketing/cards/` |
| Site footer | Footer (Base) | `hyperui.dev/components/marketing/footers/` |

## Future Improvements

- Dark / light mode toggle
- Edit existing tasks (inline or modal)
- Add due dates and overdue task highlighting
- Search tasks by keyword
- Sort tasks by priority, date, or title
- Drag-and-drop reordering
- Keyboard shortcuts
- Confirmation dialog before deletion
- Toast / snackbar notifications
- Task categories / tags with custom colours
