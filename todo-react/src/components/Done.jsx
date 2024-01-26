import List from "./List";

function Done({ todos, setTodos }) {
  return (
    <div>
      <List
        title="Done"
        todos={todos.filter((todo) => todo.done)}
        setTodos={setTodos}
      />
    </div>
  );
}

export default Done;
