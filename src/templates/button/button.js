import "./_button.scss";
import Component from "../component";


class Button extends Component {
  #side;
  #id;
  #title;
  
  constructor(tagName, className, side, id, title) {
    super(tagName, className);
    this.#side = side;
    this.#id = id;
    this.#title = title;
  }

  addImg() {
    const img = new Component("img", "button__img");
    img.container.src = `/images/btn-${this.#side}.svg`;

    if (this.#id !== null) {
      const imgLink = new Component("a", "button__link");
      imgLink.container.href = `/blog/article/${this.#id}`;
      imgLink.container.append(img.render());
      return imgLink.render();
    } else {
      img.container.classList.add("button__img--opacity");
      return img.render();
    }
  }

  createTitle() {
    const title = new Component("p", "button__title");
    if (this.#id !== null) {
      const titleLink = new Component("a", "button__link");
      titleLink.container.href = `/blog/article/${this.#id}`;
      titleLink.addContent(`${this.#title}`);
      this.#side == "prev"
        ? title.addContent(`Go back: `)
        : title.addContent(`Next up: `);
      title.container.append(titleLink.render());
    } else {
      title.addContent(`No more articles.`);
    }
    return title.render();
  }

  render() {
    this.#side == "prev"
        ? this.container.append(this.addImg(), this.createTitle())
        : this.container.append(this.createTitle(), this.addImg());
    return this.container;
  }
}

export default Button;
