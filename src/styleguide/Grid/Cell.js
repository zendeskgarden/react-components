import React, { PropTypes } from 'react'

import View from '../../core/View'
import styles from './styles.css'

const Cell = ({ children }) => (
  <View className={ styles.cell }>
    { children }
  </View>
)

Cell.propTypes = {
  children: PropTypes.node.isRequired
}

export default Cell
