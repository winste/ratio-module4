import Header from "../../src/components/header/header";
import Banner from "../../src/components/banner/banner";
import Blog from "../../src/components/blog/blog";
import About from "../../src/components/about/about";
import ArticlePage from "../../src/components/article/article";
import Component from "../templates/component";
import PageError from "../../src/components/404/404";
import App from "./router";

class Pages {
  #header = new Header("header", "header container");
  #banner = new Banner("section", "banner container");
  #bannerMove = new Banner("section", "banner banner--move container");
  #blog = new Blog("section", "blog container");
  #about = new About("section", "about container");
  #article = new ArticlePage("section", "article container");
  #error = new PageError("section", "error container");
  #preloader = new Component("div", "preloader");

  constructor() {
    this.container = document.body;
  }

  renderPage(...components) {
    for (const component of components) {
      this.container.append(component);
    }
    this.linksPushState()
    this.removePreloader();
  }

  addPreloader() {
    this.container.append(
      this.#preloader.render()
    );
  }

  removePreloader() {
    this.#preloader.render().remove();
  }

  linksPushState() {
    for (let link of document.body.getElementsByTagName("a")) {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        window.history.pushState(null, "", new URL(e.currentTarget.href).pathname);
        new App().start();
      });
    }
  }

  async home() {
    this.addPreloader();
    this.renderPage(
      await this.#header.render(),
      await this.#banner.render(),
      await this.#blog.render(3),
      await this.#bannerMove.render(true)
    );
  }

  async blog() {
    this.addPreloader();
    this.renderPage(
      await this.#header.render(),
      await this.#banner.render(),
      await this.#blog.render()
    );
  }

  async about() {
    this.addPreloader();
    this.renderPage(
      await this.#header.render(), 
      await this.#about.render()
    );
  }

  async article() {
    this.addPreloader();
    this.renderPage(
      await this.#header.render(), 
      await this.#article.render()
    );
  }

  async error() {
    this.addPreloader();
    this.renderPage(
      await this.#header.render(), 
      await this.#error.render()
    );
  }

  async render() {
    return this.container;
  }
}

export default Pages;


