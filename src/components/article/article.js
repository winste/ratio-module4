import "./_article.scss";
import Component from "../../templates/component";
import uploadedData from "../../utils/uploadedData";
import Creation from "../creation/creationInfo";
import Author from "../author/author";
import Pagination from "../pagination/pagination";

class ArticlePage extends Component {
  #data;

  constructor(tagName, className) {
    super(tagName, className);
    this.url = window.location.pathname;
  }

  async getData() {
    const regex = /\d+$/;
    const articleNumber = this.url.match(regex);
    this.#data = await uploadedData(`blog/article/${articleNumber[0]}`);
    console.log(this.#data);
  }

  addImage() {
    const articleImg = new Component("img", "article__img");
    articleImg.container.src = `${this.#data.images || "/images/plug.jpg"}`;
    return articleImg.render();
  }

  createTitle() {
    const title = new Component("h2", "article__title");
    title.addContent(this.#data.title);
    return title.render();
  }

  createTimeCreation() {
    const articleTimeCreation = new Creation(
      "span",
      "article__creation",
      this.#data.author.name,
      this.#data.createdAt,
      this.#data.readTime
    );
    return articleTimeCreation.render();
  }

  createDescription() {
    const articleDescription = new Component("p", "article__description");
    articleDescription.addContent(this.#data.description);
    return articleDescription.render();
  }

  createAboutAuthor() {
    const authorBlock = new Component("div", "author");
    const title = new Component("p", "author__title");
    const author = new Author("div", "author__card", this.#data.author);
    title.addContent("ABOUT THE AUTHOR");
    authorBlock.container.append(title.render(), author.render());

    return authorBlock.render();
  }

  createPagination() {
    const buttons = new Pagination(
      "div",
      "pagination",
      this.#data.prevId,
      this.#data.nextId
    );
    return buttons.render();
  }

  async render() {
    await this.getData();
    const wrapper = new Component("div", "article__container");
    wrapper.container.append(
      await this.createTitle(),
      await this.createTimeCreation(),
      await this.createDescription(),
      await this.createAboutAuthor()
    );

    this.container.append(
      await this.addImage(),
      wrapper.render(),
      await this.createPagination()
    );
    return this.container;
  }
}

export default ArticlePage;
