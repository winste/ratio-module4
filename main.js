import "./style.scss";
import App from "./src/router/router";

const app = new App();
app.start();



window.addEventListener('popstate', () => {
  // router(event.target.location.pathname);
  // console.log(e.target.location.pathname);
  // location.reload();
  document.getElementById("app").innerHTML = ""
  window.history.replaceState(null, document.title, location.pathname);

})



// window.onpopstate(() => app.start())



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