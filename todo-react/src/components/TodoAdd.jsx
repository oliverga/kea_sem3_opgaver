import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoAdd({ setTodos }) {
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: uuidv4(),
        text: inputValue,
        created: new Date().toISOString(),
        done: false,
        doneTime: null,
      },
    ]);
    setInputValue("");
  };

  return (
    <div className="">
      <form onSubmit={handleAddTodo} className="flex flex-col gap-3">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          name="Input todo"
          id="input"
          className=" bg-stone-50 border border-stone-300 rounded px-4 py-3 w-96 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-300 focus:border-transparent transition-colors duration-200"
          placeholder="Add a new todo"
        />
        <button
          type="submit"
          className="w-fit border border-stone-300 rounded px-2 py-1 text-sm hover:bg-stone-100 transition-colors duration-200"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default TodoAdd;
