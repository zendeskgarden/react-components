/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import { useSplitButtonContext } from '../../hooks/button/useSplitButtonContext';
import { IButtonProps, BUTTON_SIZE } from '../../types/elements';
import { StyledButton } from '../../views/button/StyledButton';
import { COMPONENT_IDS } from '../utils';
import { EndIcon } from './EndIcon';
import { StartIcon } from './StartIcon';

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
      size = 'medium',
      type = 'button',
      ...other
    },
    ref
  ) => {
    const splitButtonFocusInset = useSplitButtonContext();

    return (
      <StyledButton
        {...other}
        type={type}
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
        data-garden-id={COMPONENT_IDS['buttons.button']}
        data-garden-version={PACKAGE_VERSION}
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
  size: PropTypes.oneOf(BUTTON_SIZE)
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
