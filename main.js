import "./style.scss";
import Page from "./src/templates/page";
import Header from "./src/components/header/header";
import Banner from "./src/components/banner/banner";
import Blog from "./src/components/blog/blog";
import About from "./src/components/about/about";
import ArticlePage from "./src/components/article/article";
import PageError from "./src/components/404/404";


const header = new Header("header", "header container");
const banner = new Banner("section", "banner container");
const bannerMove = new Banner("section", "banner banner--move container");
const blog = new Blog("section", "blog container");
const about = new About("section", "about container");
const article = new ArticlePage("section", "article container");
const error = new PageError("section", "error container");


async function route() {
  const path = window.location.pathname;
  let page = undefined;

  if (path == "/") {
    page = new Page(
      await header.render(),
      await banner.render(),
      await blog.render(3),
      await bannerMove.render(true)
    )
  } else if (path == "/blog") {
    page = new Page(
      await header.render(),
      await banner.render(),
      await blog.render()
    )
  } else if (path == "/about") {
    page = new Page(
      await header.render(),
      await about.render()
    )
  } else if (path.match(/\d+$/)) {
    page = new Page(
      await header.render(),
      await article.render()
      
    )
  } else {
    page = new Page(
      await header.render(),
      await error.render()
    )
  }
  document.getElementById("spinner").style.display = 'none';
  document.body.append(page.render());
  burger()
}

route();


function burger() {
  
    const navigationBlock = document.getElementById("nav");
    const burger = document.getElementById("burger");

    burger.addEventListener("click", (e) => {
      // e.preventDefault();
      navigationBlock.classList.toggle("open");
    })

    document.addEventListener("click", (e) => {
    if (navigationBlock.classList.contains("open") && e.target != navigationBlock) {
      console.log("ok");
      // navigationBlock.classList.remove("open");
    }
    })



  
}
