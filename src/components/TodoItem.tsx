import { formatDate } from "../utils";
import type { Todo } from "../types";

interface IProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem = ({ todo, onToggle, onDelete }: IProps) => {
  return (
    <li
      className={`list-group-item-action list-group-item d-flex align-items-center justify-content-between ${
        todo.done ? "bg-light" : ""
      }`}
    >
      <div className="d-flex align-items-center gap-2 flex-grow-1">
        <input
          type="checkbox"
          className={`form-check-input ${
            !todo.done ? "bg-dark-subtle cursor-pointer" : ""
          }`}
          checked={todo.done}
          onChange={() => onToggle(todo.id)}
        />
        <span className={todo.done ? "text-muted text-break" : "text-break"}>
          {todo.text}
        </span>
      </div>

      <div
        className="d-flex align-items-center justify-content-end gap-3"
        style={{ minWidth: "160px", flexShrink: 0 }}
      >
        <small className="text-muted text-nowrap">
          {formatDate(new Date(todo.createdAt))}
        </small>
        <button
          className="btn btn-warning btn-sm flex-shrink-0"
          onClick={() => onDelete(todo.id)}
        >
          <i className="bi bi-trash" />
        </button>
      </div>
    </li>
  );
};
