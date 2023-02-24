import "./_article-preview.scss"
import Component from "./component";
import DateConversion from "../utils/dateConversion";


class ArticlePreview extends Component {
  constructor(tagName, className, data) {
    super(tagName, className);
    this.dataValue = data;
  }

  createTag() {
    const articleTag = new Component("p", "article-preview__tag");
    articleTag.addContent(this.dataValue.tag);
    return articleTag.render();
  }

  createTitle() {
    const articleTitle = new Component("h3", "article-preview__title");
    const titleLink = new Component("a", "article-preview__title-link");
    const checkedTitle = this.dataValue.title.startsWith("FEATURED ARTICLE")
      ? this.dataValue.title.split(" ").slice(2).join(" ")
      : this.dataValue.title;
    titleLink.addContent(checkedTitle);
    titleLink.container.href = `/blog/article/${this.dataValue.id}`;
    articleTitle.container.append(titleLink.render()); 
    return articleTitle.render();
  }

  createTimeCreation() {
    const articleTimeCreation = new Component("span", "article-preview__creation");
    const articleFullTime = new DateConversion( this.dataValue.createdAt, this.dataValue.readTime );
    const author = new Component("p", "article-preview__creation-author");
    const delimiter = new Component("p", "article-preview__creation-delimiter");
    const creationDate = new Component("p", "article-preview__creation-date");
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
    const articleDescription = new Component("p", "article-preview__description");
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


export default ArticlePreview;