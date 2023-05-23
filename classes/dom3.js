const DOM3 = {
  tasksFeito: document.querySelector("#feito"),

  addTask(task, index) {
    const tr = document.createElement("tr");
    tr.innerHTML = DOM3.innerHTMLTask(task, index);
    tr.dataset.index = index;

    DOM3.tasksFeito.appendChild(tr);
  },

  innerHTMLTask(task, index) {
    const html = ` 
    <div class="atividades">
      <div class="atividades-tarefa">
      <h4>${task.title}</h4>
      <button onclick="DOM3.openDelete(${(task, index)})">
      <img width="20px" src="./library/more_vert.svg" />
    </button>
      </div>
      <div class="atividades-descrição">
        <div class="descrição-vira">
        <button onclick="DOM3.openDescription(${
          (task, index)
        })" id="ler-descrição">
            <div>Ler descrição</div>
            <div div class="icon">
              <svg width="16px" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="color"><path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"/></svg>
            </div>
          </button>
          <div  class="descrição" id="descrição-3-${index}">
          ${task.description}
          </div>
        </div>
        <div class="vira-lado" id="vira-lado-3-${index}">
          <button class="vira-esquerda" onclick="DOM3.previousCard(${
            (task, index)
          })" >
            <img width="20px" src="./library/navigate_before.svg" />
          </button>
          <button class="replay" onclick="DOM3.returnCard(${(task, index)})" >
            <img class="icon-delete" width="20px" src="./library/replay.svg" />
          </button>
        </div>
        <button onclick="DOM3.remove(${index})" class="botão-excluir" id="botão-excluir-3-${index}">
          <div div class="icon-delete">
            <svg width="16px" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="color"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z"/></svg>
          </div>
          <p>Excluir</p>
        </button>
      
       
      </div>
	    `;

    return html;
  },

  generateTasks() {
    if (Storage.get3().length) {
      Storage.get3().forEach(DOM3.addTask);
    }
  },

  openDescription(task, index) {
    if (
      document.querySelector("#descrição-3-" + task).classList ==
      "descrição active"
    ) {
      document.querySelector("#descrição-3-" + task).classList.remove("active");
    } else {
      document.querySelector("#descrição-3-" + task).classList.add("active");
    }
  },

  openDelete(task, index) {
    if (
      document.querySelector("#vira-lado-3-" + task).classList ==
      "vira-lado active"
    ) {
      document.querySelector("#vira-lado-3-" + task).classList.remove("active");
      document
        .querySelector("#botão-excluir-3-" + task)
        .classList.remove("active");
    } else {
      document.querySelector("#vira-lado-3-" + task).classList.add("active");
      document
        .querySelector("#botão-excluir-3-" + task)
        .classList.add("active");
    }
  },

  previousCard(task, index) {
    //task está com o número dela
    var memoria = Storage.get3();
    DOM2.add(memoria[task], task);
    this.remove(task);
    //ver como remover
  },

  returnCard(task, index) {
    //task está com o número dela
    var memoria = Storage.get3();
    DOM.add(memoria[task], task);
    this.remove(task);
    //ver como remover
  },

  add(task) {
    var memoria = Storage.get3();
    memoria.push(task);
    Storage.set3(memoria);
    App.reload();
  },

  remove(index) {
    var memoria = Storage.get3();
    memoria.splice(index, 1);
    Storage.set3(memoria);
    App.reload();
  },

  clearTasks() {
    DOM3.tasksFeito.innerHTML = "";
  },
};
