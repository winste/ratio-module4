import "./_article.scss";
import Component from "../../templates/component";
import uploadedData from "../../utils/uploadedData";
import DateConversion from "../../utils/dateConversion";


class ArticlePage extends Component {
  #data;
  constructor(tagName, className) {
    super(tagName, className);
    this.url = window.location.pathname;
  }

  async getData() {
    const regex = /\d+$/;
    const articleNumber = this.url.match(regex);
    this.#data = await uploadedData(`blog/article/${articleNumber[0]}`);
  }

  addImage() {
    const articleImg = new Component("img", "article__img");
    articleImg.container.src = `${this.#data.images || "/images/plug.jpg"}`;
    return articleImg.render();
  }

  createTitle() {
    const title = new Component("h2", "article__title");
    title.addContent(this.#data.title);
    return title.render();
  }

  createTimeCreation() {
    const articleTimeCreation = new Component("span", "article__creation");
    const articleFullTime = new DateConversion( this.#data.createdAt, this.#data.readTime );
    const author = new Component("p", "article__creation-author");
    const delimiter = new Component("p", "article__creation-delimiter");
    const creationDate = new Component("p", "article__creation-date");
    author.addContent(this.#data.author.name);
    creationDate.addContent(`
            ${articleFullTime.render()} 
            (${articleFullTime.getReadingTime()} mins read)
        `);

        

    articleTimeCreation.container.append(
      author.render(),
      delimiter.render(),
      creationDate.render()
    );

  console.log(articleTimeCreation);

    console.log(this.#data);

    return articleTimeCreation.render();
  }

  createDescription() {
    const articleDescription = new Component("p", "article__description");
    articleDescription.addContent(this.#data.description);
    return articleDescription.render();
  }


  async render() {
    await this.getData();
    this.container.append(
      await this.addImage(),
      await this.createTitle(),
      await this.createTimeCreation(),
      await this.createDescription()
    );
    return this.container;
  }
}

export default ArticlePage;
