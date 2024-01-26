function Todo({ id, text, done, doneTime, setTodos }) {
  const readableDoneTime = new Date(doneTime).toLocaleString("en-US", {
    hour12: false,
  });

  const handleDelete = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const handleDone = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            done: !todo.done,
            doneTime: new Date().toISOString(),
          };
        }
        return todo;
      });
    });
  };

  return (
    <div className="border border-stone-300 flex justify-between w-96 px-4 py-3 rounded overflow-hidden">
      <div className="flex gap-4">
        <input
          type="checkbox"
          className="w-4"
          checked={done}
          onChange={() => handleDone(id)}
        ></input>
        <div className="flex items-baseline gap-2 flex-wrap flex-grow overflow-hidden">
          <p className={`max-w-sm ${done ? "line-through" : ""}`}>{text}</p>
          {done && <p className="text-sm text-stone-500">{readableDoneTime}</p>}
        </div>
      </div>
      <button onClick={() => handleDelete(id)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-x stroke-stone-500 hover:stroke-stone-400 transition-colors duration-200"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M18 6l-12 12"></path>
          <path d="M6 6l12 12"></path>
        </svg>
      </button>
    </div>
  );
}

export default Todo;
