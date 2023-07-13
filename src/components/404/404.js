import Component from '../../templates/component'
import './404.scss'

class PageError extends Component {
  constructor(tagName, className) {
    super(tagName, className)
  }

  createTitle() {
    const title = new Component('h2', 'error__title')
    title.addContent('Sorry!<br> This page was not found.')
    return title.render()
  }

  render() {
    this.container.append(this.createTitle())
    return this.container
  }
}

export default PageError
