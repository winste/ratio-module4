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
        return this.container.append(this.HTMLElement);
    }
 }

const wrap = new BodyWrap(header.render());
const wrap2 = new BodyWrap(banner.render());
wrap.start();
wrap2.start();



