import { useState, ChangeEvent, useEffect } from "react";
import "./style.css";
import TasksList from "../tasksList/TasksList";
import Form from "../form/Form";
import FilterTasks from "../filterTasks/FilterTasks";

export interface IMainProps {
  id: number;
  text: string;
  completed: boolean;
}

const Main = () => {
  const [tasks, setTasks] = useState<IMainProps[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<IMainProps[]>([]);
  const [tasksToShow, setTasksToShow] = useState<string>("all");

  useEffect(() => {
    if (localStorage.getItem("items") !== null) {
      const tasksInLocalStorage = JSON.parse(
        localStorage.getItem("items") || ""
      );
      setTasks(tasksInLocalStorage);
    }
  }, []);

  const handleTasksToShow = (e: ChangeEvent<HTMLInputElement>): void => {
    setTasksToShow(e.target.value);
  };

  useEffect(() => {
    const handleFilteredTasks = () => {
      if (tasksToShow === "all") {
        setFilteredTasks(tasks);
      } else if (tasksToShow === "completed") {
        setFilteredTasks(tasks.filter((task) => task.completed));
      } else if (tasksToShow === "active") {
        setFilteredTasks(tasks.filter((task) => !task.completed));
      }
    };
    handleFilteredTasks();
    localStorage.setItem("items", JSON.stringify(tasks));
  }, [tasks, tasksToShow]);

  return (
    <div className="container p-5 rounded mx-auto bg-light shadow">
      <h1 className="text-center mb-4 pb-3 text-primary"><u>My Task-s</u></h1>
      <Form tasks={tasks} setTasks={setTasks} />
      <hr className="my-4" />
      <FilterTasks
        tasksToShow={tasksToShow}
        handleTasksToShow={handleTasksToShow}
      />
      <TasksList
        filteredTasks={filteredTasks}
        setTasks={setTasks}
        tasks={tasks}
      />
    </div>
  );
};

export default Main;
