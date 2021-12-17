import { ImCross } from "react-icons/im";
import Card from "./shared/Card";


function TodoItem({ item, priorityBg, priorityColor }) {
  if (item.priority === "High") {
    priorityBg = "#e74c3c";
  } else if (item.priority === "Medium") {
    priorityBg = "#f1c40f";
    priorityColor = "#000";
  } else {
    priorityBg = "#27ae60";
  }
  const priorityStyle = {
    backgroundColor: priorityBg,
    color: priorityColor,
  };
  return (
    <Card>
      <div className="numDisplay"> {item.id} </div>
      <button className="closeCard">
      <ImCross color="#e74c3c"  />
      </button>
      <div className="cardMain">
        <div className="taskDisplay">
          <span>Task:</span> {item.task}
        </div>
        <div className="dateDisplay">
          <span>Date:</span> {item.date}
        </div>
        <div className="priorityDisplay">
          <span>Priority:</span>{" "}
          <span style={priorityStyle}>{item.priority}</span>
        </div>
      </div>
    </Card>
  );
}
TodoItem.defaultProps = {};

export default TodoItem;
