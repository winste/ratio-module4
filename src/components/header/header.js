import Component from "../../templates/component";
import Navigation from "../navigation/navigation";
import Burger from "../burger/burger";
import "./_header.scss";


class Header extends Component {
  navRoutes = {
    home: "/",
    blog: "/blog",
    about: "/about",
  };

  constructor(tagName, className) {
    super(tagName, className);
  }

  addLogo() {
    const logoImg = new Component("img", "header__img logo");
    logoImg.container.src = "/images/logo.svg";
    logoImg.container.alt = "logo";

    if (window.location.pathname == "/") {
      return logoImg.render();
    } else {
      const logoLink = new Navigation("a", "header__logo", "/");
      logoLink.addComponents(logoImg.render());
      return logoLink.render();
    }
  }

  createNavigation() {
    const nav = new Component("nav", "nav");
    nav.addId = "nav";

    for (const route in this.navRoutes) {
      const navItem = new Navigation("a", "nav__item", this.navRoutes[route]);
      navItem.addContent(route);
      if (window.location.pathname == this.navRoutes[route]) {
        navItem.markActive();
      }
      nav.addComponents(navItem.render());
    }
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
