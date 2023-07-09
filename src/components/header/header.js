import Component from "../../templates/component";
import Navigation from "../navigation/navigation";
import Burger from "../burger/burger";
import "./_header.scss";


class Header extends Component {
  constructor(tagName, className) {
    super(tagName, className);
  }

  addLogo() {
    const logoImg = new Component("img", "header__img logo");
    logoImg.addSrc("/images/logo.svg");
    logoImg.container.alt = "logo";

    // если генерируется не домашняя страница, то добавляем ссылку в лого
    if (window.location.pathname == "/") {
      return logoImg.render();
    } else { 
      const logoLink = new Component("a", "header__logo");
      logoLink.addHref("/");
      logoLink.addComponents(logoImg.render());
      return logoLink.render();
    }
  }

  createNavigation() {
    const nav = new Navigation("nav", "nav");
    nav.addId("nav");
    return nav.render();
  }

  createBurger() {
    const burger = new Burger("div", "burger");
    burger.addId = "burger";
    return burger.render();
  }

  render() {
    this.container.append(
      this.addLogo(),
      this.createNavigation(),
      this.createBurger()
    );
    return this.container;
  }
}


export default Header;
