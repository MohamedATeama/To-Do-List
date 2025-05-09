import { useRef, useState } from "react";
import "./App.css";

function App() {
  const inputValue = useRef();

  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const task = inputValue.current.value;
    const newTask = { done: false, task };
    setTasks([...tasks, newTask]);
    inputValue.current.value = "";
  };

  const endTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>To Do List</h1>
      <input ref={inputValue} type="text" placeholder="Enter a task" />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map(({ task, done }, index) => (
          <div className="div1">
            <li
              className={done ? "done" : ""}
              onClick={() => endTask(index)}
              key={index}
            >
              {task}
            </li>
            <span onClick={() => deleteTask(index)}>X</span>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;