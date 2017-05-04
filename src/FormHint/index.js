import React from 'react';
import PropTypes from 'prop-types';
import ThemedComponent from '../utils/theming/ThemedComponent';

import styles from './styles.css';

export default class FormHint extends ThemedComponent {
  static propTypes = {
    children: PropTypes.node
  };

  constructor(props, context) {
    super(props, context, {
      namespace: 'FormHint',
      styles
    });
  }

  render() {
    const { children } = this.props;
    const { theme } = this;

    return (
      <small className={theme.hint}>
        {children}
      </small>
    );
  }
}
