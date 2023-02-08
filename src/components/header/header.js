import Component from "../../templates/component";
import Navigation from "./navigation";
import "./_header.scss";

const navRoutes = {
  home: "/",
  blog: "/blog",
  about: "/about",
};

class Header extends Component {
  constructor(tagName, className) {
    super(tagName, className);
  }

  addLogo() {
    const logoLink = document.createElement("a");
    logoLink.classList.add("header__logo");
    window.location.pathname == navRoutes["home"]
      ? ""
      : (logoLink.href = navRoutes["home"]);
    logoLink.innerHTML = `<img class="header__img" src="/images/logo.svg" alt="logo">`;
    return logoLink;
  }

  createNavigation() {
    const navigationBlock = document.createElement("nav");
    navigationBlock.classList.add("nav");

    for (const route in navRoutes) {
      const navItem = new Navigation("a", "nav__item");
      navItem.addInner(route);
      navItem.addRoute(navRoutes[route]);
      if (window.location.pathname == navRoutes[route]) navItem.markActive();
      navigationBlock.append(navItem.container);
    }

    return navigationBlock;
  }

  render() {
    this.container.append(this.addLogo(), this.createNavigation());
    return this.container;
  }
}

export default Header;
