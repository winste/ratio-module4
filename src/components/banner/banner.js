import "./_banner.scss";
import Component from "../../templates/component";
import ArticlePreview from "../article-preview/article-preview";
import uploadedData from "../../utils/uploadedData";

class Banner extends Component {
  #data;
  constructor(tagName, className) {
    super(tagName, className);
  }

  async getData() {
    this.#data = await uploadedData("blog/featured/");
  }

  addImg() {
    const bannerImg = new Component("img", "banner__img");
    bannerImg.container.src = `${this.#data.image}`;
    return bannerImg.render();
  }

  createArtice() {
    const articlePreview = new ArticlePreview(
      "div",
      "banner__info article-preview article-preview--view",
      this.#data
    );
    return articlePreview.render();
  }

  async render() {
    await this.getData();
    this.container.append(this.addImg(), this.createArtice());
    return this.container;
  }
}

export default Banner;