import "./App.css";
import { useState } from "react";
import Header from "./Header";
import Form from "./Form"
import Todolist from "./Todolist"
function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <Header />
      <Form 
      input={input} 
      setInput={setInput} 
      todos={todos} 
      setTodos={setTodos} />
      <Todolist 
      todos={todos}
      setTodos={setTodos}
      />
    </div>
  );
}

export default App;
