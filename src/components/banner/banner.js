import "./_banner.scss";
import Component from "../../templates/component";
import DateConversion from "../../templates/getTime";
import uploadedData from "../../templates/uploadedData";

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
    console.log(dataValue);

    const bannerImg = new Component("img", "banner__img");
    bannerImg.container.src = `${dataValue.image}`;

    const bannerTag = new Component("span", "banner__tag");
    bannerTag.addContent(`${dataValue.tag}`);

    const bannerTitle = new Component("h2", "banner__title");
    const checkedTitle = dataValue.title.startsWith('FEATURED ARTICLE') ? dataValue.title.split(" ").slice(2).join(" ") : dataValue.title;
    bannerTitle.addContent(`
        <a class="banner__title-link" href="/blog/article/${dataValue.id}">${checkedTitle}</a>
    `);

    const bannerTimeCreation = new Component("span", "banner__creation");
    const bannerFullTime = new DateConversion(dataValue.createdAt, dataValue.readTime);
    bannerTimeCreation.addContent(`
            <p class="banner__creation-author">${dataValue.author}</p>
            <p class="banner__creation-delimiter"></p>
            <p class="banner__creation-date">${bannerFullTime.render()} 
                                            (${bannerFullTime.getReadingTime()} mins read)</p>
        `);

    const bannerDescription = new Component("p", "banner__description");
    bannerDescription.addContent(`${dataValue.description}`);

    const bannerInfo = new Component("div", "banner__info");
    bannerInfo.container.append(
      bannerTag.render(),
      bannerTitle.render(),
      bannerCreation.render(),
      bannerDescription.render()
    );

    this.container.append(bannerImg.render(), bannerInfo.render());
  }

  render() {
    this.inner();
    return this.container;
  }
}

export default Banner;