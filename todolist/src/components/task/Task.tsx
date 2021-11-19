import { FaTrash, FaEdit } from "react-icons/fa";
import "./style.css";
import { IMainProps } from "../main/Main";

interface TaskProps {
  title: string;
  task: {};
  tasks: IMainProps[];
  setTasks: React.Dispatch<React.SetStateAction<IMainProps[]>>;
}

const Task = ({ title, task, tasks, setTasks }: TaskProps) => {
  const handleDelete = (): void => {
    setTasks(tasks.filter((item) => item !== task));
  };

  return (
    <ul>
      <li>
        {title}{" "}
        <button>
          <FaEdit />
        </button>{" "}
        <button onClick={handleDelete}>
          <FaTrash />
        </button>
      </li>
    </ul>
  );
};

export default Task;
