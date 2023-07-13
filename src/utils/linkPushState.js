import App from '../router/router'

const linksPushSate = {
  links: document.body.getElementsByTagName('a'),

  pushState: (e) => {
    e.preventDefault()
    window.history.pushState(null, null, new URL(e.currentTarget.href).pathname)
    new App().start()
  },

  addListener() {
    for (const link of this.links) {
      link.addEventListener('click', this.pushState)
    }
  },

  removeListener() {
    for (const link of this.links) {
      link.removeEventListener('click', this.pushState)
    }
  },
}

export default linksPushSate
