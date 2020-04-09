/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { ButtonHTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import IconButton from './IconButton';
import ChevronDownIcon from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg';

interface IChevronButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Apply danger styling */
  isDanger?: boolean;
  size?: 'small' | 'medium' | 'large';
  /** Applies primary button styling */
  isPrimary?: boolean;
  /** Applies basic button styling */
  isBasic?: boolean;
  /** Applies pill styling */
  isPill?: boolean;
  /** Applies inset `box-shadow` styling on focus */
  focusInset?: boolean;
  /** Rotates icon 180 degrees */
  isRotated?: boolean;
}

/**
 * An `IconButton` with an embedded chevron icon
 */
const ChevronButton: React.FunctionComponent<
  IChevronButtonProps & React.RefAttributes<HTMLButtonElement>
> = React.forwardRef<HTMLButtonElement, IChevronButtonProps>(({ ...buttonProps }, ref) => (
  <IconButton ref={ref} {...buttonProps}>
    <ChevronDownIcon />
  </IconButton>
));

ChevronButton.displayName = 'ChevronButton';

ChevronButton.propTypes = {
  isDanger: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  isPrimary: PropTypes.bool,
  isBasic: PropTypes.bool,
  isPill: PropTypes.bool,
  focusInset: PropTypes.bool,
  isRotated: PropTypes.bool
};

ChevronButton.defaultProps = {
  isBasic: false,
  isPill: false,
  size: 'medium'
};

export default ChevronButton;
