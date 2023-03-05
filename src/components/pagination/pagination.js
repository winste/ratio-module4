import "./_pagination.scss";
import Component from "../../templates/component";
import uploadedData from "../../utils/uploadedData";
import Button from "../button/button";


class Pagination extends Component {
  #prevId;
  #nextId;
  #prevTitle;
  #nextTitle;
  
  constructor(tagName, className, prevId, nextId) {
    super(tagName, className);
    this.#prevId = prevId;
    this.#nextId = nextId;
  }

  async getData() {
    if (this.#prevId !== null) {
      const prevData = await uploadedData(`blog/article/${this.#prevId}`);
      this.#prevTitle = prevData.title;
    }
    if (this.#nextId !== null) {
      const nextData = await uploadedData(`blog/article/${this.#nextId}`);
      this.#nextTitle = nextData.title;
    }
  }

  createPrevButton() {
    const wrapper = new Button(
      "div",
      "button button__prev",
      "prev",
      this.#prevId,
      this.#prevTitle
    );
    return wrapper.render();
  }

  createNextButton() {
    const wrapper = new Button(
      "div",
      "button button__next",
      "next",
      this.#nextId,
      this.#nextTitle
    );
    return wrapper.render();
  }

  async render() {
    await this.getData();
    this.container.append(
      this.createPrevButton(), 
      this.createNextButton());
    return this.container;
  }
}

export default Pagination;
