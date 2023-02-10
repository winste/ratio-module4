import "./_banner.scss";
import Component from "../../templates/component";
import uploadedData from "../../templates/uploadedData";
import Article from "../../templates/articlePreview";

class Banner extends Component {

  constructor(tagName, className) {
    super(tagName, className);
  }

  async getData() {
    const featuredData = await uploadedData("blog/featured/");
    return featuredData;
  }

  async inner() {
    const dataValue = await this.getData();
    
    const bannerImg = new Component("img", "banner__img");
    bannerImg.container.src = `${dataValue.image}`;
    this.container.append(bannerImg.render())

    const articlePreview = new Article("div", "banner__info", dataValue);
    return articlePreview.render();
  }

  async render() {
    const innerContent = await this.inner();
    this.container.append(innerContent)
    return this.container
  }
}


export default Banner;