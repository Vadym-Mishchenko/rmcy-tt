import { motion } from "framer-motion";
import { formatDate } from "../utils";
import type { Todo } from "../types";

interface IProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem = ({ todo, onToggle, onDelete }: IProps) => {
  return (
    <div className="d-flex align-items-center justify-content-between w-100">
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
        className="d-flex align-items-center gap-3 flex-shrink-0 text-end"
        style={{ minWidth: "170px" }}
      >
        <small className="text-muted text-nowrap">
          {formatDate(new Date(todo.createdAt))}
        </small>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="btn btn-warning btn-sm"
          onClick={() => onDelete(todo.id)}
        >
          <i className="bi bi-trash" />
        </motion.button>
      </div>
    </div>
  );
};
