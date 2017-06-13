import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import uuid from 'uuid';

import View from '../core/View';
import ThemedComponent from '../utils/theming/ThemedComponent';
import Core from './Core';

import styles from './styles.css';

export default class TextArea extends ThemedComponent {
  static Core = Core;

  static propTypes = {
    autoComplete: PropTypes.oneOf(['on', 'off']),
    autoFocus: PropTypes.bool,
    className: PropTypes.string,
    isFocused: PropTypes.bool,
    defaultValue: PropTypes.string,
    dir: PropTypes.oneOf(['ltr', 'rtl']),
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
    onChangeText: PropTypes.func,
    onDelete: PropTypes.func,
    onEnter: PropTypes.func,
    onEscape: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    onPaste: PropTypes.func,
    placeholder: PropTypes.string,
    resizable: PropTypes.bool,
    tabIndex: PropTypes.number,
    testId: PropTypes.string,
    title: PropTypes.string,
    /** <a href="#view">See View</a> */
    tooltipPositioning: () => {},
    validation: PropTypes.oneOf(['error', 'warning', 'success']),
    validationText: PropTypes.string,
    value: PropTypes.string
  };

  static defaultProps = {
    autoComplete: 'off',
    disabled: false,
    resizable: false,
    type: 'text'
  };

  constructor(props, context) {
    super(props, context, {
      namespace: 'TextArea',
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
      disabled,
      hint,
      resizable,
      title,
      tooltipPositioning,
      validation,
      validationText,
      ...other
    } = this.props;

    const { theme } = this;

    return (
      <View
        className={classNames(theme.txt, theme[validation], {
          [theme.disabled]: disabled
        })}
        title={title}
        tooltipPositioning={tooltipPositioning}
      >
        {this.renderLabel()}
        <Core
          {...other}
          disabled={disabled}
          className={classNames(
            theme.input,
            {
              [theme.resizable]: resizable
            },
            className
          )}
          id={this.getId()}
          ref={ref => {
            if (ref && ref.input) {
              this.input = ref.input;
            }
          }}
        />
        {validation &&
          validationText &&
          <small className={theme.message}>{validationText}</small>}
        {hint && <small className={theme.hint}>{hint}</small>}
      </View>
    );
  }
}
