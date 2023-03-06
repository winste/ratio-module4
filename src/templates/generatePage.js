class generatePage {
  constructor(...components) {
    this.container = document.createElement("div");
    this.container.id = "#app";
    this.elements = [...components];
    this.body = document.body;
  }

  render() {
    for (const element of this.elements) {
      this.container.append(element);
    }
    return this.container;
  }
}

export default generatePage;
