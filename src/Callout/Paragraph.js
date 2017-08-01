import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

export default class Paragraph extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  constructor(props, context) {
    super(props, context, {
      namespace: 'Callout',
      styles
    });
  }

  render() {
    const { children } = this.props;

    return (
      <p className={styles.paragraph}>
        {children}
      </p>
    );
  }
}
