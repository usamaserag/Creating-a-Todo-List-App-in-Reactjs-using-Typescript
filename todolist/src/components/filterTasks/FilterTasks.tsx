import "./style.css";

interface IFilterTasksProps {
  tasksToShow: string;
  handleTasksToShow: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FilterTasks = ({ tasksToShow, handleTasksToShow }: IFilterTasksProps) => {
  return (
    <div className="mb-4">
      <span className="filterTasks-btn">
        <input
          type="radio"
          id="all"
          name="tasks"
          value="all"
          checked={tasksToShow === "all"}
          onChange={handleTasksToShow}
          className="d-none"
        />
        <label
          htmlFor="all"
          className={`filterLabel ${
            tasksToShow === "all" ? "filterLabel-active" : ""
          }`}
        >
          ALL
        </label>
      </span>
      <span className="filterTasks-btn">
        <input
          type="radio"
          id="completed"
          name="tasks"
          value="completed"
          checked={tasksToShow === "completed"}
          onChange={handleTasksToShow}
          className="d-none"
        />
        <label
          htmlFor="completed"
          className={`filterLabel ${
            tasksToShow === "completed" ? "filterLabel-active" : ""
          }`}
        >
          COMPLETED
        </label>
      </span>
      <span className="filterTasks-btn">
        <input
          type="radio"
          id="active"
          name="tasks"
          value="active"
          checked={tasksToShow === "active"}
          onChange={handleTasksToShow}
          className="d-none"
        />
        <label
          htmlFor="active"
          className={`filterLabel ${
            tasksToShow === "active" ? "filterLabel-active" : ""
          }`}
        >
          ACTIVE
        </label>
      </span>
    </div>
  );
};

export default FilterTasks;
