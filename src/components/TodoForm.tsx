import { useState } from "react";
import { validateText } from "../utils";

interface IProps {
  onAdd: (text: string) => void;
}

export const TodoForm = ({ onAdd }: IProps) => {
  const [text, setText] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const err = validateText(text);

    setError(err);
    if (err) return;

    onAdd(text.trim());
    setText("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    if (error) setError(null);
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="mb-3">
      <div className="d-flex gap-2">
        <input
          type="text"
          className={`form-control ${error ? "is-invalid" : ""}`}
          placeholder="New task"
          value={text}
          onChange={handleChange}
        />

        <button className="btn btn-primary px-4" type="submit">
          <i className="bi bi-plus" />
        </button>
      </div>

      {error && <div className="invalid-feedback d-block">{error}</div>}
    </form>
  );
};
