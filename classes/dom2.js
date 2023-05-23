const DOM2 = {
  tasksAndamento: document.querySelector("#andamento"),

  addTask(task, index) {
    const tr = document.createElement("tr");
    tr.innerHTML = DOM2.innerHTMLTask(task, index);
    tr.dataset.index = index;

    DOM2.tasksAndamento.appendChild(tr);
  },

  innerHTMLTask(task, index) {
    const html = ` 
    <div class="atividades">
      <div class="atividades-tarefa">
      <h4>${task.title}</h4>
      <button onclick="DOM2.openDelete(${(task, index)})">
        <img width="20px" src="./library/more_vert.svg" />
      </button>
    </div>
      <div class="atividades-descrição">
        <div class="descrição-vira">
          <button onclick="DOM2.openDescription(${
            (task, index)
          })" id="ler-descrição">
            <div>Ler descrição</div>
            <div div class="icon">
              <svg width="16px" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="color"><path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"/></svg>
            </div>
          </button>
          <div  class="descrição" id="descrição-2-${index}">
          ${task.description}
          </div>
        </div>
        <div class="vira-lado" id="vira-lado-2-${index}">
        <button onclick="DOM2.previousCard(${
          (task, index)
        })" class="vira-esquerda">
            <img class="icon-delete" width="20px" src="./library/navigate_before.svg" />
          </button>
          <button onclick="DOM2.nextCard(${
            (task, index)
          })"  class="vira-direita">
            <img width="20px" src="./library/expand_next.svg" />
          </button>
        </div>
        <button onclick="DOM2.remove(${index})" class="botão-excluir" id="botão-excluir-2-${index}">
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
    if (Storage.get2().length) {
      Storage.get2().forEach(DOM2.addTask);
    }
  },

  openDescription(task, index) {
    if (
      document.querySelector("#descrição-2-" + task).classList ==
      "descrição active"
    ) {
      document.querySelector("#descrição-2-" + task).classList.remove("active");
    } else {
      document.querySelector("#descrição-2-" + task).classList.add("active");
    }
  },

  openDelete(task, index) {
    if (
      document.querySelector("#vira-lado-2-" + task).classList ==
      "vira-lado active"
    ) {
      document.querySelector("#vira-lado-2-" + task).classList.remove("active");
      document
        .querySelector("#botão-excluir-2-" + task)
        .classList.remove("active");
    } else {
      document.querySelector("#vira-lado-2-" + task).classList.add("active");
      document
        .querySelector("#botão-excluir-2-" + task)
        .classList.add("active");
    }
  },

  nextCard(task, index) {
    //task está com o número dela
    var memoria = Storage.get2();
    DOM3.add(memoria[task]);
    this.remove(task);
  },

  previousCard(task, index) {
    //task está com o número dela
    var memoria = Storage.get2();
    DOM.add(memoria[task], task);

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
    DOM2.tasksAndamento.innerHTML = "";
  },
};
