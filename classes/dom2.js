const DOM2 = {
  tasksAndamento: document.querySelector("#andamento"),

  addAndamento(task, index) {
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
          <button onclick="DOM2.previousCard(${
            (task, index)
          })" class="vira-esquerda">
            <img width="16px" src="./library/navigate_before.svg" />
          </button>
          <button onclick="DOM2.nextCard(${
            (task, index)
          })"  class="vira-direita">
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
    DOM3.addFeito(memoria[task], task);
    // memoria.splice(task, 1);
    // Storage.set(memoria);
    //ver como remover
  },

  previousCard(task, index) {
    //task está com o número dela
    var memoria = Storage.get();
    DOM.addTask(memoria[task], task);
    //ver como remover
  },

  clearTasks() {
    DOM2.tasksAndamento.innerHTML = "";
  },
};
