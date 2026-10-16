/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import XIcon from '@zendeskgarden/svg-icons/src/x.svg';
import { ButtonHTMLAttributes, forwardRef, useEffect } from 'react';

import { useSheetContext } from '../../hooks/sheet/useSheetContext';
import { StyledIcon } from '../../views/button/StyledIcon';
import { StyledSheetClose } from '../../views/sheet/StyledSheetClose';
import { COMPONENT_IDS } from '../utils';

const SheetClose = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  (props, ref) => {
    const { setIsCloseButtonPresent } = useSheetContext();

    useEffect(() => {
      setIsCloseButtonPresent(true);

      return () => setIsCloseButtonPresent(false);
    }, [setIsCloseButtonPresent]);

    return (
      <StyledSheetClose
        type="button"
        aria-label="Close Sheet"
        $isBasic
        $isPill
        $size="medium"
        ref={ref}
        {...props}
        data-garden-id={COMPONENT_IDS['chrome.sheet_close']}
        data-garden-version={PACKAGE_VERSION}
      >
        <StyledIcon
          data-garden-id={COMPONENT_IDS['buttons.icon']}
          data-garden-version={PACKAGE_VERSION}
        >
          <XIcon />
        </StyledIcon>
      </StyledSheetClose>
    );
  }
);

SheetClose.displayName = 'Sheet.Close';

/**
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const Close = SheetClose;
