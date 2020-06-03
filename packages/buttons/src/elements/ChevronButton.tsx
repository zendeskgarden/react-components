/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import IconButton, { IIconButtonProps } from './IconButton';
import ChevronDownIcon from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg';

/**
 * An `IconButton` with an embedded chevron icon
 */
const ChevronButton: React.FunctionComponent<
  IIconButtonProps & React.RefAttributes<HTMLButtonElement>
> = React.forwardRef<HTMLButtonElement, IIconButtonProps>(({ ...buttonProps }, ref) => (
  <IconButton ref={ref} {...buttonProps}>
    <ChevronDownIcon />
  </IconButton>
));

ChevronButton.displayName = 'ChevronButton';

ChevronButton.propTypes = IconButton.propTypes;

ChevronButton.defaultProps = {
  isBasic: false,
  isPill: false,
  size: 'medium'
};

export default ChevronButton;
