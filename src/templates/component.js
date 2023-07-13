class Component {
  // основной класс для создания компонентов
  constructor(tagName, className) {
    this.container = document.createElement(tagName)
    this.container.className = className
  }

  addContent(content) {
    this.container.innerHTML = content
  }

  addId(id) {
    this.container.id = id
  }

  addHref(href) {
    this.container.href = href
  }

  addSrc(src) {
    this.container.src = src
  }

  addComponents(...components) {
    this.container.append(...components)
  }

  render() {
    return this.container
  }
}

export default Component
