import Component from "../../templates/component";
import Creation from "../creation/creationInfo";
import "./_article-preview.scss";


class ArticlePreview extends Component {
  #data;
  constructor(tagName, className, data) {
    super(tagName, className);
    this.#data = data;
  }

  addImage() {
    const articleImgLink = new Component("a", "article-preview__img-link");
    const articleImg = new Component("img", "article-preview__img");
    articleImg.addSrc(`${this.#data.images || "../ratio-module4/images/plug.jpg"}`);
    articleImgLink.addHref(`/blog/article/${this.#data.id}`);
    articleImgLink.addComponents(articleImg.render());
    return articleImgLink.render();
  }

  createTag() {
    const articleTag = new Component("p", "article-preview__tag");
    articleTag.addContent(this.#data.tag);
    return articleTag.render();
  }

  createTitle() {
    const articleTitle = new Component("h3", "article-preview__title");
    const titleLink = new Component("a", "article-preview__title-link");
    const checkedTitle = this.#data.title.startsWith("FEATURED ARTICLE")  // проверка на опечатку в названии статьи
      ? this.#data.title.split(" ").slice(2).join(" ")
      : this.#data.title;
    titleLink.addContent(checkedTitle);
    titleLink.addHref(`/blog/article/${this.#data.id}`);
    articleTitle.addComponents(titleLink.render());
    return articleTitle.render();
  }

  createTimeCreation() {
    const articleTimeCreation = new Creation(
      "span",
      "article-preview__creation",
      this.#data.author,
      this.#data.createdAt,
      this.#data.readTime
    );
    return articleTimeCreation.render();
  }

  createDescription() {
    const articleDescription = new Component("p", "article-preview__description");
    articleDescription.addContent(this.#data.description);
    return articleDescription.render();
  }

  render() {
    const previewContent = new Component("div", "article-preview__content");
    previewContent.addComponents(
      this.createTag(),
      this.createTitle(),
      this.createTimeCreation(),
      this.createDescription()
    );

    this.container.append(
      this.addImage(),
      previewContent.render()
    );
    return this.container;
  }
}


export default ArticlePreview;
