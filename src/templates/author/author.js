import "./_author.scss";
import Component from "../component";

class Author extends Component {
  #data;
  constructor(tagName, className, data) {
    super(tagName, className);
    this.#data = data;
  }

  createAvatar() {
    const avatar = new Component("img", "author__img");
    avatar.container.src = `${this.#data.images || "/images/avatar.png"}`;
    return avatar.render();
  }

  createTitle() {
    const title = new Component("h3", "author__name");
    title.addContent(this.#data.name);
    return title.render();
  }

  createNickname() {
    const nickname = new Component("span", "author__nickname");
    nickname.addContent(`@${this.#data.nick}`);
    return nickname.render();
  }

  createDescription() {
    const text = new Component("div", "author__about");
    text.addContent(this.#data.about);
    return text.render();
  }

  render() {
    const descriptionWrapper = new Component("div", "author__description");
    descriptionWrapper.container.append(
        this.createTitle(),
        this.createNickname(),
        this.createDescription()
    )

    this.container.append(
        this.createAvatar(),
        descriptionWrapper.render()
    )

    return this.container;
  }
}

export default Author;
