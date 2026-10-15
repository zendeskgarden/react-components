/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { ButtonHTMLAttributes, forwardRef, useEffect } from 'react';
import XStrokeIcon from 'svg-icons-legacy/src/16/x-stroke.svg';

import { useSheetContext } from '../../hooks/sheet/useSheetContext';
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
        aria-label="Close Sheet"
        ref={ref}
        {...props}
        data-garden-id={COMPONENT_IDS['chrome.sheet_close']}
        data-garden-version={PACKAGE_VERSION}
      >
        <XStrokeIcon />
      </StyledSheetClose>
    );
  }
);

SheetClose.displayName = 'Sheet.Close';

/**
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const Close = SheetClose;
