const App = {
  init() {
    Switch();

    if (Task.all.length) {
      Task.all.forEach(DOM.addTask);
    }
    Storage.set(Task.all);
  },

  reload() {
    DOM.clearTasks();
    App.init();
  },
};

App.init();
