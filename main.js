import "./style.scss";
import App from "./src/router/router";

const app = new App();
app.start();


window.addEventListener('popstate', () => {
  document.getElementById("app").innerHTML = ""
  app.start();
})