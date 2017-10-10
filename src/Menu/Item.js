import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import View from "../core/View";
import Selectable from "../core/Selectable";

import styles from "./styles.css";

class Item extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    onMouseDown: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    role: PropTypes.string,
    selected: PropTypes.bool,
    testId: PropTypes.string,
    title: PropTypes.string,
    /** <a href="#view">See View</a> */
    tooltipPositioning: () => {}
  };

  static defaultProps = {
    disabled: false,
    role: "menuitem"
  };

  render() {
    const {
      children,
      className,
      disabled,
      onMouseDown,
      onMouseEnter,
      onMouseLeave,
      role,
      selected,
      testId,
      title,
      tooltipPositioning
    } = this.props;

    return (
      <View
        aria-activedescendant={selected}
        aria-disabled={disabled}
        className={classNames(
          styles.item,
          {
            [styles.disabled]: disabled,
            [styles.focused]: selected
          },
          className
        )}
        disabled={disabled}
        onMouseDown={onMouseDown}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        role={role}
        testId={testId}
        title={title}
        tooltipPositioning={tooltipPositioning}
      >
        {children}
      </View>
    );
  }
}

export default Selectable(Item, {
  action: (props, event) => {
    const { onClick, value } = props;

    onClick && onClick(value, event);
  },
  preventDefault: true
});
