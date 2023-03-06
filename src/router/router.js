import Navigo from "navigo";
import Pages from "./page";

const router = new Navigo("/");
const page = new Pages();

router
  .on({
    "/": async () => {
      await page.home();
      await page.render();
    },

    "/blog": async () => {
      await page.blog();
      await page.render();
    },

    "/about": async () => {
      await page.about();
      await page.render();
    },

    "/blog/article/:id": async () => {
      await page.article();
      await page.render();
    },
  })
  .notFound( async () => {
    await page.error();
    await page.render();
  })
  .resolve();
  
