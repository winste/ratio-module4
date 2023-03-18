import Header from "../components/header/header";
import Banner from "../components/banner/banner";
import Blog from "../components/blog/blog";
import About from "../components/about/about";
import ArticlePage from "../components/article/article";
import Component from "../templates/component";
import PageError from "../components/404/404";
import App from "./router";
import "./preloader/_preloader.scss"


// общий класс для вызова рендера необходимой страницы
class Pages {
  #header = new Header("header", "header container");
  #banner = new Banner("section", "banner container");
  #bannerMove = new Banner("section", "banner banner--move container");
  #blog = new Blog("section", "blog container");
  #about = new About("section", "about container");
  #article = new ArticlePage("section", "article container");
  #error = new PageError("section", "error container");
  #preloader = new Component("div", "preloader container");

  constructor() {
    this.container = document.body;
    this.app = document.createElement("div");
    this.app.id = "app";  // сюда рендерим страницу
    this.container.append(  // в самом начале добавляем хэдэр, не дожидаясь рендера всей страницы
      this.#header.render(),
      this.#preloader.render(),
      this.app
    );
  }

  async renderPage(...components) {
    this.removeTagsSEO();  // удаляем все метатеги, который могли остаться после рендера статьи
    for (const component of components) {
      this.app.append(await component);
      // для мобильной версии: если после перехода по ссылке из меню-бургера в body остался класс для предотвращения скролла, удаляем его
      if (this.container.classList.contains("modal-open")) this.container.className = "";
      this.#preloader.render().remove();  // удалеям прелоадер после загрузки готовых компонентов
    }
    this.linksPushState();
  }

  // для реализации перехода по ссылкам без перезагрузки страницы
  linksPushState() {
    for (const link of document.body.getElementsByTagName("a")) {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        window.history.pushState(null, null, new URL(e.currentTarget.href).pathname);
        new App().start();
      });
    }
  }

  removeTagsSEO() {
    const metaTagsList = ["title", "keywords", "description"];
    for (const metaTagName of metaTagsList) {
      const metaTag = document.querySelector(`meta[name="${metaTagName}"]`);
      if (metaTag) metaTag.remove();
    }
  }

  render(pageName) {
    switch (pageName) {
      case "home":
        this.renderPage(
          this.#banner.render(),
          this.#blog.render(false, 3),
          this.#bannerMove.render(true)
        );
        break;
      case "blog":
        this.renderPage(
          this.#banner.render(), 
          this.#blog.render(true)
        );
        break;
      case "about":
        this.renderPage(
          this.#about.render()
        );
        break;
      case "article":
        this.renderPage(
          this.#article.render()
        );
        break;
      case "error":
        this.renderPage(
          this.#error.render()
        );
        break;
      default:
        break;
    }
  }
}


export default Pages;
