import "./style.scss";
import "./src/router/router";

document.addEventListener("click", (e) => {
  const burger = document.getElementById("burger");
  const navigation = document.getElementById("nav");

  if (
    e.target != burger &&
    e.target != navigation &&
    navigation.classList.contains("open")
  ) {
    navigation.classList.remove("open");
  }
});
