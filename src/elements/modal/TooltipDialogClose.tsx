/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { ButtonHTMLAttributes, forwardRef } from 'react';
import XStrokeIcon from 'svg-icons-legacy/src/16/x-stroke.svg';

import { useTooltipDialogContext } from '../../hooks/modal/useTooltipDialogContext';
import { useText } from '../../theming/utils/useText';
import { StyledIcon } from '../../views/button/StyledIcon';
import { StyledTooltipDialogClose } from '../../views/modal/StyledTooltipDialogClose';
import { COMPONENT_IDS } from '../utils';

const CloseComponent = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  (props, ref) => {
    const { getCloseProps } = useTooltipDialogContext();

    const ariaLabel = useText(
      CloseComponent,
      props,
      'aria-label',
      'Close tooltip',
      props['aria-describedby'] === undefined /* has tooltip */
    );

    return (
      <StyledTooltipDialogClose
        type="button"
        {...(getCloseProps({
          ...props,
          'aria-label': ariaLabel!
        }) as ButtonHTMLAttributes<HTMLButtonElement>)}
        $isBasic
        $isPill
        $size="small"
        data-garden-id={COMPONENT_IDS['modals.tooltip_dialog.close']}
        data-garden-version={PACKAGE_VERSION}
        ref={ref}
      >
        <StyledIcon
          data-garden-id={COMPONENT_IDS['buttons.icon']}
          data-garden-version={PACKAGE_VERSION}
        >
          <XStrokeIcon />
        </StyledIcon>
      </StyledTooltipDialogClose>
    );
  }
);

CloseComponent.displayName = 'TooltipDialog.Close';

/**
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const Close = CloseComponent;
