import "./style.css";
import Task from "../task/Task";
import { IMainProps } from "../main/Main";

interface TasksProps {
  tasks: IMainProps[];
}
const TasksList = ({ tasks }: TasksProps) => {
  return (
    <div>
      {tasks.length > 0
        ? tasks.map((task, index) => {
            return <Task title={task.text} key={index} />;
          })
        : "There Is No Tasks To Show"}
    </div>
  );
};

export default TasksList;
