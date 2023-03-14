import Component from "../../templates/component";
import "./_navigation.scss";

class Navigation extends Component {
  navRoutes = {
    home: "/",
    blog: "/blog",
    about: "/about",
  };

  constructor(tagName, className) {
    super(tagName, className);
  }

  addNavigationItem() {
    for (const route in this.navRoutes) {
      const navItem = new Component("a", "nav__item");
      navItem.addContent(route);
      navItem.addHref(this.navRoutes[route]);
      if (window.location.pathname == this.navRoutes[route]) {
        navItem.container.classList.add("nav__item--active");
      }
      this.container.append(navItem.render());
    }
  }

  render() {
    this.addNavigationItem();
    return this.container;
  }
}

export default Navigation;
