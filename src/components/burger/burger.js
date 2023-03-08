import Component from "../../templates/component";
import "./_burger.scss";


class Burger extends Component {
  constructor(tagName, className) {
    super(tagName, className);
  }

  appendLine() {
    const line = new Component("div", "burger__line burger__line-one");
    const line2 = new Component("div", "burger__line burger__line-two");
    const line3 = new Component("div", "burger__line burger__line-three");
    this.container.append(
      line.render(), 
      line2.render(), 
      line3.render()
      );
  }

  addListener() {
    this.container.addEventListener("click", (e) => {
      if (e.target.parentNode == this.container || e.target == this.container) {
        document.getElementById("nav").classList.toggle("open");
      }
    });
  }

  render() {
    this.appendLine();
    this.addListener();
    return this.container;
  }
}


export default Burger;
