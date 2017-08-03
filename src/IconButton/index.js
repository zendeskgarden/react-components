import React, { Children } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ThemedComponent from '../utils/theming/ThemedComponent';

import Button from '../Button';

import styles from './styles.css';

export default class IconButton extends ThemedComponent {
  static propTypes = {
    autoFocus: PropTypes.bool,
    children: PropTypes.oneOfType([
      PropTypes.element.isRequired,
      PropTypes.string
    ]),
    disabled: PropTypes.bool,
    isRotated: PropTypes.bool,
    onBlur: PropTypes.func,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    pill: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    tabIndex: PropTypes.number,
    testId: PropTypes.string,
    title: PropTypes.string,
    /** <a href="#view">See View</a> */
    tooltipPositioning: () => {},
    type: PropTypes.oneOf(['default', 'primary', 'basic'])
  };

  constructor(props, context) {
    super(props, context, {
      namespace: 'IconButton',
      styles
    });
  }

  render() {
    const { children, isRotated, ...other } = this.props;
    const theme = this.theme;

    return (
      <Button className={styles.button} {...other}>
        {typeof children === 'string'
          ? children
          : React.cloneElement(Children.only(children), {
              className: classNames(styles.icon, {
                [theme.rotated]: isRotated
              })
            })}
      </Button>
    );
  }
}
