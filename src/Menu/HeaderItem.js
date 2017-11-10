import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import ThemedComponent from "../ThemedComponent";
import Item from "./Item";
import styles from "./styles.css";

class HeaderItem extends ThemedComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    icon: PropTypes.element
  };

  constructor(props, context) {
    super(props, context, {
      namespace: "Menu",
      styles
    });
  }

  render() {
    const { children, className, icon, ...otherProps } = this.props;
    const { theme } = this;

    return (
      <Item
        className={classNames(theme.header_item, className)}
        {...otherProps}
      >
        {icon &&
          <div className={theme.header_icon}>
            {icon}
          </div>}
        {children}
      </Item>
    );
  }
}

export default HeaderItem;
