import { useState } from "react";
import "./style.css";
import { IMainProps } from "../main/Main";

interface IFormProps {
  tasks: IMainProps[];
  setTasks: React.Dispatch<React.SetStateAction<IMainProps[]>>;
}

const Form = ({ tasks, setTasks }: IFormProps) => {
  const [input, setInput] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTasks([
      { id: Math.random() * 10, text: input, completed: false },
      ...tasks,
    ]);
    setInput("");
  };

  return (
    <form onSubmit={handleAddTask}>
      <input
        type="text"
        placeholder="Add new task..."
        value={input}
        onChange={handleChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
};

export default Form;
