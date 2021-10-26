/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, useRef } from 'react';
import mergeRefs from 'react-merge-refs';
import { CSSTransition } from 'react-transition-group';

import { StyledSheet } from '../../styled';
import { SheetContext } from '../../utils/useSheetContext';
import { useSheet } from '../../utils/useSheet';
import { useFocusableMount } from '../../utils/useFocusableMount';

import { SheetTitle } from './components/Title';
import { SheetDescription } from './components/Description';
import { SheetHeader } from './components/Header';
import { SheetBody } from './components/Body';
import { SheetFooter } from './components/Footer';
import { SheetFooterItem } from './components/FooterItem';
import { SheetCloseButton } from './components/Close';

interface ISheetProps {
  isOpen: boolean;
  isAnimated?: boolean;
  focusOnMount?: boolean;
  restoreFocus?: boolean;
  placement?: 'start' | 'end';
  children?: React.ReactNode;
}

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Sheet = React.forwardRef<HTMLElement, ISheetProps & HTMLAttributes<HTMLElement>>(
  (
    { isOpen, isAnimated = true, focusOnMount, restoreFocus, children, ...props }: ISheetProps,
    ref
  ) => {
    const sheetRef = useRef<HTMLElement>();

    useFocusableMount({ targetRef: sheetRef, isMounted: isOpen, focusOnMount, restoreFocus });

    const { getSheetProps, ...context } = useSheet({
      isOpen
    });

    if (isAnimated) {
      return (
        <SheetContext.Provider value={context as any}>
          <CSSTransition in={isOpen} unmountOnExit timeout={250} classNames="side-sheet-transition">
            <StyledSheet {...getSheetProps(props)} tabIndex="-1" ref={mergeRefs([sheetRef, ref])}>
              {children}
            </StyledSheet>
          </CSSTransition>
        </SheetContext.Provider>
      );
    }

    return (
      <SheetContext.Provider value={context as any}>
        {isOpen ? (
          <StyledSheet {...getSheetProps(props)} tabIndex="-1" ref={mergeRefs([sheetRef, ref])}>
            {children}
          </StyledSheet>
        ) : null}
      </SheetContext.Provider>
    );
  }
) as any;

Sheet.displayName = 'Sheet';

Sheet.defaultProps = {
  isOpen: false,
  isAnimated: false,
  focusOnMount: false,
  restoreFocus: false,
  placement: 'end'
};

Sheet.Title = SheetTitle;
Sheet.Description = SheetDescription;
Sheet.Header = SheetHeader;
Sheet.Body = SheetBody;
Sheet.Footer = SheetFooter;
Sheet.FooterItem = SheetFooterItem;
Sheet.Close = SheetCloseButton;
