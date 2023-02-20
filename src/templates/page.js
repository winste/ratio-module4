class Page {
    constructor(...components) {
        this.container = document.createElement('div');
        this.elements = [...components];
    }

    render() {
        for (const element of this.elements) {
            this.container.append(element);
          }
        return this.container;
    }
}

export default Page;