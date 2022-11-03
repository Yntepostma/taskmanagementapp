export const selectAllTasks = (reduxState) => reduxState.tasks.tasks;

export const selectTasks = (reduxState) => {
  const showCompleted = reduxState.tasks.showCompletedTasks;
  const tasks = reduxState.tasks.tasks;
  const showTasks = !showCompleted
    ? tasks.filter((item) => item.completed !== true)
    : tasks;
  return showTasks;
};

export const selectMaxTasks = (reduxState) => reduxState.tasks.maxTasks;
export const selectCompletedTasks = (reduxState) =>
  reduxState.tasks.showCompletedTasks;
