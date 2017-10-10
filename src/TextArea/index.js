import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import uuid from "uuid";

import View from "../core/View";
import ThemedComponent from "../utils/theming/ThemedComponent";
import Core from "./Core";

import styles from "./styles.css";

export default class TextArea extends ThemedComponent {
  static Core = Core;

  static propTypes = {
    autoComplete: PropTypes.oneOf(["on", "off"]),
    autoFocus: PropTypes.bool,
    className: PropTypes.string,
    isFocused: PropTypes.bool,
    defaultValue: PropTypes.string,
    dir: PropTypes.oneOf(["ltr", "rtl"]),
    disabled: PropTypes.bool.isRequired,
    hint: PropTypes.node,
    id: PropTypes.string,
    label: PropTypes.node,
    name: PropTypes.string,
    maxLength: PropTypes.number,
    onArrowDown: PropTypes.func,
    onArrowLeft: PropTypes.func,
    onArrowRight: PropTypes.func,
    onArrowUp: PropTypes.func,
    onBlur: PropTypes.func,
    onClick: PropTypes.func,
    onChange: PropTypes.func,
    onDelete: PropTypes.func,
    onEnter: PropTypes.func,
    onEscape: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    onPaste: PropTypes.func,
    placeholder: PropTypes.string,
    resizable: PropTypes.bool,
    size: PropTypes.oneOf(["small", "medium"]),
    tabIndex: PropTypes.number,
    testId: PropTypes.string,
    /** Must be wrapped by a <a href="#tooltipprovider">TooltipProvider</a> */
    title: PropTypes.string,
    /** <a href="#view">See View</a> for positioning options */
    tooltipPositioning: () => {},
    type: PropTypes.oneOf(["default", "bare"]),
    validation: PropTypes.oneOf(["error", "warning", "success"]),
    validationText: PropTypes.string,
    value: PropTypes.string
  };

  static defaultProps = {
    autoComplete: "off",
    dir: "ltr",
    disabled: false,
    resizable: false,
    size: "medium",
    type: "default"
  };

  constructor(props, context) {
    super(props, context, {
      namespace: "TextArea",
      styles
    });

    this.generatedId = uuid.v4();
  }

  getId = () => this.props.id || this.generatedId;

  renderLabel = () => {
    const { label } = this.props;
    const { theme } = this;

    if (!label) {
      return null;
    }

    return (
      <label className={theme.label} htmlFor={this.getId()}>
        {label}
      </label>
    );
  };

  render() {
    const {
      className,
      dir,
      disabled,
      hint,
      type,
      resizable,
      size,
      title,
      tooltipPositioning,
      validation,
      validationText,
      ...other
    } = this.props;

    const { theme } = this;

    return (
      <View
        className={classNames(
          theme.txt,
          theme[`size_${size}`],
          theme[validation],
          {
            [theme.disabled]: disabled,
            [theme.rtl]: dir === "rtl"
          },
          className
        )}
        title={title}
        tooltipPositioning={tooltipPositioning}
      >
        {this.renderLabel()}
        {hint &&
          <small className={theme.hint}>
            {hint}
          </small>}
        <Core
          {...other}
          disabled={disabled}
          dir={dir}
          className={classNames(theme.input, {
            [theme.resizable]: resizable,
            [theme.style_bare]: type === "bare"
          })}
          id={this.getId()}
          ref={ref => {
            if (ref && ref.input) {
              this.input = ref.input;
            }
          }}
        />
        {validation &&
          validationText &&
          <small className={theme.message}>
            {validationText}
          </small>}
      </View>
    );
  }
}
