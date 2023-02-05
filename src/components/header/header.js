import Component from "../../templates/component";
import "./_header.scss";

class Header extends Component {
  constructor(tagName, className) {
    super(tagName, className);
  }

  addLogo() {
    const logoLink = document.createElement("a");
    logoLink.classList.add("header__logo");
    window.location.pathname == "/" ? "" : (logoLink.href = "/");
    logoLink.innerHTML = `<img class="header__img" src="/images/logo.svg" alt="logo">`;
    return logoLink;
  }

  createNavigation() {
    const navigationBlock = document.createElement("nav");
    navigationBlock.classList.add("nav");
    navigationBlock.innerHTML = `
            <a class="nav__item" href="/">home</a>
            <a class="nav__item" href="/blog">blog</a>
            <a class="nav__item" href="/about">about</a>
        `;
    return navigationBlock;
  }

  render() {
    this.container.append(this.addLogo(), this.createNavigation());
    return this.container;
  }
}

export default Header;
