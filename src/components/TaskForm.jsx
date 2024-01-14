import { useState } from "react";
import DeleteTask from "./DeleteTask";
import "../style.css";

const TaskForm = () => {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (!newItem) {
      alert("Item is Empty");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };

    setItems((oldList) => [...oldList, item]);
    setNewItem("");
  };
  const deleteItem = (id) => {
    const newArray = items.filter((item) => item.id != id);
    setItems(newArray);
  };

  const completedTask = (id) => {
    setItems((oldList) =>
      oldList.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      ),
    );
  };

  return (
    <div>
      <h1>Task Tracker</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          id="task"
          placeholder="Add a new item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit" onClick={() => addItem()}>
          Add
        </button>
      </form>
      <DeleteTask
        items={items}
        onDelete={deleteItem}
        onToggle={completedTask}
      />
    </div>
  );
};

export default TaskForm;
