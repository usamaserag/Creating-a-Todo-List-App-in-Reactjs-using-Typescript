import Task from "../task/Task";
import { IMainProps } from "../main/Main";

interface TasksProps {
  tasks: IMainProps[];
  filteredTasks: IMainProps[];
  setTasks: React.Dispatch<React.SetStateAction<IMainProps[]>>;
  emptyMessage: string;
}
const TasksList = ({ tasks, setTasks, filteredTasks, emptyMessage }: TasksProps) => {

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
        <h6>{emptyMessage}</h6>
      )}
    </div>
  );
};

export default TasksList;
