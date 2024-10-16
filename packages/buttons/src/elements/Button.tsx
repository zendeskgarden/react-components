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

const ButtonComponent = forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      focusInset,
      isBasic,
      isDanger,
      isLink,
      isNeutral,
      isPill,
      isPrimary,
      isStretched,
      size,
      ...other
    },
    ref
  ) => {
    const splitButtonFocusInset = useSplitButtonContext();

    return (
      <StyledButton
        {...other}
        $focusInset={focusInset || splitButtonFocusInset}
        $isBasic={isBasic}
        $isDanger={isDanger}
        $isLink={isLink}
        $isNeutral={isNeutral}
        $isPill={isPill}
        $isPrimary={isPrimary}
        $isStretched={isStretched}
        $isUnderlined={isLink}
        $size={size}
        ref={ref}
      />
    );
  }
);

ButtonComponent.displayName = 'Button';

ButtonComponent.propTypes = {
  focusInset: PropTypes.bool,
  isBasic: PropTypes.bool,
  isDanger: PropTypes.bool,
  isLink: PropTypes.bool,
  isNeutral: PropTypes.bool,
  isPill: PropTypes.bool,
  isPrimary: PropTypes.bool,
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
