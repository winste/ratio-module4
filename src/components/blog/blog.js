import ArticlePreview from "../article-preview/article-preview";
import Component from "../../templates/component";
import uploadedData from "../../utils/uploadedData";
import "./_blog.scss";


class Blog extends Component {
  #data;
  constructor(tagName, className) {
    super(tagName, className);
  }

  async getData() {
    this.#data = await uploadedData("blog/articles/");
  }

  createTitle() {
    const title = new Component("h2", "blog__title");
    title.addContent("Editor’s Picks");
    return title.render();
  }

  async createArticles(limit) {
    this.#data = this.#data.slice(0, limit);
    const collectionArticles = new Component("div", "blog__articles");

    for (const articles of this.#data) {
      const articleWrapper = new Component("div", "blog__article");
      const article = new ArticlePreview("div", "blog__info article-preview", articles);
      articleWrapper.container.append(article.render());
      collectionArticles.container.append(articleWrapper.render());
    }
    return collectionArticles.render();
  }

  async render(limit) {
    await this.getData();
    this.container.append(
      this.createTitle(), 
      await this.createArticles(limit)
      );
    return this.container;
  }
}


export default Blog;
