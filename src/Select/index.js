import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import uuid from "uuid";

import Menu from "../Menu";
import View from "../core/View";
import ThemedComponent from "../utils/theming/ThemedComponent";

import styles from "./styles.css";

export default class Select extends ThemedComponent {
  static Item = Menu.Item;
  static Separator = Menu.Separator;

  static propTypes = {
    children: PropTypes.node.isRequired,
    /**
     * This is for use in self-service-components only
     */
    className: PropTypes.string,
    dir: PropTypes.oneOf(["ltr", "rtl"]),
    disabled: PropTypes.bool,
    hint: PropTypes.node,
    inputClassName: PropTypes.string,
    label: PropTypes.node,
    maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onBlur: PropTypes.func,
    onClose: PropTypes.func,
    onFocus: PropTypes.func,
    onOpen: PropTypes.func,
    onChange: PropTypes.func,
    positioning: Menu.propTypes.positioning,
    selected: PropTypes.node,
    stretched: PropTypes.bool,
    size: PropTypes.oneOf(["small", "medium"]),
    tabIndex: PropTypes.number,
    testId: PropTypes.string,
    /** Must be wrapped by a <a href="#tooltipprovider">TooltipProvider</a> */
    title: PropTypes.string,
    /** <a href="#view">See View</a> for positioning options */
    tooltipPositioning: () => {},
    validation: PropTypes.oneOf(["error", "warning", "success"]),
    validationText: PropTypes.string
  };

  static defaultProps = {
    dir: "ltr",
    disabled: false,
    positioning: ["bottom_stretch", "top_stretch"],
    stretched: true,
    size: "medium",
    tabIndex: 0
  };

  constructor(props, context) {
    super(props, context, {
      namespace: "Select",
      styles
    });

    this.generatedId = uuid.v4();
    this.state = {
      open: false
    };
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

  onClick = e => {
    const { disabled } = this.props;

    if (disabled) {
      e.stopPropagation();
      e.preventDefault();
    }
  };

  onOpen = () => {
    const { onOpen } = this.props;
    this.setState({ open: true });
    onOpen && onOpen();
  };

  onClose = () => {
    const { onClose } = this.props;
    this.setState({ open: false });
    onClose && onClose();
  };

  render() {
    const {
      children,
      className,
      inputClassName,
      dir,
      disabled,
      hint,
      maxHeight,
      onBlur,
      onFocus,
      onChange,
      positioning,
      selected,
      size,
      stretched,
      tabIndex,
      testId,
      title,
      tooltipPositioning,
      validation,
      validationText
    } = this.props;

    const { open } = this.state;
    const { theme } = this;

    return (
      <View
        className={classNames(
          theme.txt,
          theme[validation],
          theme[`size_${size}`],
          {
            [theme.rtl]: dir === "rtl",
            [theme.stretched]: stretched,
            [theme.disabled]: disabled
          },
          className
        )}
        testId={testId}
      >
        {this.renderLabel()}
        {hint &&
          <small className={theme.hint}>
            {hint}
          </small>}
        <Menu
          dir={dir}
          maxHeight={maxHeight}
          onChange={onChange}
          positioning={positioning}
          onOpen={this.onOpen}
          onClose={this.onClose}
          trigger={
            <View
              className={classNames(
                theme.input,
                {
                  [theme.open]: open
                },
                inputClassName
              )}
              dir={dir}
              disabled={disabled}
              onBlur={onBlur}
              onClick={this.onClick}
              onFocus={onFocus}
              role="button"
              tabIndex={disabled ? null : tabIndex}
              title={title}
              tooltipPositioning={tooltipPositioning}
            >
              {selected || <span>&nbsp;</span>}
            </View>
          }
          size={size}
          stretched={stretched}
        >
          {children}
        </Menu>
        {validation &&
          validationText &&
          <small className={theme.message}>
            {validationText}
          </small>}
      </View>
    );
  }
}
