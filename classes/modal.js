const Modal = {
  open() {
    document.querySelector(".modal-overlay").classList.add("active");
  },
  close() {
    document.querySelector(".modal-overlay").classList.remove("active");
  },
  openDescription() {
    if (document.querySelector(".descrição").classList == "active") {
      document.querySelector(".descrição").classList.remove("active");
    } else {
      document.querySelector(".descrição").classList.add("active");
    }
  },
};
