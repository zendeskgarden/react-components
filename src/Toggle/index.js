import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import classNames from 'classnames';

import ThemedComponent from '../utils/theming/ThemedComponent';
import View from '../core/View';

import styles from './styles.css';

export default class Toggle extends ThemedComponent {
  static propTypes = {
    children: PropTypes.node,
    checked: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    dir: PropTypes.oneOf(['ltr', 'rtl']),
    disabled: PropTypes.bool,
    hint: PropTypes.node,
    muted: PropTypes.bool,
    onChange: PropTypes.func,
    tabIndex: PropTypes.number,
    testId: PropTypes.string
  };

  static defaultProps = {
    dir: 'ltr',
    muted: false
  };

  constructor(props, context) {
    super(props, context, {
      namespace: 'Toggle',
      styles
    });

    this.id = uuid.v4();

    this.handlers = {
      '13': this.toggle,
      '37': this.onArrowLeft,
      '39': this.onArrowRight
    };

    this.state = {
      focused: false
    };
  }

  onChange = event => {
    const { onChange } = this.props;

    onChange && onChange(event.target.checked);
  };

  onArrowLeft = () => {
    const { onChange } = this.props;
    const { checked } = this.input;

    if (checked) {
      this.input.checked = false;
      onChange && onChange(false);
    }
  };

  onArrowRight = () => {
    const { onChange } = this.props;
    const { checked } = this.input;

    if (!checked) {
      this.input.checked = true;
      onChange && onChange(true);
    }
  };

  render() {
    const {
      children,
      checked,
      defaultChecked,
      dir,
      disabled,
      hint,
      muted,
      tabIndex,
      testId
    } = this.props;

    const { focused } = this.state;
    const { theme } = this;

    return (
      <View
        className={classNames(theme.toggle, {
          [theme.disabled]: disabled,
          [theme.focused]: focused,
          [theme.rtl]: dir === 'rtl'
        })}
      >
        <input
          checked={checked}
          className={theme.input}
          data-test-id={testId}
          defaultChecked={defaultChecked}
          disabled={disabled}
          id={this.id}
          onBlur={() => this.setState({ focused: false })}
          onChange={this.onChange}
          onKeyDown={event => {
            const handler = this.handlers[event.keyCode];
            handler && handler();
          }}
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
          className={classNames(theme.label, {
            [theme.muted]: muted
          })}
          dir={dir}
          htmlFor={this.id}
          onMouseUp={() => {
            this.keyboard = false;
          }}
        >
          {children}
        </label>
        {hint && <small className={theme.hint}>{hint}</small>}
      </View>
    );
  }
}
