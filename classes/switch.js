function Switch() {
  localStorage.setItem("mode", "light");

  const botao = document.querySelector("#switch");
  botao.addEventListener("click", Refresh);

  const body = document.getElementsByTagName("body")[0];
  const img = document.getElementById("switch-img");
  const imgLogo = document.getElementById("logo-img");
  const imgFrase = document.getElementById("tips");

  const mode = localStorage.getItem("mode");
  body.className = mode;

  img.src =
    mode === "dark" ? "./library/dark_mode.svg" : "./library/light_mode.svg";
  imgLogo.src =
    mode === "dark" ? "./library/logo_dark.svg" : "./library/logo.svg";
  imgFrase.src =
    mode === "dark"
      ? "./library/tips_dark.svg"
      : "./library/tips_and_updates.svg";

  botao.style.justifyContent =
    mode === "light"
      ? (botao.style.justifyContent = "left")
      : (botao.style.justifyContent = "flex-end");
}
