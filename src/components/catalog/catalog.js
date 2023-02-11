import Article from "../../templates/article";
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

  async createArticleBlock() {
    const articlesData = await this.getData();

    for (const articles of articlesData) {
      const wrapper = new Component("div", "catalog__article");
      this.container.append(wrapper.render());

      const bannerImg = new Component("img", "article__img");
      bannerImg.container.src = `${articles.image}`;

      const article = new Article("div", "catalog__info article", articles);
      wrapper.container.append(bannerImg.render(), article.render());
      this.container.append(wrapper.render());
    }
  }

  async render() {
    await this.createArticleBlock();
    return this.container;
  }
}


export default Catalog;
