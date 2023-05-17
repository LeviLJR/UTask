const DOM3 = {
  tasksFeito: document.querySelector("#feito"),

  addFeito(task, index) {
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
          <button class="vira-esquerda">
            <img width="16px" src="./library/navigate_before.svg" />
          </button>
          <button class="replay">
            <img width="16px" src="./library/replay.svg" />
          </button>
        </div>
      
       
      </div>
	    `;

    return html;
  },

  clearTasks() {
    DOM3.tasksFeito.innerHTML = "";
  },
};
