import Component from "../../templates/component";
import "./_author.scss";


class Author extends Component {
  #data;
  constructor(tagName, className, data) {
    super(tagName, className);
    this.#data = data;
  }

  createAvatar() {
    const avatar = new Component("img", "author__img");
    avatar.addSrc(`${this.#data.images || "/ratio-module4/images/avatar.png"}`);
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
    const text = new Component("p", "author__about");
    text.addContent(this.#data.about);
    return text.render();
  }

  render() {
    this.container.append(
        this.createAvatar(),
        this.createTitle(),
        this.createNickname(),
        this.createDescription()
    )
    return this.container;
  }
}


export default Author;
