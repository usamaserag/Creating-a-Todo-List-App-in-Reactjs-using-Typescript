import "./style.css";
import Task from "../task/Task";
import { IMainProps } from "../main/Main";

interface TasksProps {
  tasks: IMainProps[];
  filteredTasks: IMainProps[];
  setTasks: React.Dispatch<React.SetStateAction<IMainProps[]>>;
}
const TasksList = ({ tasks, setTasks, filteredTasks }: TasksProps) => {
  return (
    <div>
      {filteredTasks.length > 0 ? (
        filteredTasks.map((task, index) => {
          return (
            <Task
              title={task.text}
              key={index}
              task={task}
              setTasks={setTasks}
              tasks={tasks}
              />
          );
        })
      ) : (
        <h5>There Is No Tasks To Show</h5>
      )}
    </div>
  );
};

export default TasksList;
