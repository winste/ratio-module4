import "./_about.scss";
import Component from "../../templates/component";
import uploadedData from "../../utils/uploadedData";


class About extends Component {
  constructor(tagName, className) {
    super(tagName, className);
  }

  async getData() {
    const aboutData = await uploadedData("about/");
    return aboutData;
  }

  async inner() {
    const dataValue = await this.getData();

    const aboutTitle = new Component("h2", "about__title");
    aboutTitle.addContent(dataValue.title)
    const aboutText = new Component("div", "about__text");
    aboutText.addContent(dataValue.content)
    this.container.append(aboutTitle.render(), aboutText.render());
  }

  async render() {
    await this.inner();
    return this.container;
  }
}


export default About;
