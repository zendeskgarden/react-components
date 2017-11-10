import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import ThemedComponent from "../ThemedComponent";
import Selectable from "../core/Selectable";
import { Item } from "./Item";
import styles from "./styles.css";

class PreviousItem extends ThemedComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
  };

  constructor(props, context) {
    super(props, context, {
      namespace: "Menu",
      styles
    });
  }

  render() {
    const { children, className, ...otherProps } = this.props;
    const { theme } = this;

    return (
      <Item
        className={classNames(className, theme.previous_item)}
        {...otherProps}
      >
        {children}
      </Item>
    );
  }
}

export default Selectable(PreviousItem, {
  action: (props, event) => {
    const { onClick, value } = props;

    onClick && onClick(value, event);
  },
  preventDefault: true
});
