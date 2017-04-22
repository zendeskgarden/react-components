import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Selectable from '../core/Selectable';
import ThemedComponent from '../utils/theming/ThemedComponent';

import styles from '../Button/styles.css';

class Item extends ThemedComponent {
  static propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    selected: PropTypes.bool,
    selectedByMouse: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large'])
  };

  static defaultProps = {
    size: 'small'
  };

  constructor(props, context) {
    super(props, context, {
      namespace: 'Button',
      styles
    });
  }

  render() {
    const {
      active,
      children,
      disabled,
      onClick,
      onMouseEnter,
      onMouseLeave,
      selected,
      selectedByMouse,
      size
    } = this.props;

    const { theme } = this;

    return (
      <button
        aria-activedescendant={selected}
        aria-disabled={disabled}
        aria-selected={active}
        className={classNames(theme.type_default, theme[`size_${size}`], {
          [theme.disabled]: disabled,
          [theme.active]: active,
          [theme.focused]: !selectedByMouse && selected
        })}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        role="tab"
        tabIndex="-1"
      >
        {children}
      </button>
    );
  }
}

export default Selectable(Item, {
  selectOnHover: false,
  selectEvent: 'onClick'
});
