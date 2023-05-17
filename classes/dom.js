const DOM = {
  tasksContainer: document.querySelector("#fazer"),

  addTask(task, index) {
    const tr = document.createElement("tr");
    tr.innerHTML = DOM.innerHTMLTask(task, index);
    tr.dataset.index = index;

    DOM.tasksContainer.appendChild(tr);
  },

  // removeTask(task, index) {
  //   var memoria = Storage.get();
  //   memoria.splice(index, 1);

  //   Storage.set
  // },

  innerHTMLTask(task, index) {
    const html = ` 
    <div class="atividades">
      <div class="atividades-tarefa">
      <h4>${task.title}</h4>
        <button>
          <img width="16px" src="./library/more_vert.svg" />
        </button>
      </div>
      <div class="atividades-descrição">
        <div class="descrição-vira">
          <button id="ler-descrição">
            <div>Ler descrição</div>
            <img width="12px" src="./library/expand_more.svg" />
          </button>
          <div id="descrição">
          ${task.description}
          </div>
        </div>
        <div class="vira-lado">
          <button onclick="DOM.nextCard(${(task, index)})" class="vira-direita">
            <img width="16px" src="./library/expand_next.svg" />
          </button>
        </div>
      
       
      </div>
	    `;

    return html;
  },

  nextCard(task, index) {
    //task está com o número dela
    var memoria = Storage.get();
    DOM2.addAndamento(memoria[task], task);
    this.clearTasks();

    memoria.splice(task, 1);
    Storage.set(memoria);
    //ver como remover
  },

  generateTasks() {
    if (Task.all.length) {
      Task.all.forEach(DOM.addTask);
    }
  },

  clearTasks() {
    DOM.tasksContainer.innerHTML = "";
  },
};
