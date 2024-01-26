import "./App.css";
import Todos from "./components/Todos";
import Done from "./components/Done";
import { useEffect, useState } from "react";
import TodoAdd from "./components/TodoAdd";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <div className=" container mx-auto px-4">
        <h1 className="text-xl font-semibold my-10">Your Agenda</h1>
        <div className="flex gap-8">
          <TodoAdd setTodos={setTodos} />
          <Todos todos={todos} setTodos={setTodos} />
          <Done todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </>
  );
}

export default App;
