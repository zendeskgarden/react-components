import React from "react";
import PropTypes from "prop-types";
import uuid from "uuid";
import classNames from "classnames";

import ThemedComponent from "../utils/theming/ThemedComponent";
import View from "../core/View";

import styles from "./styles.css";

export default class Checkbox extends ThemedComponent {
  static propTypes = {
    checked: PropTypes.bool,
    children: PropTypes.node,
    defaultChecked: PropTypes.bool,
    dir: PropTypes.oneOf(["ltr", "rtl"]),
    disabled: PropTypes.bool,
    hint: PropTypes.node,
    id: PropTypes.string,
    indeterminate: PropTypes.bool,
    muted: PropTypes.bool,
    onChange: PropTypes.func,
    tabIndex: PropTypes.number,
    testId: PropTypes.string,
    title: PropTypes.string,
    /** <a href="#view">See View</a> */
    tooltipPositioning: () => {},
    validation: PropTypes.oneOf(["error", "warning", "success"]),
    validationText: PropTypes.string
  };

  static defaultProps = {
    dir: "ltr",
    muted: false
  };

  constructor(props, context) {
    super(props, context, {
      namespace: "Checkbox",
      styles
    });
    this.generatedId = uuid.v4();
    this.keyboard = true;
    this.state = {
      focused: false
    };
  }

  /**
   * When an indeterminate checkbox is toggled, it should match native checkbox 
   * functionality and always return true as the new state.
   */
  onChange = event => {
    const { onChange, indeterminate } = this.props;

    onChange && onChange(indeterminate ? true : event.target.checked, event);
  };

  /**
   * Since indeterminate is not a valid INPUT prop, we must dynamically add 
   * this attribute when the component is rendered.
   */
  componentDidMount() {
    const { indeterminate } = this.props;

    if (indeterminate) {
      this.input.setAttribute("indeterminate", true);
    } else {
      this.input.removeAttribute("indeterminate");
    }
  }

  /**
   * Since indeterminate is not a valid INPUT prop, we must dynamically add 
   * this attribute when the component is updated.
   */
  componentWillUpdate({ indeterminate }) {
    if (indeterminate) {
      this.input.setAttribute("indeterminate", true);
    } else {
      this.input.removeAttribute("indeterminate");
    }
  }

  render() {
    const {
      checked,
      children,
      defaultChecked,
      disabled,
      dir,
      hint,
      id,
      indeterminate,
      muted,
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
        className={classNames(theme.checkbox, theme[validation], {
          [theme.focused]: focused,
          [theme.rtl]: dir === "rtl",
          [theme.disabled]: disabled,
          [theme.noLabel]: !children,
          [theme.indeterminate]: indeterminate
        })}
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
          onBlur={() => this.setState({ focused: false })}
          onChange={this.onChange}
          onFocus={() => {
            this.setState({ focused: this.keyboard });
            this.keyboard = true;
          }}
          ref={ref => {
            this.input = ref;
          }}
          tabIndex={tabIndex}
          type="checkbox"
        />
        <label
          className={classNames(theme.label, { [theme.muted]: muted })}
          dir={dir}
          htmlFor={idAttribute}
          onMouseUp={() => {
            this.keyboard = false;
          }}
        >
          {children}
        </label>
        {hint &&
          <small className={theme.hint}>
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
