import './style.scss';
import Header from './src/components/header/header';
import Banner from './src/components/banner/banner';
import Catalog from './src/components/catalog/catalog';

const header = new Header('header', 'header container');
const banner = new Banner('section', 'banner container');
const catalog = new Catalog('section', "catalog container");
catalog.createTitle('Editor’s Picks', "catalog__title");

class BodyWrap {
    constructor(HTMLElement) {
        this.container = document.body;
        this.HTMLElement = HTMLElement;
    }

    start() {
        this.container.append(this.HTMLElement);
        return this.container;
    }
 }

const wrap = new BodyWrap(await header.render());
const wrap2 = new BodyWrap(await banner.render());
const wrap3 = new BodyWrap(await catalog.render())
wrap.start();
wrap2.start();
wrap3.start();



