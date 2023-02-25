import Component from "../../templates/component";
import Navigation from "../../templates/navigation";
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
    const logo = new Component("a", "header__logo",);
    logo.addContent(`<img class="header__img" src="/images/logo.svg" alt="logo">`)
    window.location.pathname == this.navRoutes["home"]
        ? ""
        : (logo.container.href = this.navRoutes["home"]);
    return logo.render();
  }

  createNavigation() {
    const nav = new Component("nav", "nav");

    for (const route in this.navRoutes) {
      const navItem = new Navigation("a", "nav__item", this.navRoutes[route]);
      navItem.addContent(route);
      if (window.location.pathname == this.navRoutes[route]) navItem.markActive();
      nav.container.append(navItem.render());
    }

    return nav.render();
  }

  render() {
    this.container.append( this.addLogo(), this.createNavigation() );
    return this.container;
  }
}

export default Header;
