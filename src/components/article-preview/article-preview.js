import Component from "../../templates/component";
import Creation from "../creation/creationInfo";
import "./_article-preview.scss";


class ArticlePreview extends Component {
  #data;
  constructor(tagName, className, data) {
    super(tagName, className);
    this.#data = data;
  }

  createTag() {
    const articleTag = new Component("p", "article-preview__tag");
    articleTag.addContent(this.#data.tag);
    return articleTag.render();
  }

  createTitle() {
    const articleTitle = new Component("h3", "article-preview__title");
    const titleLink = new Component("a", "article-preview__title-link");
    const checkedTitle = this.#data.title.startsWith("FEATURED ARTICLE")
      ? this.#data.title.split(" ").slice(2).join(" ")
      : this.#data.title;
    titleLink.addContent(checkedTitle);
    titleLink.container.href = `/blog/article/${this.#data.id}`;
    articleTitle.container.append(titleLink.render());
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
    const articleDescription = new Component(
      "p",
      "article-preview__description"
    );
    articleDescription.addContent(this.#data.description);
    return articleDescription.render();
  }

  render() {
    this.container.append(
      this.createTag(),
      this.createTitle(),
      this.createTimeCreation(),
      this.createDescription()
    );
    return this.container;
  }
}


export default ArticlePreview;
