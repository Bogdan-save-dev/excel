import { capitalize } from './utils'

export class DomListener {
  constructor($root, listeners = []) {
    this.$root = $root
    this.listeners = listeners
  }

  initDOMListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener)

      this.$root.on(listener, this[method])
    })
  }
  removeDOMListeners() {}
}

function getMethodName(eventName) {
  return 'on' + capitalize(eventName)
}
