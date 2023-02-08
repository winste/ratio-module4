import Component from "../../templates/component";


class Navigation extends Component {
  constructor(tagName, className) {
    super(tagName, className);
  }

  addRoute(url) {
    this.container.href = url;
  }

  markActive() {
    this.container.classList.add("nav__item--active");
  }
  
  render() {
    return this.container;
  }
}


export default Navigation;
