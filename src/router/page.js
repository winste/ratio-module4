import Header from "../../src/components/header/header";
import Banner from "../../src/components/banner/banner";
import Blog from "../../src/components/blog/blog";
import About from "../../src/components/about/about";
import ArticlePage from "../../src/components/article/article";
import PageError from "../../src/components/404/404";


class Pages {
  #header = new Header("header", "header container");
  #banner = new Banner("section", "banner container");
  #bannerMove = new Banner("section", "banner banner--move container");
  #blog = new Blog("section", "blog container");
  #about = new About("section", "about container");
  #article = new ArticlePage("section", "article container");
  #error = new PageError("section", "error container");

  constructor() {
    this.container = document.createElement("div");
    this.container.id = "app";
  }

  async home() {
    this.container.append(
      await this.#header.render(),
      await this.#banner.render(),
      await this.#blog.render(3),
      await this.#bannerMove.render(true)
    );
  }

  async blog() {
    this.container.append(
      await this.#header.render(),
      await this.#banner.render(),
      await this.#blog.render()
    );
  }

  async about() {
    this.container.append(
      await this.#header.render(),
      await this.#about.render()
    );
  }

  async article() {
    this.container.append(
      await this.#header.render(),
      await this.#article.render()
    );
  }

  async error() {
    this.container.append(
      await this.#header.render(),
      await this.#error.render()
    );
  }

  async render() {
    document.body.append(this.container);
    document.getElementById("spinner").style.display = "none";
  }
}


export default Pages;