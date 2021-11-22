import { useState, ChangeEvent, FormEvent } from "react";
import "./style.css";
import { IMainProps } from "../main/Main";

interface IFormProps {
  tasks: IMainProps[];
  setTasks: React.Dispatch<React.SetStateAction<IMainProps[]>>;
}

const Form = ({ tasks, setTasks }: IFormProps) => {
  const [input, setInput] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  const handleAddTask = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    input.trim().length !== 0 ? setTasks([
      { id: Math.random() * 10, text: input, completed: false },
      ...tasks,
    ]) : alert("You Must Enter Task!")
    setInput("");
  };

  return (
    <div className="card py-4 px-4 shadow-sm mb-4 rounded-3 border-0">
      <form
        onSubmit={handleAddTask}
        className="d-flex flex-row align-items-center"
      >
        <input
          className="form-control form-control-lg border-0 task-input"
          type="text"
          placeholder="Add new task ..."
          value={input}
          onChange={handleChange}
        />
        <input type="submit" value="Add" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default Form;
