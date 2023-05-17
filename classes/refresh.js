const Refresh = () => {
  const body = document.getElementsByTagName("body")[0];
  const img = document.getElementById("switch-img");
  const botao = document.getElementById("switch");
  const imgLogo = document.getElementById("logo-img");
  const imgFrase = document.getElementById("tips");
  const background = document.getElementById("switch");

  if (body.className === "light") {
    body.className = "dark";
    document.body.classList.add("dark-theme");
    img.src = "./library/dark_mode.svg";
    imgLogo.src = "./library/logo_dark.svg";
    imgFrase.src = "./library/tips_dark.svg";
    botao.style.justifyContent = "flex-end";
    background.style.background =
      "linear-gradient(269.72deg, #222222 0.23%, #111111 0.24%, #2E2E2E 99.76%)";
  } else {
    body.className = "light";
    document.body.classList.remove("dark-theme");
    img.src = "./library/light_mode.svg";
    imgLogo.src = "./library/logo.svg";
    botao.style.justifyContent = "left";
    imgFrase.src = "./library/tips_and_updates.svg";
    background.style.background = "var(--yellow2)";
  }
  localStorage.setItem("mode", body.className);
};
