import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import View from "../core/View";

import styles from "./styles.css";
import accessibilityStyles from "../utils/styling/accessibility.css";

export default class Label extends Component {
  static propTypes = {
    avatar: PropTypes.node,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    dir: PropTypes.oneOf(["ltr", "rtl"]),
    onRemove: PropTypes.func,
    pill: PropTypes.bool,
    round: PropTypes.bool,
    size: PropTypes.oneOf(["small", "medium", "large"]),
    stretched: PropTypes.bool,
    tabIndex: PropTypes.number,
    /** Must be wrapped by a <a href="#tooltipprovider">TooltipProvider</a> */
    title: PropTypes.string,
    /** <a href="#view">See View</a> for positioning options */
    tooltipPositioning: () => {},
    type: PropTypes.oneOf([
      "default",
      "dark",
      "light",
      "success",
      "warning",
      "error"
    ]),
    deleteAccessibilityMessage: PropTypes.string
  };

  static defaultProps = {
    dir: "ltr",
    size: "medium",
    stretched: false,
    type: "default",
    deleteAccessibilityMessage: "Press delete to remove this label."
  };

  renderAvatar = avatar =>
    React.cloneElement(avatar, {
      className: classNames(styles.avatar, avatar.props.className)
    });

  onKeyboardRemove = e => {
    const { onRemove } = this.props;

    e.preventDefault();
    onRemove(e);
  };

  renderRemove = onRemove =>
    <button tabIndex={-1} className={styles.remove} onClick={onRemove} />;

  render() {
    const {
      avatar,
      children,
      className,
      deleteAccessibilityMessage,
      dir,
      onRemove,
      pill,
      round,
      size,
      stretched,
      tabIndex,
      type,
      title,
      tooltipPositioning
    } = this.props;

    return (
      <View
        className={classNames(
          styles[type],
          styles[size],
          {
            [styles.pill]: pill,
            [styles.round]: round,
            [styles.rtl]: dir === "rtl",
            [styles.stretched]: stretched
          },
          className
        )}
        onDelete={onRemove && this.onKeyboardRemove}
        tabIndex={tabIndex}
        title={title}
        tooltipPositioning={tooltipPositioning}
      >
        {avatar && this.renderAvatar(avatar)}
        <span>
          {children}
        </span>
        {onRemove &&
          <span className={accessibilityStyles["u-visibility-screenreader"]}>
            {deleteAccessibilityMessage}
          </span>}
        {onRemove && this.renderRemove(onRemove)}
      </View>
    );
  }
}
