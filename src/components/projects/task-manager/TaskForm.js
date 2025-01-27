import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [isMouseOver, setIsMouseOver] = useState(false);
  function handleMouseOver() {
    setIsMouseOver(true);
  }
  function handleMouseOut() {
    setIsMouseOver(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      addTask({ title });
      setTitle("");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title - use max 35 charcters"
        required
        name="taskmanager"
        id="taskmanager"
      />
      <button
        style={{
          backgroundColor: isMouseOver && "black",
          borderRadius: "25px",
          marginTop: "4%",
        }}
        className="submit-btn"
        type="submit"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <p
          style={{
            color: isMouseOver && "white",
          }}
        >
          Add Task
        </p>
      </button>
    </form>
  );
};

export default TaskForm;
