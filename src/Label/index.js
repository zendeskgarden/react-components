import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import View from "../core/View";

import ThemedComponent from "../utils/theming/ThemedComponent";
import styles from "./styles.css";
import accessibilityStyles from "../utils/styling/accessibility.css";

export default class Label extends ThemedComponent {
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
    testId: PropTypes.string,
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
    deleteAccessibilityMessage: PropTypes.string,
    selected: PropTypes.bool,
    onClick: PropTypes.func
  };

  static defaultProps = {
    dir: "ltr",
    size: "medium",
    stretched: false,
    type: "default",
    deleteAccessibilityMessage: "Press delete to remove this label."
  };

  constructor(props, context) {
    super(props, context, {
      namespace: "Label",
      styles
    });
  }

  renderAvatar = avatar =>
    React.cloneElement(avatar, {
      className: classNames(this.theme.avatar, avatar.props.className)
    });

  onKeyboardRemove = e => {
    const { onRemove } = this.props;

    e.preventDefault();
    onRemove(e);
  };

  renderRemove = onRemove => {
    const { theme } = this;
    const { testId } = this.props;
    return (
      <button
        tabIndex={-1}
        data-test-id={testId && `${testId}-remove`}
        className={theme.remove}
        onClick={onRemove}
      />
    );
  };

  render() {
    const { theme } = this;
    const {
      avatar,
      children,
      className,
      deleteAccessibilityMessage,
      dir,
      selected,
      onRemove,
      pill,
      round,
      size,
      stretched,
      tabIndex,
      onClick,
      testId,
      type,
      title,
      tooltipPositioning
    } = this.props;

    return (
      <View
        className={classNames(
          theme[type],
          theme[size],
          {
            [theme.pill]: pill,
            [theme.round]: round,
            [theme.rtl]: dir === "rtl",
            [theme.stretched]: stretched,
            [theme.is_focused]: selected
          },
          className
        )}
        onDelete={onRemove && this.onKeyboardRemove}
        tabIndex={tabIndex}
        testId={testId}
        title={title}
        tooltipPositioning={tooltipPositioning}
        onClick={onClick}
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
