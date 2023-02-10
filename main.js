import './style.scss';
import Header from './src/components/header/header';
import Banner from './src/components/banner/banner';

const header = new Header('header', 'header container');
const banner = new Banner('section', 'banner container')

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
wrap.start();
wrap2.start();



