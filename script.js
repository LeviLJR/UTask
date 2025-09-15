const App = {
  init() {
    Switch();
    toDoTasks.generateTasks();
    progressTasks.generateTasks();
    doneTasks.generateTasks();
  },

  reload() {
    toDoTasks.clearTasks();
    progressTasks.clearTasks();
    doneTasks.clearTasks();
    App.init();
  },
};

App.init();
