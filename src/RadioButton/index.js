import React from "react";
import PropTypes from "prop-types";
import uuid from "uuid";
import classNames from "classnames";

import View from "../core/View";
import ThemedComponent from "../utils/theming/ThemedComponent";
import styles from "./styles.css";

export default class RadioButton extends ThemedComponent {
  static propTypes = {
    checked: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    defaultChecked: PropTypes.bool,
    dir: PropTypes.oneOf(["ltr", "rtl"]),
    disabled: PropTypes.bool,
    hint: PropTypes.node,
    id: PropTypes.string,
    muted: PropTypes.bool,
    name: PropTypes.string,
    onChange: PropTypes.func,
    tabIndex: PropTypes.number,
    testId: PropTypes.string,
    title: PropTypes.string,
    /** <a href="#view">See View</a> */
    tooltipPositioning: () => {},
    value: PropTypes.any,
    validation: PropTypes.oneOf(["error", "warning", "success"]),
    validationText: PropTypes.string
  };

  static defaultProps = {
    dir: "ltr"
  };

  constructor(props, context) {
    super(props, context, {
      namespace: "RadioButton",
      styles
    });
    this.generatedId = uuid.v4();
    this.keyboard = true;
    this.state = {
      focused: false
    };
  }

  onChange = event => {
    const { value, onChange } = this.props;

    onChange && onChange(value, event);
  };

  render() {
    const {
      checked,
      children,
      className,
      defaultChecked,
      dir,
      disabled,
      hint,
      id,
      muted,
      name,
      tabIndex,
      testId,
      title,
      tooltipPositioning,
      validation,
      validationText
    } = this.props;

    const { focused } = this.state;
    const { theme } = this;

    const idAttribute = id || this.generatedId;

    return (
      <View
        className={classNames(
          theme.checkbox,
          theme.radio,
          theme[validation],
          {
            [theme.focused]: focused,
            [theme.rtl]: dir === "rtl",
            [theme.disabled]: disabled,
            [theme.noLabel]: !children
          },
          className
        )}
        title={title}
        tooltipPositioning={tooltipPositioning}
      >
        <input
          checked={checked}
          className={theme.input}
          data-test-id={testId}
          defaultChecked={defaultChecked}
          disabled={disabled}
          id={idAttribute}
          name={name}
          ref={ref => {
            this.input = ref;
          }}
          onBlur={() => this.setState({ focused: false })}
          onChange={this.onChange}
          onFocus={() => {
            this.setState({ focused: this.keyboard });
            this.keyboard = true;
          }}
          tabIndex={tabIndex}
          type="radio"
        />
        <label
          className={classNames(theme.label, {
            [theme.muted]: muted
          })}
          dir={dir}
          htmlFor={idAttribute}
          onMouseUp={() => {
            this.keyboard = false;
          }}
        >
          {children}
        </label>
        {hint &&
          <small className={styles.hint}>
            {hint}
          </small>}
        {validation &&
          validationText &&
          <small className={theme.message}>
            {validationText}
          </small>}
      </View>
    );
  }
}
