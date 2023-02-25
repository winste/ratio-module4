import "./_about.scss";
import Component from "../../templates/component";
import uploadedData from "../../utils/uploadedData";


class About extends Component {
  #data;
  constructor(tagName, className) {
    super(tagName, className);
  }

  async getData() {
    this.#data = await uploadedData("about/");
  }

  createTitle() {
    const title = new Component("h2", "about__title");
    title.addContent(this.#data.title);
    return title.render();
  }

  createDesctiption() {
    const desctiption = new Component("div", "about__text");
    desctiption.addContent(this.#data.content)
    return desctiption.render();
  }

  async render() {
    await this.getData();
    this.container.append(this.createTitle(), this.createDesctiption())
    return this.container;
  }
}


export default About;
