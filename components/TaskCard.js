const priorityAccent = {
  High: "border-l-4 border-l-red-500",
  Medium: "border-l-4 border-l-orange-500",
  Low: "border-l-4 border-l-green-500",
};

const priorityBadge = {
  High: "bg-red-100 text-red-800",
  Medium: "bg-orange-100 text-orange-800",
  Low: "bg-green-100 text-green-800",
};

export default function TaskCard({ task, onToggle, onDelete }) {
  const handleToggle = () => onToggle(task.id);
  const handleDelete = () => onDelete(task.id);

  const formattedDate = new Date(task.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const accent = priorityAccent[task.priority] || priorityAccent.Medium;
  const badge = priorityBadge[task.priority] || priorityBadge.Medium;

  return (
    <article
      className={`
        group relative overflow-hidden rounded-xl border-2 border-gray-100 bg-white
        transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5
        ${accent}
        ${task.completed ? "bg-gray-50/50" : ""}
      `}
    >
      <div className="p-5 sm:p-6">
        <div className="mb-3 flex items-start justify-between">
          <h3
            className={`
              text-lg font-semibold break-words
              ${task.completed ? "line-through text-gray-400" : "text-gray-900"}
            `}
          >
            {task.title}
          </h3>
          <span
            className={`
              ml-3 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold whitespace-nowrap
              ${badge}
            `}
          >
            {task.priority}
          </span>
        </div>

        {task.description && (
          <p
            className={`
              mb-4 text-sm
              ${task.completed ? "text-gray-400" : "text-gray-600"}
            `}
          >
            {task.description}
          </p>
        )}

        <div className="mb-2 flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1.5 text-gray-500">
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 18.75a7.5 7.5 0 0 1 14.936 0"
              />
            </svg>
            <time dateTime={task.createdAt} className="text-gray-500">
              {formattedDate}
            </time>
          </div>

          <span
            className={`
              inline-flex items-center gap-1.5 text-xs font-medium
              ${task.completed ? "text-green-600" : "text-amber-600"}
            `}
          >
            <span
              className={`
                h-2 w-2 rounded-full
                ${task.completed ? "bg-green-500" : "bg-amber-500"}
              `}
            />
            {task.completed ? "Completed" : "Pending"}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-end gap-2 border-t border-gray-100 bg-gray-50/50 px-5 py-3 sm:px-6">
        <button
          onClick={handleToggle}
          className={`
            rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-offset-1
            ${
              task.completed
                ? "bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-400"
                : "bg-teal-50 text-teal-700 hover:bg-teal-100 focus:ring-teal-500"
            }
          `}
        >
          {task.completed ? "Mark Pending" : "Mark Completed"}
        </button>

        <button
          onClick={handleDelete}
          className="rounded-lg bg-red-50 px-4 py-2 text-sm font-medium text-red-700 transition-all duration-200 hover:bg-red-100 hover:shadow focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1"
        >
          Delete
        </button>
      </div>
    </article>
  );
}
