import "./style.css";
import Task from "../task/Task";
import { IMainProps } from "../main/Main";

interface TasksProps {
  tasks: IMainProps[];
  setTasks: React.Dispatch<React.SetStateAction<IMainProps[]>>;
}
const TasksList = ({ tasks, setTasks }: TasksProps) => {
  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map((task, index) => {
          return (
            <Task
              title={task.text}
              key={index}
              task={task}
              tasks={tasks}
              setTasks={setTasks}
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
