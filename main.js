import "./style.scss";
import Page from "./src/templates/page";
import Header from "./src/components/header/header";
import Banner from "./src/components/banner/banner";
import Catalog from "./src/components/catalog/catalog";
import About from "./src/components/about/about";


const header = new Header("header", "header container");
const banner = new Banner("section", "banner container");
const bannerMove = new Banner("section", "banner banner--move container");
const catalog = new Catalog("section", "catalog container");
catalog.createTitle("Editor’s Picks", "catalog__title");
const about = new About("section", "about  container");



async function routing() {
  let page = undefined;

  switch (window.location.pathname) {

    case "/":
      page = new Page(
        await header.render(),
        await banner.render(),
        await catalog.render(3),
        await bannerMove.render()
      );
      break;

    case "/blog":
      page = new Page(
        await header.render(),
        await banner.render(),
        await catalog.render()
      );
      break;

    case "/about":
      page = new Page(
        await header.render(),
        await about.render()
      );
      break;

    default:
      break;
  }

  document.body.append(page.render());
}

routing();