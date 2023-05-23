function Switch() {
  const botao = document.querySelector("#switch");
  botao.addEventListener("click", Refresh);

  const body = document.getElementsByTagName("body")[0];
  const img = document.getElementById("switch-img");
  const imgLogo = document.getElementById("logo-img");
  const imgFrase = document.getElementById("tips");

  const mode = localStorage.getItem("mode") || "light";
  body.className = mode;

  img.src =
    mode === "light" ? "./library/light_mode.svg" : "./library/dark_mode.svg";
  imgLogo.src =
    mode === "light" ? "./library/logo.svg" : "./library/logo_dark.svg";
  imgFrase.src =
    mode === "light"
      ? "./library/tips_and_updates.svg"
      : "./library/tips_dark.svg";

  botao.style.justifyContent =
    mode === "light"
      ? (botao.style.justifyContent = "left")
      : (botao.style.justifyContent = "flex-end");
}
