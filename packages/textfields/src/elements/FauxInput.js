/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { composeEventHandlers, ControlledComponent } from '@zendeskgarden/react-selection';
import PropTypes from 'prop-types';

import Input from '../views/Input';
const DIVInput = Input.withComponent('div');
const VALIDATION = {
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
  NONE: 'none'
};

/**
 * Accepts all `<div>` props
 */
export default class FauxInput extends ControlledComponent {
  static propTypes = {
    inputRef: PropTypes.func,
    /** Allows flush spacing of Tab elements */
    tagLayout: PropTypes.bool,
    /** Applies flex layout to support MediaFigure components */
    mediaLayout: PropTypes.bool,
    small: PropTypes.bool,
    /** Applies select styling */
    select: PropTypes.bool,
    /** Removes all borders and styling */
    bare: PropTypes.bool,
    disabled: PropTypes.bool,
    focused: PropTypes.bool,
    hovered: PropTypes.bool,
    /** Displays select open state */
    open: PropTypes.bool,
    validation: PropTypes.oneOf([
      VALIDATION.SUCCESS,
      VALIDATION.WARNING,
      VALIDATION.ERROR,
      VALIDATION.NONE
    ])
  };

  constructor(...args) {
    super(...args);

    this.state = {
      focused: false
    };
  }

  render() {
    const { onFocus, onBlur, children, inputRef, ...otherProps } = this.props;
    const { focused } = this.getControlledState();

    return (
      <DIVInput
        innerRef={inputRef}
        {...otherProps}
        onFocus={composeEventHandlers(onFocus, () => {
          this.setControlledState({ focused: true });
        })}
        onBlur={composeEventHandlers(onBlur, () => {
          this.setControlledState({ focused: false });
        })}
        focused={focused}
      >
        {children}
      </DIVInput>
    );
  }
}
