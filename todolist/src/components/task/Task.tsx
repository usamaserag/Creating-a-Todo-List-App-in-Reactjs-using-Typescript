import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import "./style.css";
import { IMainProps } from "../main/Main";
import { useState, ChangeEvent, SetStateAction, Dispatch } from "react";

interface TaskProps {
  title: string;
  task: IMainProps;
  tasks: IMainProps[];
  setTasks: Dispatch<SetStateAction<IMainProps[]>>;
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
        <ul className="list-group">
          <li className="justify-content-between list-group-item py-1 d-flex align-items-center border-0 bg-transparent">
            <input
              type="text"
              value={taskEdit}
              onChange={handleEditChange}
              onBlur={handleSubmitEdit}
              className="form-control w-50"
            />
          </li>
        </ul>
      ) : (
        <ul className="list-group">
          <li className="task justify-content-between list-group-item py-1 d-flex align-items-center border-0 bg-transparent">
            <div>
              <input
                type="checkbox"
                onChange={handleCompleted}
                checked={task.completed}
                className="form-check-input me-3"
              />
              <label
                className={`${task.completed ? "text-decoration-line-through" : ""}`}
              >
                {title}
              </label>
            </div>

            <div className="icons-container">
              <a href="#!" title="Edit todo" onClick={handleEdit} className="bg-transparent border-0 text-info me-3">
                <FaPencilAlt />
              </a>
              <a href="#!" title="Delete todo" onClick={handleDelete} className="bg-transparent border-0 me-2 text-danger">
                <FaTrashAlt />
              </a>
            </div>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Task;
