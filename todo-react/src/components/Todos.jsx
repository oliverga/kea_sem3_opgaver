import List from "./List";

function Todos({ todos, setTodos }) {
  return (
    <div>
      <List
        title="Todos"
        todos={todos.filter((todo) => !todo.done)}
        setTodos={setTodos}
      />
    </div>
  );
}

export default Todos;
