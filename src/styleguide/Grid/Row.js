import React, { PropTypes } from 'react'

import View from '../../core/View'
import styles from './styles.css'

const Row = ({ children }) => (
  <View className={ styles.row }>
    { children }
  </View>
)

Row.propTypes = {
  children: PropTypes.node.isRequired
}

export default Row
