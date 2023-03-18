import "./style.scss";
import App from "../src/router/router";

const app = new App();
app.start();

// слушатель для перехода по стрелкам вперед/назад
window.addEventListener('popstate', () => {
  app.start();
})