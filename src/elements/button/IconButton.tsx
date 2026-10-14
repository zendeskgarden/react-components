/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import { useSplitButtonContext } from '../../hooks/button/useSplitButtonContext';
import { IIconButtonProps, BUTTON_SIZE } from '../../types/elements';
import { StyledIcon } from '../../views/button/StyledIcon';
import { StyledIconButton } from '../../views/button/StyledIconButton';
import { COMPONENT_IDS } from '../utils';

/**
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const IconButton = forwardRef<HTMLButtonElement, IIconButtonProps>(
  (
    {
      children,
      focusInset,
      isBasic = true,
      isDanger,
      isNeutral,
      isPill = true,
      isPrimary,
      isRotated,
      size = 'medium',
      type = 'button',
      ...other
    },
    ref
  ) => {
    const splitButtonFocusInset = useSplitButtonContext();

    return (
      <StyledIconButton
        {...other}
        type={type}
        $isBasic={isBasic}
        $isDanger={isDanger}
        $isNeutral={isNeutral}
        $isPill={isPill}
        $isPrimary={isPrimary}
        $size={size}
        $focusInset={focusInset || splitButtonFocusInset}
        data-garden-id={COMPONENT_IDS['buttons.icon_button']}
        data-garden-version={PACKAGE_VERSION}
        ref={ref}
      >
        <StyledIcon
          $isRotated={isRotated}
          data-garden-id={COMPONENT_IDS['buttons.icon']}
          data-garden-version={PACKAGE_VERSION}
        >
          {children}
        </StyledIcon>
      </StyledIconButton>
    );
  }
);

IconButton.displayName = 'IconButton';

IconButton.propTypes = {
  focusInset: PropTypes.bool,
  isBasic: PropTypes.bool,
  isDanger: PropTypes.bool,
  isNeutral: PropTypes.bool,
  isPill: PropTypes.bool,
  isPrimary: PropTypes.bool,
  isRotated: PropTypes.bool,
  size: PropTypes.oneOf(BUTTON_SIZE)
};
