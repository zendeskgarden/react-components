import { Component, PropTypes } from 'react'

const extendStyles = (styles, theme, namespace) => {
  const { [namespace]: themeStyles } = theme || {}

  if (themeStyles) {
    const extendStyles = {}

    Object.keys(styles).forEach((key) => {
      extendStyles[key] = key in themeStyles
        ? `${styles[key]} ${themeStyles[key]}`
        : styles[key]
    })

    return extendStyles
  } else {
    return styles
  }
}

export default class ThemedComponent extends Component {
  static contextTypes = {
    theme: PropTypes.object
  }

  constructor (props, context, { namespace, styles }) {
    super(props, context)
    this.theme = extendStyles(styles, context.theme, namespace)
  }
}
