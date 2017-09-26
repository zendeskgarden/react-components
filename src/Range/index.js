import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import uuid from "uuid";

import View from "../core/View";
import ThemedComponent from "../utils/theming/ThemedComponent";
import styles from "./styles.css";

export default class Range extends ThemedComponent {
  static propTypes = {
    className: PropTypes.string,
    defaultValue: PropTypes.number,
    disabled: PropTypes.bool,
    hint: PropTypes.node,
    id: PropTypes.string,
    label: PropTypes.string,
    max: PropTypes.number,
    min: PropTypes.number,
    onChange: PropTypes.func,
    size: PropTypes.oneOf(["small", "medium"]),
    step: PropTypes.number,
    tabIndex: PropTypes.number,
    testId: PropTypes.string,
    title: PropTypes.string,
    value: PropTypes.number,
    validation: PropTypes.oneOf(["error", "warning", "success"]),
    validationText: PropTypes.string
  };

  static defaultProps = {
    min: 0,
    max: 100,
    size: "medium",
    step: 1
  };

  constructor(props, context) {
    super(props, context, {
      namespace: "Range",
      styles
    });
    this.generatedId = uuid.v4();
    this.state = {
      focused: false,
      bgWidth: 0
    };
  }

  componentDidMount() {
    this.setState({
      bgWidth: this.getBgWidth()
    });
  }

  getId = () => this.props.id || this.generatedId;

  onChange = event => {
    const { onChange } = this.props;

    onChange && onChange(parseFloat(event.target.value), event);

    this.setState({ bgWidth: this.getBgWidth() });
  };

  getBgWidth() {
    let { max, min } = this.props;
    const { value } = this.input;

    if (parseFloat(max) < parseFloat(min)) {
      max = 100;
    }

    return 100 * (value - min) / (max - min);
  }

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
      defaultValue,
      disabled,
      hint,
      max,
      min,
      size,
      step,
      tabIndex,
      testId,
      title,
      value,
      validation,
      validationText
    } = this.props;

    const { focused, bgWidth } = this.state;
    const { theme } = this;

    return (
      <View
        className={classNames(
          theme.range,
          theme[`size_${size}`],
          theme[validation],
          {
            [theme.focused]: focused
          },
          className
        )}
      >
        {this.renderLabel()}
        {hint &&
          <small className={theme.hint}>
            {hint}
          </small>}
        <input
          className={theme.input}
          data-test-id={testId}
          defaultValue={defaultValue}
          disabled={disabled}
          id={this.getId()}
          max={max}
          min={min}
          onBlur={() => this.setState({ focused: false })}
          onClick={this.onChange}
          onChange={this.onChange}
          onFocus={() => this.setState({ focused: true })}
          step={step}
          style={{ backgroundSize: `${bgWidth}%` }}
          tabIndex={tabIndex}
          type="range"
          title={title}
          value={value}
          ref={ref => {
            this.input = ref;
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
