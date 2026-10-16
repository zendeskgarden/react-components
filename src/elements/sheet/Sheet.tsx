/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useId } from '@zendeskgarden/container-utilities';
import PropTypes from 'prop-types';
import { useRef, useMemo, useState, forwardRef } from 'react';
import { mergeRefs } from 'react-merge-refs';

import { SheetProvider } from '../../context/sheet/SheetContext';
import { ISheetProps, SHEET_PLACEMENT } from '../../types/elements';
import { useFocusableMount } from '../../utils/sheet/useFocusableMount';
import { StyledSheet } from '../../views/sheet/StyledSheet';
import { StyledSheetWrapper } from '../../views/sheet/StyledSheetWrapper';
import { COMPONENT_IDS, getInertValue } from '../utils';
import { Body } from './Body';
import { Close } from './Close';
import { Description } from './Description';
import { Footer } from './Footer';
import { FooterItem } from './FooterItem';
import { Header } from './Header';
import { Title } from './Title';

const SheetComponent = forwardRef<HTMLElement, ISheetProps>(
  (
    {
      id,
      isOpen,
      isAnimated = true,
      focusOnMount,
      restoreFocus,
      placement = 'end',
      size = '380px',
      children,
      ...props
    },
    ref
  ) => {
    const sheetRef = useRef<HTMLElement>(null);
    const [isCloseButtonPresent, setIsCloseButtonPresent] = useState<boolean>(false);
    const idPrefix = useId(id);
    const titleId = `${idPrefix}--title`;
    const descriptionId = `${idPrefix}--description`;

    const sheetContext = useMemo(
      () => ({
        titleId,
        descriptionId,
        isCloseButtonPresent,
        setIsCloseButtonPresent
      }),
      [titleId, descriptionId, isCloseButtonPresent]
    );

    useFocusableMount({ targetRef: sheetRef, isMounted: isOpen, focusOnMount, restoreFocus });

    return (
      <SheetProvider value={sheetContext}>
        <StyledSheet
          inert={getInertValue(!isOpen)}
          $isOpen={isOpen}
          $isAnimated={isAnimated}
          $placement={placement}
          $size={size}
          tabIndex={-1}
          id={idPrefix}
          aria-labelledby={titleId}
          aria-describedby={descriptionId}
          ref={mergeRefs([sheetRef, ref])}
          {...props}
          data-garden-id={COMPONENT_IDS['chrome.sheet']}
          data-garden-version={PACKAGE_VERSION}
        >
          <StyledSheetWrapper
            $isOpen={isOpen}
            $isAnimated={isAnimated}
            $placement={placement}
            $size={size}
            data-garden-id={COMPONENT_IDS['chrome.sheet_wrapper']}
            data-garden-version={PACKAGE_VERSION}
          >
            {children}
          </StyledSheetWrapper>
        </StyledSheet>
      </SheetProvider>
    );
  }
);

SheetComponent.displayName = 'Sheet';

SheetComponent.propTypes = {
  id: PropTypes.string,
  isOpen: PropTypes.bool,
  isAnimated: PropTypes.bool,
  focusOnMount: PropTypes.bool,
  restoreFocus: PropTypes.bool,
  placement: PropTypes.oneOf(SHEET_PLACEMENT),
  size: PropTypes.string
};

/**
 * @extends HTMLAttributes<HTMLElement>
 */
export const Sheet = SheetComponent as typeof SheetComponent & {
  Body: typeof Body;
  Close: typeof Close;
  Description: typeof Description;
  Footer: typeof Footer;
  FooterItem: typeof FooterItem;
  Header: typeof Header;
  Title: typeof Title;
};

Sheet.Body = Body;
Sheet.Close = Close;
Sheet.Description = Description;
Sheet.Footer = Footer;
Sheet.FooterItem = FooterItem;
Sheet.Header = Header;
Sheet.Title = Title;
