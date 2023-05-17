const Storage = {
  get() {
    return JSON.parse(localStorage.getItem("uTask3.0:tasks")) || [];
  },
  set(tasks) {
    localStorage.setItem("uTask3.0:tasks", JSON.stringify(tasks));
  },
};
