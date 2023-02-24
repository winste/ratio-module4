import "./_article.scss"
import Component from "./component";
import DateConversion from "../utils/dateConversion";


class Article extends Component {
  constructor(tagName, className, data) {
    super(tagName, className);
    this.dataValue = data;
  }

  createTag() {
    const articleTag = new Component("p", "article__tag");
    articleTag.addContent(this.dataValue.tag);
    return articleTag.render();
  }

  createTitle() {
    const articleTitle = new Component("h3", "article__title");
    const titleLink = new Component("a", "article__title-link");
    const checkedTitle = this.dataValue.title.startsWith("FEATURED ARTICLE")
      ? this.dataValue.title.split(" ").slice(2).join(" ")
      : this.dataValue.title;
    titleLink.addContent(checkedTitle);
    titleLink.container.href = `/blog/article/${this.dataValue.id}`;
    articleTitle.container.append(titleLink.render()); 
    return articleTitle.render();
  }

  createTimeCreation() {
    const articleTimeCreation = new Component("span", "article__creation");
    const articleFullTime = new DateConversion( this.dataValue.createdAt, this.dataValue.readTime );
    const author = new Component("p", "article__creation-author");
    const delimiter = new Component("p", "article__creation-delimiter");
    const creationDate = new Component("p", "article__creation-date");
    author.addContent(this.dataValue.author);
    creationDate.addContent(`
            ${articleFullTime.render()} 
            (${articleFullTime.getReadingTime()} mins read)
        `);

    articleTimeCreation.container.append(
      author.render(),
      delimiter.render(),
      creationDate.render()
    );

    return articleTimeCreation.render();
  }

  createDescription() {
    const articleDescription = new Component("p", "article__description");
    articleDescription.addContent(this.dataValue.description);
    return articleDescription.render();
  }

  render() {
    this.container.append(
      this.createTag(),
      this.createTitle(),
      this.createTimeCreation(),
      this.createDescription()
    );
    return this.container;
  }
}


export default Article;