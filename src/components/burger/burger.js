import Component from "../../templates/component";
import "./_burger.scss";


class Burger extends Component {
  constructor(tagName, className) {
    super(tagName, className);
  }

  appendLine() {
    const line = new Component("span", "burger__line burger__line-one");
    const line2 = new Component("span", "burger__line burger__line-two");
    const line3 = new Component("span", "burger__line burger__line-three");
    this.container.append(
      line.render(), 
      line2.render(), 
      line3.render()
      );
  }

  render() {
    this.appendLine();
    return this.container;
  }
}


export default Burger;
