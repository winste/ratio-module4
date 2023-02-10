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
    const logo = new Component("a", "header__logo",);
    logo.addContent(`<img class="header__img" src="/images/logo.svg" alt="logo">`)
    window.location.pathname == navRoutes["home"]
        ? ""
        : (logo.container.href = navRoutes["home"]);
    return logo.render();
  }

  createNavigationBlock() {
    const nav = new Component("nav", "nav");

    for (const route in navRoutes) {
      const navItem = new Navigation("a", "nav__item", navRoutes[route]);
      navItem.addContent(route);
      if (window.location.pathname == navRoutes[route]) navItem.markActive();
      nav.container.append(navItem.render());
    }

    return nav.render();
  }

  render() {
    this.container.append( this.addLogo(), this.createNavigationBlock() );
    return this.container;
  }
}

export default Header;
