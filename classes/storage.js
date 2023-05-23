const Storage = {
  get() {
    return JSON.parse(localStorage.getItem("uTask3.0:fazer")) || [];
  },
  set(tasks) {
    localStorage.setItem("uTask3.0:fazer", JSON.stringify(tasks));
  },
  get2() {
    return JSON.parse(localStorage.getItem("uTask3.0:andamento")) || [];
  },
  set2(tasks) {
    localStorage.setItem("uTask3.0:andamento", JSON.stringify(tasks));
  },
  get3() {
    return JSON.parse(localStorage.getItem("uTask3.0:feito")) || [];
  },
  set3(tasks) {
    localStorage.setItem("uTask3.0:feito", JSON.stringify(tasks));
  },
};
