import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTasks,
  selectMaxTasks,
  selectCompletedTasks,
  selectAllTasks,
} from "../Store/taskMan/selector";
import {
  addTask,
  deleteTask,
  showCompleted,
  setMaxTasks,
} from "../Store/taskMan/slice";

const HomePage = () => {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState("");
  const [message, setMessage] = useState("");
  const [maximumTasks, setMaximumTasks] = useState("");
  console.log("max", maximumTasks);

  const allTasks = useSelector(selectAllTasks);
  const tasks = useSelector(selectTasks);
  const maxTasks = useSelector(selectMaxTasks);
  const showTasks = useSelector(selectCompletedTasks);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tasks.length < maxTasks) {
      console.log("length", tasks.length);
      console.log("maxTasks", maxTasks);
      const id = allTasks.length + 1;
      const completed = false;
      const task = newTask;
      const addNewTask = { id, task, completed };
      console.log("Task", addNewTask);
      dispatch(addTask(addNewTask));
      setNewTask("");
    } else {
      setMessage("Max tasks reached");
    }
  };

  const handleSubmitTasks = (e) => {
    e.preventDefault();
    if (maximumTasks > 1 && maximumTasks < 99) {
      const number = maximumTasks;
      dispatch(setMaxTasks(number));
      setMaximumTasks("");
    } else {
      setMessage("Please provide a number between 1 and 99");
    }
  };

  return (
    <div>
      <h4>{message}</h4>
      <div className="container">
        <form className="form" onSubmit={handleSubmitTasks}>
          <h2>Set max tasks</h2>
          <p>
            <label>
              Name:{" "}
              <input
                type="text"
                value={maximumTasks}
                onChange={(e) => setMaximumTasks(parseInt(e.target.value))}
              ></input>
            </label>
          </p>
          <button type="submit">submit</button>
        </form>

        <form className="form" onSubmit={handleSubmit}>
          <h2>Add a new Task</h2>
          <p>
            <label>
              Name:{" "}
              <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              ></input>
            </label>
          </p>
          <button type="submit">submit</button>
        </form>
      </div>

      <h2>Tasks</h2>
      {showTasks ? (
        <button onClick={() => dispatch(showCompleted())}>Show Pending</button>
      ) : (
        <button onClick={() => dispatch(showCompleted())}>Show All</button>
      )}

      {tasks.map((item) => {
        return (
          <div key={item.id}>
            <p>Task: {item.task}</p>
            <p>Completed: {item.completed ? "Yes" : "No"}</p>
            <button
              value={item.id}
              onClick={(e) => dispatch(deleteTask(item.id))}
            >
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;
