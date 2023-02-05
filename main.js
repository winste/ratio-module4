import './style.scss';

import Header from './src/components/header/header';

const header = new Header('header', 'header container');

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
wrap.start()



