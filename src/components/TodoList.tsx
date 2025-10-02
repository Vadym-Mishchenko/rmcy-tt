import { motion, AnimatePresence } from "framer-motion";
import { TodoItem } from "./TodoItem";
import type { Todo } from "../types";

interface IProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoList = ({ todos, onToggle, onDelete }: IProps) => {
  if (todos.length === 0) return null;

  return (
    <ul className="list-group">
      <AnimatePresence>
        {todos.map((todo, index) => (
          <motion.li
            key={todo.id}
            layout
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className={`list-group-item list-group-item-action d-flex align-items-center justify-content-between ${
              index === 0 && todos.length === 1
                ? "rounded"
                : index === 0
                ? "rounded-top"
                : index === todos.length - 1
                ? "rounded-bottom"
                : ""
            } ${todo.done ? "bg-light" : ""}`}
          >
            <TodoItem todo={todo} onToggle={onToggle} onDelete={onDelete} />
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
};
