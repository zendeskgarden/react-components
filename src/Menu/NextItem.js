import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Selectable from "../core/Selectable";
import { Item } from "./Item";
import styles from "./styles.css";

class NextItem extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
  };

  render() {
    const { children, className, ...otherProps } = this.props;

    return (
      <Item className={classNames(className, styles.next_item)} {...otherProps}>
        {children}
      </Item>
    );
  }
}

export default Selectable(NextItem, {
  action: (props, event) => {
    const { onClick, value } = props;
    onClick && onClick(value, event);
  },
  preventDefault: true
});
