/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { useUIDSeed } from 'react-uid';
import { mergeRefs } from 'react-merge-refs';

import { ISheetProps, PLACEMENT } from '../../types';
import { StyledSheet, StyledSheetWrapper } from '../../styled';
import { SheetContext } from '../../utils/useSheetContext';
import { useFocusableMount } from '../../utils/useFocusableMount';

import { Title } from './components/Title';
import { Description } from './components/Description';
import { Header } from './components/Header';
import { Body } from './components/Body';
import { Footer } from './components/Footer';
import { FooterItem } from './components/FooterItem';
import { Close } from './components/Close';

const SheetComponent = React.forwardRef<HTMLElement, ISheetProps>(
  (
    { id, isOpen, isAnimated, focusOnMount, restoreFocus, placement, size, children, ...props },
    ref
  ) => {
    const sheetRef = useRef<HTMLElement>(null);

    const seed = useUIDSeed();
    const [isCloseButtonPresent, setIsCloseButtonPresent] = useState<boolean>(false);
    const idPrefix = useMemo<string>(() => id || seed(`sheet_${PACKAGE_VERSION}`), [id, seed]);
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
      <SheetContext.Provider value={sheetContext}>
        <StyledSheet
          inert={isOpen ? undefined : ''}
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
        >
          <StyledSheetWrapper
            $isOpen={isOpen}
            $isAnimated={isAnimated}
            $placement={placement}
            $size={size}
          >
            {children}
          </StyledSheetWrapper>
        </StyledSheet>
      </SheetContext.Provider>
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
  placement: PropTypes.oneOf(PLACEMENT),
  size: PropTypes.string
};

SheetComponent.defaultProps = {
  isAnimated: true,
  placement: 'end',
  size: '380px'
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
