import "./style.css";

interface IFilterTasksProps {
  tasksToShow: string;
  handleTasksToShow: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FilterTasks = ({ tasksToShow, handleTasksToShow }: IFilterTasksProps) => {
  return (
    <div className="mb-4">
      <span>
        <input
          type="radio"
          id="all"
          name="tasks"
          value="all"
          checked={tasksToShow === "all"}
          onChange={handleTasksToShow}
        />
        <label htmlFor="all">All</label>
      </span>
      <span>
        <input
          type="radio"
          id="completed"
          name="tasks"
          value="completed"
          checked={tasksToShow === "completed"}
          onChange={handleTasksToShow}
        />
        <label htmlFor="completed">Completed</label>
      </span>
      <span>
        <input
          type="radio"
          id="active"
          name="tasks"
          value="active"
          checked={tasksToShow === "active"}
          onChange={handleTasksToShow}
        />
        <label htmlFor="active">Active</label>
      </span>
    </div>
  );
};

export default FilterTasks;
