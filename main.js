import "./style.scss";
import Page from "./src/templates/page";
import Header from "./src/components/header/header";
import Banner from "./src/components/banner/banner";
import Catalog from "./src/components/catalog/catalog";
import About from "./src/components/about/about";
import ArticlePage from "./src/components/article/article";


const header = new Header("header", "header container");
const banner = new Banner("section", "banner container");
const bannerMove = new Banner("section", "banner banner--move container");
const catalog = new Catalog("section", "catalog container");
catalog.createTitle("Editor’s Picks", "catalog__title");
const about = new About("section", "about  container");
const article = new ArticlePage("section", "article__wrapper container")


async function route() {
  const path = window.location.pathname;
  let page = undefined;

  if (path == "/") {
    page = new Page(
      await header.render(),
      await banner.render(),
      await catalog.render(3),
      await bannerMove.render()
    )
  } else if (path == "/blog") {
    page = new Page(
      await header.render(),
      await banner.render(),
      await catalog.render()
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
      `<h1>"404"</h1>`)
  }

  document.body.append(page.render());
}


route()