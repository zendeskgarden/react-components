/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Button, { IButtonProps } from './Button';

export interface IToggleButtonProps extends IButtonProps {
  /**
   * Determines if the button is pressed. Use "mixed" to indicate that
   * the toggle controls other elements which do not share the same value.
   */
  isPressed?: boolean | 'mixed';
}

/**
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
const ToggleButton: React.FunctionComponent<
  IToggleButtonProps & React.RefAttributes<HTMLButtonElement>
> = React.forwardRef<HTMLButtonElement, IToggleButtonProps>(({ isPressed, ...otherProps }, ref) => (
  <Button aria-pressed={isPressed} ref={ref} {...otherProps} />
));

ToggleButton.displayName = 'ToggleButton';

ToggleButton.propTypes = {
  ...Button.propTypes,
  isPressed: PropTypes.oneOf([true, false, 'mixed'])
};

ToggleButton.defaultProps = {
  isPressed: false,
  size: 'medium'
};

export default ToggleButton;
