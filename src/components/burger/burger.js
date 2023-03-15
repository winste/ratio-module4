import Component from "../../templates/component";
import "./_burger.scss";


class Burger extends Component {
  constructor(tagName, className) {
    super(tagName, className);
  }

  addListener() {
    this.container.onclick = () => {
      document.getElementById("nav").classList.toggle("open");
      document.body.classList.toggle("modal-open");
    }
  }

  render() {
    this.addListener();
    return this.container;
  }
}


export default Burger;
