import { useState, ChangeEvent, useEffect } from "react";
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
  const [emptyMessage, setEmptyMessage] = useState<string>("");

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
        setEmptyMessage("There isn't tasks added yet");
      } else if (tasksToShow === "completed") {
        setFilteredTasks(tasks.filter((task) => task.completed));
        if (tasks.length === 0) {
          setEmptyMessage("There isn't tasks added yet");
        } else {
          setEmptyMessage("There isn't tasks completed yet");
        }
      } else if (tasksToShow === "active") {
        setFilteredTasks(tasks.filter((task) => !task.completed));
        if (tasks.length === 0) {
          setEmptyMessage("There isn't tasks added yet");
        } else {
          setEmptyMessage("All tasks are done");
        }
      }
    };
    handleFilteredTasks();
    localStorage.setItem("items", JSON.stringify(tasks));
  }, [tasks, tasksToShow]);

  return (
    <div className="container p-5 rounded bg-light shadow">
      <h1 className="text-center mb-5 text-primary">
        <u>My Task-s</u>
      </h1>
      <Form tasks={tasks} setTasks={setTasks} />
      <hr className="my-5" />
      <FilterTasks
        tasksToShow={tasksToShow}
        handleTasksToShow={handleTasksToShow}
      />
      <TasksList
        filteredTasks={filteredTasks}
        setTasks={setTasks}
        tasks={tasks}
        emptyMessage={emptyMessage}
      />
    </div>
  );
};

export default Main;
