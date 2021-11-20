import { FaTrash, FaEdit } from "react-icons/fa";
import "./style.css";
import { IMainProps } from "../main/Main";
import { useState, ChangeEvent } from "react";

interface TaskProps {
  title: string;
  task: IMainProps;
  tasks: IMainProps[];
  setTasks: React.Dispatch<React.SetStateAction<IMainProps[]>>;
}

const Task = ({ title, task, tasks, setTasks }: TaskProps) => {
  const [edit, setEdit] = useState<Boolean>(false);
  const [taskEdit, setTaskEdit] = useState<string>("");

  const handleDelete = (): void => {
    setTasks(tasks.filter((item) => item !== task));
  };

  const handleEditChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskEdit(e.target.value);
  };

  const handleEdit = () => {
    setEdit(true);
    setTaskEdit(title);
  };

  const handleSubmitEdit = () => {
    setTaskEdit(taskEdit);
    setEdit(false);
    if (taskEdit.length > 0) {
      setTasks(
        tasks.map((item) => {
          if (item.id === task.id) {
            item.text = taskEdit;
          }
          return item;
        })
      );
    } else {
      alert("It must contain a task!");
    }
  };

  const handleCompleted = () => {
    setTasks(
      tasks.map((item) => {
        if (item.id === task.id) {
          item.completed = !item.completed;
        }
        return item;
      })
    );
  };

  return (
    <div>
      {edit ? (
        <ul>
          <li>
            <input
              type="text"
              value={taskEdit}
              onChange={handleEditChange}
              onBlur={handleSubmitEdit}
            />
          </li>
        </ul>
      ) : (
        <ul>
          <li className={`${task.completed ? "completed" : ""}`}>
            <input type="checkbox" onChange={handleCompleted} />
            {title}
            <button onClick={handleEdit}>
              <FaEdit />
            </button>
            <button onClick={handleDelete}>
              <FaTrash />
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Task;
