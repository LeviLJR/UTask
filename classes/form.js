const Form = {
  title: document.querySelector("input#title"),
  description: document.querySelector("textarea#description"),

  getValues() {
    return {
      title: Form.title.value,
      description: Form.description.value,
    };
  },

  validateFields() {
    const { title, description } = Form.getValues();

    if (title.trim() === "" || description.trim() === "") {
      throw new Error("Por favor, preencha todos os campos");
    }
  },

  formatValues() {
    let { title, description } = Form.getValues();

    return {
      title,
      description,
    };
  },

  clearFields() {
    Form.title.value = "";
    Form.description.value = "";
  },

  submit(event) {
    event.preventDefault();

    try {
      Form.validateFields();
      // formatar os dados para salvar
      const task = Form.formatValues();
      // Form.formatData()
      // salvar

      DOM.add(task);
      // apagar os dados do formulário
      Form.clearFields();
      // modal feche
      Modal.close();
    } catch (error) {
      alert(error.message);
    }
  },
};
