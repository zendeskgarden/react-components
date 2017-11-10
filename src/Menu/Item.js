import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import ThemedComponent from "../ThemedComponent";
import View from "../core/View";
import Selectable from "../core/Selectable";

import styles from "./styles.css";

export class Item extends ThemedComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    onMouseDown: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    role: PropTypes.string,
    selected: PropTypes.bool,
    testId: PropTypes.string,
    title: PropTypes.string,
    /** <a href="#view">See View</a> */
    tooltipPositioning: () => {},
    checked: PropTypes.bool,
    metaInformation: PropTypes.node
  };

  static defaultProps = {
    disabled: false,
    role: "menuitem",
    checked: false
  };

  constructor(props, context) {
    super(props, context, {
      namespace: "Menu",
      styles
    });
  }

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
      tooltipPositioning,
      checked,
      metaInformation
    } = this.props;
    const { theme } = this;

    return (
      <View
        aria-activedescendant={selected}
        aria-disabled={disabled}
        className={classNames(theme.item, className, {
          [theme.disabled]: disabled,
          [theme.focused]: selected,
          [theme.checked]: checked
        })}
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
        {metaInformation &&
          <div className={theme.meta}>
            {metaInformation}
          </div>}
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
