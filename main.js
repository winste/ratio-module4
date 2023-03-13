import "./style.scss";
import App from "./src/router/router";

const app = new App();
app.start();



window.addEventListener('popstate', () => {
  document.getElementById("app").innerHTML = ""
  app.start();
})



// document.addEventListener("click", (e) => {
//   const burger = document.getElementById("burger");
//   const navigation = document.getElementById("nav");

//   if (
//     e.target != burger &&
//     e.target != navigation &&
//     navigation.classList.contains("open")
//   ) {
//     navigation.classList.remove("open");
//   }
// });