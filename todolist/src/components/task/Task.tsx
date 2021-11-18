import "./style.css";
type TaskProps = {
  title: string;
};

const Task = (props: TaskProps) => {
  return (
    <ul>
      <li>{props.title}</li>
    </ul>
  );
};

export default Task;
