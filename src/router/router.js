import generatePage from "../templates/generatePage";
import Header from "../../src/components/header/header";
import Banner from "../../src/components/banner/banner";
import Blog from "../../src/components/blog/blog";
import About from "../../src/components/about/about";
import ArticlePage from "../../src/components/article/article";
import PageError from "../../src/components/404/404";
import Navigo from "navigo";

const header = new Header("header", "header container");
const banner = new Banner("section", "banner container");
const bannerMove = new Banner("section", "banner banner--move container");
const blog = new Blog("section", "blog container");
const about = new About("section", "about container");
const article = new ArticlePage("section", "article container");
const error = new PageError("section", "error container");
const router = new Navigo("/");

const appendPage = (page) => {
  document.getElementById("spinner").style.display = "none";
  document.body.append(page);
  burger()
};

const pages = {
  homePage: async () => {
    return new generatePage(
      await header.render(),
      await banner.render(),
      await blog.render(3),
      await bannerMove.render(true)
    );
  },
  blogPage: async () => {
    return new generatePage(
      await header.render(),
      await banner.render(),
      await blog.render()
    );
  },
  aboutPage: async () => {
    return new generatePage(
        await header.render(), 
        await about.render()
    );
  },
  articlePage: async () => {
    return new generatePage(
        await header.render(), 
        await article.render()
    );
  },
  errorPage: async () => {
    return new generatePage(
        await header.render(), 
        await error.render()
    );
  },
};

router
  .on({
    "/": async () => {
      const page = await pages.homePage();
      appendPage(page.render());
    },

    "/about": async () => {
      const page = await pages.aboutPage();
      appendPage(page.render());
    },

    "/blog": async () => {
      const page = await pages.blogPage();
      appendPage(page.render());
    },

    "/blog/article/:id": async () => {
      const page = await pages.articlePage();
      appendPage(page.render());
    },
  })
  .notFound( async() => {
    const page = await pages.errorPage();
    appendPage(page.render());
  })
  .resolve();



  function burger() {
    const navigationBlock = document.getElementById("nav");
    const burger = document.getElementById("burger");
  
    burger.addEventListener("click", (e) => {
      // e.preventDefault();
      navigationBlock.classList.toggle("open");
    });
  
    document.addEventListener("click", (e) => {
      if (
        navigationBlock.classList.contains("open") &&
        e.target != navigationBlock
      ) {
        console.log("ok");
        // navigationBlock.classList.remove("open");
      }
    });
  }
  
