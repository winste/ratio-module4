import Component from "../../templates/component";


class Navigation extends Component {
  constructor(tagName, className, url) {
    super(tagName, className);
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
