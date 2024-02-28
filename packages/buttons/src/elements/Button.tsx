/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { IButtonProps, SIZE } from '../types';
import { StyledButton } from '../styled';
import { useSplitButtonContext } from '../utils/useSplitButtonContext';
import { StartIcon } from './components/StartIcon';
import { EndIcon } from './components/EndIcon';

const ButtonComponent = forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
  const splitButtonContext = useSplitButtonContext();

  const computedProps = {
    ...props,
    focusInset: props.focusInset || splitButtonContext
  };

  return <StyledButton {...computedProps} ref={ref} />;
});

ButtonComponent.displayName = 'Button';

ButtonComponent.propTypes = {
  isNeutral: PropTypes.bool,
  isPrimary: PropTypes.bool,
  isDanger: PropTypes.bool,
  isPill: PropTypes.bool,
  isBasic: PropTypes.bool,
  focusInset: PropTypes.bool,
  isLink: PropTypes.bool,
  isStretched: PropTypes.bool,
  size: PropTypes.oneOf(SIZE)
};

ButtonComponent.defaultProps = {
  size: 'medium'
};

/**
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const Button = ButtonComponent as typeof ButtonComponent & {
  EndIcon: typeof EndIcon;
  StartIcon: typeof StartIcon;
};

Button.EndIcon = EndIcon;
Button.StartIcon = StartIcon;
