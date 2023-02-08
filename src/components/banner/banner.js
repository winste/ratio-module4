import "./_banner.scss";
import Component from "../../templates/component";

async function data() {
    const response = await fetch("https://course.7t33n.ru/rest/v1/blog/featured/", {
        method: "GET"
      })
      const result = await response.json();
      return result;
}

class Banner extends Component {
    constructor(tagName, className) {
        super(tagName, className);
    }
    async getData() {
        const featuredData = await data();
        return featuredData;
    }
    async inner() {
        const dataValue = await this.getData();
        this.container.innerHTML  = `
            <img src="${dataValue.image}" class="banner__img>
            <div class="banner__info">
                <span class="banner__tag">${dataValue.tag}</span>
                <h2 class="banner__title">${dataValue.title}</h2>
                <span class="banner__creation">
                    <p class="banner__creation-author">${dataValue.author}</p>
                    <p class="banner__creation-dot"></p>
                    <p class="banner__creation-date">May 7, 2019 (10 mins read)</p>
                </span>
                <p class="banner__description">${dataValue.description}</p>
            </div>
        `        
    }

    render() {
        this.container.append(this.inner())
        return this.container;
    }
}

export default Banner;
