const Task = {
  all: Storage.get(),

  add(task) {
    Task.all.push(task);
    //Caio falou para copiar td e deixar na dom
    // Storage.set(all);
    App.reload();
  },
  remove(index) {
    all.splice(index, 1);
    // Storage.set(all);
    App.reload();
  },
};
