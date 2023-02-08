class Component {
    constructor(tagName, className) {
        this.container = document.createElement(tagName);
        this.container.className = className;
    }

    addInner(content) {
        this.container.innerHTML = content;
    }

    render() {
        return this.container;
    }
}


export default Component;