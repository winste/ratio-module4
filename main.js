import './style.scss';
import Header from './src/components/header/header';
import Banner from './src/components/banner/banner';
import Catalog from './src/components/catalog/catalog';

const header = new Header('header', 'header container');
const banner = new Banner('section', 'banner container');
const bannerMove = new Banner('section', 'banner banner--move container');
const catalog = new Catalog('section', "catalog container");
catalog.createTitle('Editor’s Picks', "catalog__title");

class BodyWrap {
    constructor() {
        this.container = document.body;
    }

    appendElements(...HTMLElements) {
        for (const element of HTMLElements) {
            this.container.append(element);
        }
    }

    start() {
        return this.container;
    }
 }

const wrr = new BodyWrap();
wrr.appendElements(
    await header.render(),
    await banner.render(),
    await catalog.render(3),
    await bannerMove.render()
)
wrr.start()




