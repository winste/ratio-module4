class Component {
  constructor(tagName, className) {
    this.container = document.createElement(tagName);
    this.container.className = className;
  }

  addContent(content) {
    this.container.innerHTML = content;
  }

  addId(id) {
    this.container.id = id;
  }

  addComponents(...components) {
    this.container.append(...components);
  }

  addHref(href) {
    this.container.href = href;
  }

  addSrc(src) {
    this.container.src = src;
  }

  render() {
    return this.container;
  }
}

export default Component;
