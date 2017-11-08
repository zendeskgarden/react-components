import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Item from "./Item";
import styles from "./styles.css";

class HeaderItem extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    icon: PropTypes.element
  };

  render() {
    const { children, className, icon, ...otherProps } = this.props;

    return (
      <Item
        className={classNames(className, styles.header_item)}
        {...otherProps}
      >
        {icon &&
          <div className={styles.header_icon}>
            {icon}
          </div>}
        {children}
      </Item>
    );
  }
}

export default HeaderItem;
