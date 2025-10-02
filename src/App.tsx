import { useMemo } from "react";
import { motion } from "framer-motion";
import { TodoForm, TodoList } from "./components";
import { useLocalStorage } from "./hooks";
import { STORAGE_KEY } from "./config";
import type { Todo } from "./types";

const App = () => {
  const [todos, setTodos] = useLocalStorage<Todo[]>(STORAGE_KEY, []);

  const activeTodos = useMemo(() => todos.filter((t) => !t.done), [todos]);
  const doneTodos = useMemo(() => todos.filter((t) => t.done), [todos]);

  const handleAdd = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      createdAt: new Date().toISOString(),
      done: false,
    };

    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleTodo = (id: string) =>
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );

  const removeTodo = (id: string) =>
    setTodos((prev) => prev.filter((t) => t.id !== id));

  return (
    <motion.div
      className="container py-5"
      style={{ maxWidth: 640 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeIn" }}
    >
      <h2 className="mb-4 text-center">Todolist App</h2>
      <TodoForm onAdd={handleAdd} />

      <hr className="my-4" />

      <TodoList
        todos={activeTodos}
        onToggle={toggleTodo}
        onDelete={removeTodo}
      />

      {doneTodos.length > 0 && <h3 className="mt-4">Done</h3>}
      <TodoList todos={doneTodos} onToggle={toggleTodo} onDelete={removeTodo} />
    </motion.div>
  );
};

export default App;
