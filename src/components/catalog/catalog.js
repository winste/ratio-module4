import ArticlePreview from "../../templates/article-preview";
import Component from "../../templates/component";
import uploadedData from "../../utils/uploadedData";
import "./_catalog.scss";


class Catalog extends Component {
  constructor(tagName, className) {
    super(tagName, className);
  }

  async getData() {
    const arcticleData = await uploadedData("blog/articles/");
    return arcticleData;
  }

  async createArticleBlock(limit) {
    let articlesData = await this.getData();

    if (limit) articlesData = articlesData.slice(0, limit)

    for (const articles of articlesData) {
      const wrapper = new Component("div", "catalog__article");
      this.container.append(wrapper.render());

      const articleImgLink = new Component("a", "article-preview__img-link");
      const articleImg = new Component("img", "article-preview__img");
      articleImgLink.container.href = `/blog/article/${articles.id}`;
      articleImg.container.src = `${articles.images || "/images/plug.jpg"}`;
      articleImgLink.container.append(articleImg.render());

      const article = new ArticlePreview("div", "catalog__info article-preview", articles);
      wrapper.container.append(articleImgLink.render(), article.render());
      this.container.append(wrapper.render());
    }
  }

  async render(limit) {
    await this.createArticleBlock(limit);
    return this.container;
  }
}


export default Catalog;
