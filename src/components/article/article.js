import Component from "../../templates/component";
import uploadedData from "../../utils/uploadedData";
import Creation from "../creation/creationInfo";
import Author from "../author/author";
import Pagination from "../pagination/pagination";
import PageError from "../404/404";
import "./_article.scss";


class ArticlePage extends Component {
  #data;  // для записи данных с API
  constructor(tagName, className) {
    super(tagName, className);
    this.url = window.location.pathname;
  }

  async getData() {
    const articleNumber = this.url.match(/\d+$/);  // получаем id статьи с url страницы
    if (articleNumber === null) return this.#data = undefined; // если статьи с таким id нет, то присваиваем данным значения undefined
    this.#data = await uploadedData(`blog/article/${articleNumber[0]}`);
  }

  addTagsSEO() {
    const head = document.getElementsByTagName('head')[0];
    const tags = this.#data.seo;
    head.insertAdjacentHTML("beforeend",
        `<meta name="title" content="${tags.title}" >
        <meta name="keywords" content="${tags.keywords}"> 
        <meta name="description" content="${tags.description}">`)
  }

  addImage() {
    const imageWrap = new Component("div", "article__img-wrapper")
    const articleImg = new Component("img", "article__img");
    articleImg.addSrc(`${this.#data.images || "/ratio-module4/images/plug.jpg"}`);
    imageWrap.addComponents(articleImg.render());
    return imageWrap.render();
  }

  createTitle() {
    const title = new Component("h3", "article__title");
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

  createTag() {
    const tag = new Component("span", "article__tag");
    tag.addContent(`#${this.#data.tag.name}`);
    return tag.render()
  }

  createDescription() {
    const articleDescription = new Component("p", "article__description");
    articleDescription.addContent(this.#data.description);
    return articleDescription.render();
  }

  createAboutAuthor() {
    const authorBlock = new Component("div", "article__author author");
    const title = new Component("p", "author__title");
    const author = new Author("div", "author__card", this.#data.author);
    title.addContent("about the author");
    authorBlock.addComponents(title.render(), author.render());
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
    if (this.#data) {  // если данные пришли
      this.addTagsSEO(); 
      
      const head = new Component("div", "article__head");
      head.addComponents(
        await this.createTitle(),
        await this.createTimeCreation(),
        await this.createTag(),
      )

      const wrapper = new Component("div", "article__container");
      wrapper.addComponents(
        head.render(),
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
    else {
      const error = new PageError("section", "error")
      return error.render();
    }

  }
}


export default ArticlePage;
