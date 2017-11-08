<<<<<<< HEAD
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import ThemedComponent from "../ThemedComponent";
=======
import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

>>>>>>> Menu: Add new selectable menu types
import Selectable from "../core/Selectable";
import { Item } from "./Item";
import styles from "./styles.css";

<<<<<<< HEAD
class MediaItem extends ThemedComponent {
=======
class MediaItem extends Component {
>>>>>>> Menu: Add new selectable menu types
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    media: PropTypes.element
  };

<<<<<<< HEAD
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
      media,
      metaInformation,
      ...otherProps
    } = this.props;
    const { theme } = this;

    return (
      <Item className={classNames(className, theme.media_item)} {...otherProps}>
        {media &&
          <div className={theme.media_figure}>
            {media}
          </div>}
        <div className={theme.media_body}>
=======
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
>>>>>>> Menu: Add new selectable menu types
          {children}
          {metaInformation &&
            <div className={theme.meta}>
              {metaInformation}
            </div>}
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
<<<<<<< HEAD
  selectEvent: "onClick",
=======
>>>>>>> Menu: Add new selectable menu types
  preventDefault: true
});
