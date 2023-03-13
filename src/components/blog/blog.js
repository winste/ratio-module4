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
    this.collectionArticles = new Component("div", "blog__articles");
  }

  createTitle() {
    const title = new Component("h2", "blog__title");
    title.addContent("Editor’s Picks");
    return title.render();
  }

  async addArticles(number) {
    this.#data = this.#data.slice(0, number);

    for (const articles of this.#data) {
      const articleWrapper = new Component("div", "blog__article");
      const article = new ArticlePreview("div", "blog__info article-preview", articles);
      articleWrapper.container.append(article.render());
      this.collectionArticles.container.append(articleWrapper.render());
    }
    return this.collectionArticles.render();
  }

  infiniteRenderArticles() {
    window.addEventListener("scroll", () => {
      const windowHeight = document.documentElement.clientHeight;
      const lastArticle = document.querySelector(".blog__articles").lastChild;
      const lastArticlePosition = lastArticle.getBoundingClientRect().top + scrollY;
      const lastArticleHeight = lastArticle.offsetHeight;

      if (scrollY > lastArticlePosition + lastArticleHeight - windowHeight) {
        this.addArticles();
      }
    });
  }

  async render(renderCheck, limit) {
    await this.getData();
    this.container.append(this.createTitle(), await this.addArticles(limit));
    if (renderCheck) this.infiniteRenderArticles()
    return this.container;
  }
}

export default Blog;
