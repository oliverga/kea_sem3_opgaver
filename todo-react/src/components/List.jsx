import Todo from "./Todo";

function List({ title, todos, setTodos }) {
  const handleClear = () => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => !todo.done);
    });
  };

  return (
    <div className="w-96">
      <div className="flex items-baseline gap-4 mb-4">
        <h2 className="mb-2 font-semibold">{title}</h2>
        {title === "Done" && (
          <button
            className="border border-stone-300 rounded px-2 py-1 text-sm hover:bg-stone-100 transition-colors duration-200"
            onClick={handleClear}
          >
            Remove done
          </button>
        )}
      </div>
      <ul className="flex flex-col gap-4">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            setTodos={setTodos}
            done={todo.done}
            doneTime={todo.doneTime}
          />
        ))}
      </ul>
    </div>
  );
}

export default List;
