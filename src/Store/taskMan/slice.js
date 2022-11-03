import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  maxTasks: 20,
  tasks: [
    { id: 1, task: "Pick up new glasses", completed: true },
    { id: 2, task: "Buy airco", completed: false },
    { id: 3, task: "Take packages to return", completed: false },
    { id: 4, task: "Order dog food", completed: true },
  ],
  showCompletedTasks: true,
};

export const taskManSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      console.log(action.payload);
      const newTask = action.payload;
      state.tasks = [...state.tasks, newTask];
    },
    deleteTask: (state, action) => {
      const id = action.payload;
      const newArray = state.tasks.filter((item) => {
        return item.id !== id;
      });
      state.tasks = newArray;
    },
    showCompleted: (state, action) => {
      state.showCompletedTasks = !state.showCompletedTasks;
    },
    setMaxTasks: (state, action) => {
      state.maxTasks = action.payload;
    },
  },
});

export const { addTask, deleteTask, showCompleted, setMaxTasks } =
  taskManSlice.actions;

export default taskManSlice.reducer;
