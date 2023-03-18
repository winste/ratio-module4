import Navigo from "navigo";
import Pages from "./pages";


class App {
  constructor() {
    this.container = document.body;
  }

  start() {
    this.container.innerHTML = "";

    const page = new Pages();
    const router = new Navigo("/");

    router
      .on({
        "/": () => page.render('home'),
        "/blog": () => page.render('blog'),
        "/about": () => page.render('about'),
        "/blog/article/:id": () => page.render('article')
      })
      .on({
        "ratio-module4/": () => router.navigate("/")
      })
      .notFound( () => page.render('error') )
      .resolve()
  }
}

export default App;
