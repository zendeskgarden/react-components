import { Component, PropTypes } from 'react'

const extendStyles = (styles, theme, namespace) => {
  const { [namespace]: themeStyles } = theme || {}

  if (themeStyles) {
    const extendStyles = {}

    Object.keys(themeStyles).forEach((key) => {
      const styleDefined = key in styles

      if (!styleDefined) {
        console.warn(
          `Trying to override an undefined style: ${namespace}.${key}\n` +
          `Styles defined for ${namespace}:\n` +
          Object.keys(styles).join('\n')
        )
      }
    })

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
    rcTheme: PropTypes.object
  }

  constructor (props, context, { namespace, styles }) {
    super(props, context)
    this.theme = extendStyles(styles, context.rcTheme, namespace)
  }
}
