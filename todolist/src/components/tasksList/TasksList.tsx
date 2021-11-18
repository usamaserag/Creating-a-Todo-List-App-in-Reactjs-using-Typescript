import "./style.css";
import Task from "../task/Task";

import { IMainProps } from "../main/Main";

interface TasksProps {
    tasks: IMainProps[];
}
const TasksList = ({tasks} : TasksProps ) => {
  return (
    <div>
      {tasks.map((task, index) => {
        return <Task title={task.text} key={index} />;
      })}
    </div>
  );
};

export default TasksList;
