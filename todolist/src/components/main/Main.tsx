import { useState } from "react";
import "./style.css";
import TasksList from "../tasksList/TasksList";
import Form from "../form/Form";

export interface IMainProps {
  id: number;
  text: string;
  completed: boolean;
}

const Main = () => {
  const [tasks, setTasks] = useState<IMainProps[]>([]);

  return (
    <div>
      <Form tasks={tasks} setTasks={setTasks} />
      <TasksList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default Main;
