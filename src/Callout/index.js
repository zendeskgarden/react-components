import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Paragraph from './Paragraph';
import View from '../core/View';

import styles from './styles.css';

export default class Callout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    dir: PropTypes.oneOf(['ltr', 'rtl']),
    onClose: PropTypes.func,
    tabIndex: PropTypes.number,
    title: PropTypes.string,
    type: PropTypes.oneOf(['default', 'success', 'warning', 'error'])
  };

  static defaultProps = {
    dir: 'ltr',
    type: 'default'
  };

  static Paragraph = Paragraph;

  onKeyboardRemove = e => {
    const { onClose } = this.props;

    e.preventDefault();
    onClose(e);
  };

  renderClose = onClose => (
    <button tabIndex={-1} className={styles.remove} onClick={onClose} />
  );

  render() {
    const {
      children,
      className,
      dir,
      onClose,
      tabIndex,
      type,
      title
    } = this.props;

    return (
      <View
        className={classNames(
          styles[type],
          { [styles.rtl]: dir === 'rtl' },
          className
        )}
        onDelete={onClose && this.onKeyboardRemove}
        tabIndex={tabIndex}
      >
        <strong className={styles.title}>{title}</strong>
        {children}
        {onClose && this.renderClose(onClose)}
      </View>
    );
  }
}
