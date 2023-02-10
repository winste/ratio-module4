import Component from "./component";
import DateConversion from "./getTime";

class Article extends Component {
  constructor(tagName, className, data) {
    super(tagName, className);
    this.dataValue = data;
  }

  createTitle() {
    const bannerTitle = new Component("h2", "banner__title");
    const titleLink = new Component("a", "banner__title-link");
    titleLink.container.href = ` "/blog/article/${this.dataValue.id}"> `;
    const checkedTitle = this.dataValue.title.startsWith("FEATURED ARTICLE")
      ? this.dataValue.title.split(" ").slice(2).join(" ")
      : this.dataValue.title;
    titleLink.addContent(checkedTitle);
    bannerTitle.container.append(titleLink.render()); 
    return bannerTitle.render();
  }

  createTimeCreation() {
    const bannerTimeCreation = new Component("span", "banner__creation");
    const bannerFullTime = new DateConversion(
      this.dataValue.createdAt,
      this.dataValue.readTime
    );
    const author = new Component("p", "banner__creation-author");
    author.addContent(this.dataValue.author);
    const delimiter = new Component("p", "banner__creation-delimiter");
    const creationDate = new Component("p", "banner__creation-date");
    creationDate.addContent(`
            ${bannerFullTime.render()} 
            (${bannerFullTime.getReadingTime()} mins read)
        `);

    bannerTimeCreation.container.append(
      bannerFullTime.render(),
      author.render(),
      delimiter.render(),
      creationDate.render()
    );

    return bannerTimeCreation.render();
  }

  createDescription() {
    const bannerDescription = new Component("p", "banner__description");
    bannerDescription.addContent(this.dataValue.description);
    return bannerDescription.render();
  }

  render() {
    this.container.append(
      this.createTitle(),
      this.createTimeCreation(),
      this.createDescription()
    );
    return this.container;
  }
}

export default Article;