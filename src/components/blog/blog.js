import ArticlePreview from "../article-preview/article-preview";
import Component from "../../templates/component";
import uploadedData from "../../utils/uploadedData";
import "./_blog.scss";

class Blog extends Component {
  #data;
  constructor(tagName, className) {
    super(tagName, className);
    this.collectionArticles = new Component("div", "blog__articles");
  }

  async getData() {
    this.#data = await uploadedData("blog/articles/");
  }

  createTitle() {
    const title = new Component("h2", "blog__title");
    title.addContent("Editor’s Picks");
    return title.render();
  }

  async addArticles(number) {
    this.#data = this.#data.slice(0, number);

    for (const articles of this.#data) {
      const article = new ArticlePreview("div", "blog__article article-preview", articles);
      this.collectionArticles.addComponents(article.render());
    }
    
    return this.collectionArticles.render();
  }

  infiniteRenderArticles() {
    window.addEventListener("scroll" || "touchmove", () => {
      if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        this.addArticles();
     }
    });
  }

  async render(renderCheck, limit) {
    await this.getData();
    this.container.append(
      this.createTitle(), 
      await this.addArticles(limit)
    );
    if (renderCheck) this.infiniteRenderArticles()
    return this.container;
  }
}

export default Blog;
