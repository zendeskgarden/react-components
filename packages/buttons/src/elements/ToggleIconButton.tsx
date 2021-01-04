/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import IconButton, { IIconButtonProps } from './IconButton';

export interface IToggleIconButtonProps extends IIconButtonProps {
  /**
   * Determines if the button is pressed. Use "mixed" to indicate that the
   * toggle controls other elements which do not share the same value.
   */
  isPressed?: boolean | 'mixed';
}

/**
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
const ToggleIconButton: React.FunctionComponent<
  IToggleIconButtonProps & React.RefAttributes<HTMLButtonElement>
> = React.forwardRef<HTMLButtonElement, IToggleIconButtonProps>(
  ({ isPressed, ...otherProps }, ref) => (
    <IconButton aria-pressed={isPressed} ref={ref} {...otherProps} />
  )
);

ToggleIconButton.displayName = 'ToggleIconButton';

ToggleIconButton.propTypes = {
  ...IconButton.propTypes,
  isPressed: PropTypes.oneOf([true, false, 'mixed'])
};

ToggleIconButton.defaultProps = {
  isPill: true,
  isBasic: true,
  isPressed: false,
  size: 'medium'
};

export default ToggleIconButton;
