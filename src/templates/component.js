class Component {
    constructor(tagName, className) {
        this.container = document.createElement(tagName);
        this.container.className = className;
    }

    createTitle(text, selector) {
        const title = document.createElement('h2');
        title.classList.add(selector);
        title.innerText = text;
        this.container.append(title);
    }

    addContent(content) {
        this.container.innerHTML = content;
    }

    render() {
        return this.container;
    }
}


export default Component;