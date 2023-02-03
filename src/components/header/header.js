import "./_header.scss";

export default Header = () => {
    create: {
        document.body.appendChild(
        `<header class="header container">
        <a class="header__logo" href="/">
            <img class="header__img" src="/images/logo.svg" alt="logo">
        </a>
            <nav class="header__nav nav">
                <a class="nav__item nav__item--active" href="/">home</a>
                <a class="nav__item" href="/blog">blog</a>
                <a class="nav__item" href="/about">about</a>
            </nav>
    </header>`)
    }
}
