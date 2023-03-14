import Component from "../../templates/component";
import ArticlePreview from "../article-preview/article-preview";
import uploadedData from "../../utils/uploadedData";
import "./_banner.scss";


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
    bannerImg.addSrc(`${this.#data.image}`);
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

  async render(move) {
    await this.getData();

    const wrapper = new Component("div", "banner__wrapper");
    if (move) wrapper.container.classList.add("banner__wrapper--move");
    wrapper.addComponents(this.addImg(),this.createArtice());
    
    this.container.append(
      wrapper.render()
      );

    return this.container;
  }
}


export default Banner;