import './_creationInfo.scss'
import Component from "../../templates/component";
import DateConversion from "../../utils/dateConversion";

class Creation extends Component {
  constructor(tagName, clasName, author, createdAt, readTime) {
    super(tagName, clasName);
    this.author = author;
    this.createdAt = createdAt;
    this.readTime = readTime;
  }

  createTimeCreation() {
    const articleTimeCreation = new Component("span", "creation");
    const articleFullTime = new DateConversion(this.createdAt, this.readTime);
    const author = new Component("p", "creation-author");
    const delimiter = new Component("p", "creation-delimiter");
    const creationDate = new Component("p", "creation-date");
    const readTime = new Component("p", "creation-read");
    author.addContent(this.author);
    creationDate.addContent(`${articleFullTime.render()} `);
    readTime.addContent(`(${articleFullTime.getReadingTime()} mins read)`);

    articleTimeCreation.container.append(
      author.render(),
      delimiter.render(),
      creationDate.render(),
      readTime.render()
    );

    return articleTimeCreation.render();
  }

  render() {
    this.container.append(this.createTimeCreation());
    return this.container;
  }
}

export default Creation;
