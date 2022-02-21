import React from "react";

function Todolist(props) {
  const { todos, setTodos } = props;

  function handleDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <input
            className="input"
            type="text"
            value={todo.name}
            onChange={(e) => e.preventDefault()}
          />
          <button className="btn" onClick={() => handleDelete(todo.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Todolist;
