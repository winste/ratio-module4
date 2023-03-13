import Header from "../../src/components/header/header";
import Banner from "../../src/components/banner/banner";
import Blog from "../../src/components/blog/blog";
import About from "../../src/components/about/about";
import ArticlePage from "../../src/components/article/article";
import Component from "../templates/component";
import PageError from "../../src/components/404/404";
import App from "./router";
import "./preloader/_preloader.scss"

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
    this.app.id = "app";
    this.container.append(
      this.#header.render(),
      this.#preloader.render(),
      this.app
    );
  }

  async renderPage(...components) {
    for (const component of components) {
      this.app.append(await component);
    }
    this.linksPushState();
    this.#preloader.render().remove();
  }

  linksPushState() {
    for (const link of document.body.getElementsByTagName("a")) {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        window.history.pushState(null, null, new URL(e.currentTarget.href).pathname);
        new App().start();
      });
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
