import TodoItem from "./TodoItem";
function TodoList({ todo }) {
  return (
    <div className="todoList">
      {todo.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default TodoList;
