import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Selectable from "../core/Selectable";
import { Item } from "./Item";
import styles from "./styles.css";

class MediaItem extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    media: PropTypes.element
  };

  render() {
    const { children, className, media, ...otherProps } = this.props;

    return (
      <Item
        className={classNames(className, styles.media_item)}
        {...otherProps}
      >
        {media &&
          <div className={styles.media_figure}>
            {media}
          </div>}
        <div className={styles.media_body}>
          {children}
        </div>
      </Item>
    );
  }
}

export default Selectable(MediaItem, {
  action: (props, event) => {
    const { onClick, value } = props;
    onClick && onClick(value, event);
  },
  preventDefault: true
});
