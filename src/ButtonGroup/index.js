import React, { PropTypes } from 'react'

import View from '../core/View'

import styles from '../Button/styles.css'

const ButtonGroup = ({ children }) => (
  <View className={ styles.group }>
    { children }
  </View>
)

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired
}

export default ButtonGroup
