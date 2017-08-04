import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

export default class P extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  constructor(props, context) {
    super(props, context, {
      namespace: 'Callout'
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
