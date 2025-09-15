const progressTasks = {
  tasksInProgress: document.querySelector("#progressTasks"),

  addTask(task, index) {
    const tr = document.createElement("tr");
    tr.innerHTML = progressTasks.innerHTMLTask(task, index);
    tr.dataset.index = index;

    progressTasks.tasksInProgress.appendChild(tr);
  },

  innerHTMLTask(task, index) {
    const html = ` 
    <div class="activities">
      <div class="activities-task">
      <h4>${task.title}</h4>
      <button onclick="progressTasks.openDelete(${(task, index)})">
        <img width="20px" src="./library/more_vert.svg" />
      </button>
    </div>
      <div class="activities-description">
        <div class="description-flip">
          <button onclick="progressTasks.openDescription(${
            (task, index)
          })" id="read-description">
            <div>See details</div>
            <div div class="icon">
              <svg width="16px" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="color"><path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"/></svg>
            </div>
          </button>
          <div  class="description" id="description-2-${index}">
          ${task.description}
          </div>
        </div>
        <div class="arrow-flip" id="arrow-flip-2-${index}">
        <button onclick="progressTasks.previousCard(${
          (task, index)
        })" class="arrow-left">
            <img class="icon-delete" width="20px" src="./library/navigate_before.svg" />
          </button>
          <button onclick="progressTasks.nextCard(${
            (task, index)
          })"  class="arrow-right">
            <img width="20px" src="./library/expand_next.svg" />
          </button>
        </div>
        <button onclick="progressTasks.remove(${index})" class="delete-button" id="delete-button-2-${index}">
          <div div class="icon-delete">
            <svg width="16px" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="color"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z"/></svg>
          </div>
          <p>Delete</p>
        </button>
      
       
      </div>
	    `;

    return html;
  },

  generateTasks() {
    if (Storage.get2().length) {
      Storage.get2().forEach(progressTasks.addTask);
    }
  },

  openDescription(task, index) {
    if (
      document.querySelector("#description-2-" + task).classList ==
      "description active"
    ) {
      document.querySelector("#description-2-" + task).classList.remove("active");
    } else {
      document.querySelector("#description-2-" + task).classList.add("active");
    }
  },

  openDelete(task, index) {
    if (
      document.querySelector("#arrow-flip-2-" + task).classList ==
      "arrow-flip active"
    ) {
      document.querySelector("#arrow-flip-2-" + task).classList.remove("active");
      document
        .querySelector("#delete-button-2-" + task)
        .classList.remove("active");
    } else {
      document.querySelector("#arrow-flip-2-" + task).classList.add("active");
      document
        .querySelector("#delete-button-2-" + task)
        .classList.add("active");
    }
  },

  nextCard(task, index) {
    //task está com o número dela
    var memoria = Storage.get2();
    doneTasks.add(memoria[task]);
    this.remove(task);
  },

  previousCard(task, index) {
    //task está com o número dela
    var memoria = Storage.get2();
    toDoTasks.add(memoria[task], task);

    this.remove(task);
    //ver como remover
  },

  add(task) {
    var memoria = Storage.get2();
    memoria.push(task);
    Storage.set2(memoria);
    App.reload();
  },

  remove(index) {
    var memoria = Storage.get2();
    memoria.splice(index, 1);
    Storage.set2(memoria);
    App.reload();
  },

  clearTasks() {
    progressTasks.tasksInProgress.innerHTML = "";
  },
};
