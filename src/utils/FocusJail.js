import tabbable from 'tabbable'

export default class FocusJail {
  constructor (container) {
    this.container = container

    setTimeout(() => {
      if (!this.container.contains(window.document.activeElement)) {
        this.container.focus()
      }
    }, 1)
  }

  onTab = (e) => {
    let elements = tabbable(this.container)

    const isFirstElementClose = (
      elements.length > 0 &&
      elements[0].getAttribute('aria-label') === 'close'
    )

    if (isFirstElementClose) {
      const [first, ...rest] = elements
      elements = [...rest, first]
    }

    const index = elements.indexOf(e.target)

    if (elements.length === 0) {
      setTimeout(() => {
        this.container.focus()
      }, 0)
      e.stopPropagation()
      e.preventDefault()
    } else if (e.shiftKey) {
      const newIndex = index <= 0 ? elements.length - 1 : index - 1
      setTimeout(() => {
        elements[newIndex].focus()
      }, 0)
      e.stopPropagation()
      e.preventDefault()
    } else if (!e.shiftKey) {
      const newIndex = (index + 1) % elements.length
      setTimeout(() => {
        elements[newIndex].focus()
      }, 0)
      e.stopPropagation()
      e.preventDefault()
    }
  }
}
