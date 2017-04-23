import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import uuid from 'uuid';

import Menu from '../Menu';
import View from '../core/View';
import ThemedComponent from '../utils/theming/ThemedComponent';

import styles from './styles.css';

export default class Select extends ThemedComponent {
  static Item = Menu.Item;
  static Separator = Menu.Separator;

  static propTypes = {
    children: PropTypes.node.isRequired,
    /**
     * This is for use in self-service-components only
     */
    className: PropTypes.string,
    dir: PropTypes.oneOf(['ltr', 'rtl']),
    disabled: PropTypes.bool,
    /**
     * This is for use in self-service-components only
     */
    hint: PropTypes.node,
    inputClassName: PropTypes.string,
    label: PropTypes.node,
    maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onBlur: PropTypes.func,
    onClose: PropTypes.func,
    onFocus: PropTypes.func,
    onOpen: PropTypes.func,
    onSelect: PropTypes.func,
    positioning: Menu.propTypes.positioning,
    selected: PropTypes.node,
    stretched: PropTypes.bool,
    tabIndex: PropTypes.number,
    testId: PropTypes.string,
    title: PropTypes.string,
    /** <a href="#View">See View</a> */
    tooltipPositioning: () => {},
    validation: PropTypes.oneOf(['error', 'warning', 'success'])
  };

  static defaultProps = {
    dir: 'ltr',
    disabled: false,
    positioning: ['bottom_stretch', 'top_stretch'],
    stretched: true,
    tabIndex: 0
  };

  constructor(props, context) {
    super(props, context, {
      namespace: 'Select',
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
      onSelect,
      positioning,
      selected,
      stretched,
      tabIndex,
      testId,
      title,
      tooltipPositioning,
      validation
    } = this.props;

    const { open } = this.state;
    const { theme } = this;

    return (
      <View
        className={classNames(
          theme.txt,
          theme[validation],
          {
            [theme.rtl]: dir === 'rtl',
            [theme.stretched]: stretched,
            [theme.disabled]: disabled
          },
          className
        )}
        testId={testId}
      >
        {this.renderLabel()}
        <Menu
          dir={dir}
          maxHeight={maxHeight}
          onSelect={onSelect}
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
              {selected}
            </View>
          }
          stretched={stretched}
        >
          {children}
        </Menu>
        {hint && <small className={theme.hint}>{hint}</small>}
      </View>
    );
  }
}
