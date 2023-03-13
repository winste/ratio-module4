import Component from "../../templates/component";
import "./_navigation.scss";


class Navigation extends Component {
  constructor(tagName, className, href) {
    super(tagName, className);
    this.container.href = href;
  }
  
  markActive() {
    this.container.classList.add("nav__item--active");
  }
  
  render() {
    return this.container;
  }
}


export default Navigation;
