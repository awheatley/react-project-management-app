import { useState } from "react";
import Button from "./Button";

export default function NewTask({ onAddTask }) {
  const [newTask, setNewTask] = useState("");

  function handleOnChange(event) {
    setNewTask(event.target.value);
  }

  function handleClick() {
    onAddTask(newTask);
    setNewTask("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleOnChange}
        value={newTask}
      />
      <Button onClick={handleClick}>Add task</Button>
    </div>
  );
}
