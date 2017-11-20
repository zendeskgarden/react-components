import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import ThemedComponent from "../ThemedComponent";
import Selectable from "../core/Selectable";
import { Item } from "./Item";
import styles from "./styles.css";

class MediaItem extends ThemedComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    media: PropTypes.element
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
  selectEvent: "onClick",
  preventDefault: true
});
