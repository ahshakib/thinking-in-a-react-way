import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function Todos() {
  const todos = useSelector((state) => state.todos);

  return (
    <>
      <div className="flex flex-wrap gap-y-3 mt-5">
        {todos.map((todo) => (
          <div key={todo.id} className="w-full">
            <TodoItem todo={todo} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Todos;
