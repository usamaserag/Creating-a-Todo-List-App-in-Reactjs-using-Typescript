import { useState, useEffect } from "react";
import "./style.css";
import TasksList from "../tasksList/TasksList";

export interface IMainProps {
  id: number;
  text: string;
  completed: boolean;
}

const Main = () => {
  const [tasks, setTasks] = useState<IMainProps[]>([]);
  useEffect(() => {
    setTasks([{ id: 1, text: "Learn TypeScript", completed: false }]);
  }, []);
  return (
    <div>
      <TasksList tasks={tasks} />
    </div>
  );
};

export default Main;
