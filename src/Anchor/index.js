import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import View from "../core/View";
import ThemedComponent from "../utils/theming/ThemedComponent";

import styles from "./styles.css";

export default class Anchor extends ThemedComponent {
  static propTypes = {
    autoFocus: PropTypes.bool,
    className: PropTypes.string,
    tabIndex: PropTypes.number,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    children: PropTypes.node.isRequired,
    testId: PropTypes.string
  };

  static defaultProps = {
    tabIndex: 0
  };

  constructor(props, context) {
    super(props, context, {
      namespace: "Anchor",
      styles
    });

    this.state = {
      isFocused: false
    };

    this.mouseInitiated = false;
  }

  componentDidMount() {
    const { autoFocus } = this.props;

    if (autoFocus) {
      this.anchorElement.focus();
    }
  }

  /**
   * Necessary to not show focus styling when focused by mouse
   */
  onMouseDown = () => {
    this.mouseInitiated = true;

    setTimeout(() => {
      this.mouseInitiated = false;
    }, 0);
  };

  onFocus = event => {
    const { onFocus } = this.props;
    onFocus && onFocus(event);

    if (this.mouseInitiated) {
      return;
    }

    this.setState({
      isFocused: true
    });
  };

  onBlur = event => {
    const { onBlur } = this.props;
    onBlur && onBlur(event);

    this.setState({
      isFocused: false
    });
  };

  render() {
    const { theme } = this;
    const {
      className,
      tabIndex,
      children,
      testId,
      ...anchorProps
    } = this.props;
    const { isFocused } = this.state;

    return (
      <View
        className={theme.container}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        testId={testId}
        onMouseDown={this.onMouseDown}
      >
        <a
          className={classNames(className, theme.anchor, {
            [theme.focused]: isFocused
          })}
          ref={ref => {
            this.anchorElement = ref;
          }}
          tabIndex={tabIndex}
          {...anchorProps}
        >
          {children}
        </a>
      </View>
    );
  }
}
