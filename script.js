const App = {
  init() {
    Switch();
    DOM.generateTasks();
    DOM2.generateTasks();
    DOM3.generateTasks();
  },

  reload() {
    DOM.clearTasks();
    DOM2.clearTasks();
    DOM3.clearTasks();
    App.init();
  },
};

App.init();
