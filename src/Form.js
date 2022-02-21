import React from "react";
import { v4 as uuidv4 } from "uuid";
function Form(props) {
  const { input, setInput, todos, setTodos } = props;
  function changeHandler(e) {
    setInput(e.target.value);
  }
  function submitHandler(e) {
    e.preventDefault();
    if (!input) {
      return;
    }
    setTodos([...todos, { id: uuidv4(), name: input }]);
    setInput("");
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Add items here..."
          value={input}
          onChange={changeHandler}
        />
        <button type="submit" className="btn">
          Add
        </button>
      </form>
    </div>
  );
}

export default Form;
