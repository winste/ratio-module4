import ArticlePreview from '../article-preview/article-preview'
import Component from '../../templates/component'
import uploadedData from '../../utils/uploadedData'
import linksPushSate from '../../utils/linkPushState'
import './_blog.scss'

class Blog extends Component {
  #data // хранит весь массив статей
  constructor(tagName, className) {
    super(tagName, className)
    this.collectionArticles = new Component('div', 'blog__articles')
  }

  async getData() {
    this.#data = await uploadedData('blog/articles/')
  }

  createTitle() {
    const title = new Component('h2', 'blog__title')
    title.addContent('Editor’s Picks')
    return title.render()
  }

  // если ограничение по количеству статей есть, то обрезает массив до нужного размера
  async addArticles(number) {
    this.#data = this.#data.slice(0, number)

    for (const articles of this.#data) {
      const article = new ArticlePreview(
        'div',
        'blog__article article-preview',
        articles
      )
      this.collectionArticles.addComponents(article.render()) // по очереди добавляет готовые статьи в обертку
    }

    return this.collectionArticles.render()
  }

  // бесконечная подгрузка статей
  infiniteRenderArticles() {
    window.addEventListener('scroll' || 'touchmove', () => {
      if (
        window.innerHeight + window.pageYOffset >=
        document.body.offsetHeight
      ) {
        this.addArticles()
        linksPushSate.removeListener()
        linksPushSate.addListener()
      }
    })
  }

  //можно передать значения на разрешение подгрузки статей и на количество выгружаемых статец
  async render(infiniteRender, limit) {
    await this.getData()
    this.container.append(this.createTitle(), await this.addArticles(limit))
    if (infiniteRender) this.infiniteRenderArticles()
    return this.container
  }
}

export default Blog
