import Navigo from "navigo";
import Pages from "./page";


class App {
  constructor() {
    this.container = document.body;
  }

  async renderNewPage() {
    this.container.innerHTML = "";

    const page = new Pages();
    const router = new Navigo("/");

    router
      .on({
        "/": async () => {
          await page.home();
        },
      })
      .on({
        "/blog": async () => {
          await page.blog();
        },
      })
      .on({
        "/about": async () => {
          await page.about();
        },
      })
      .on({
        "/blog/article/:id": async () => {
          await page.article();
        },
      })
      .notFound(async () => {
        await page.error();
      })
      .resolve();
  }

  async start() {
    await this.renderNewPage();
  }
}

export default App;
