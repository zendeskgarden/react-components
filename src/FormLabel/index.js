import React from 'react';
import PropTypes from 'prop-types';
import ThemedComponent from '../utils/theming/ThemedComponent';

import styles from './styles.css';

export default class FormLabel extends ThemedComponent {
  static propTypes = {
    children: PropTypes.node,
    htmlFor: PropTypes.string
  };

  constructor(props, context) {
    super(props, context, {
      namespace: 'FormLabel',
      styles
    });
  }

  render() {
    const { children, htmlFor } = this.props;
    const { theme } = this;

    return (
      <label htmlFor={htmlFor} className={theme.label}>
        {children}
      </label>
    );
  }
}
