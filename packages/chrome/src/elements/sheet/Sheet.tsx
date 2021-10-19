/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, useEffect, useRef } from 'react';
import mergeRefs from 'react-merge-refs';
import { CSSTransition } from 'react-transition-group';

import { StyledSheet } from '../../styled';
import { SheetContext } from '../../utils/useSheetContext';
import { useSheet } from '../../utils/useSheet';

import { SheetTitle } from './components/Title';
import { SheetDescription } from './components/Description';
import { SheetHeader } from './components/Header';
import { SheetBody } from './components/Body';
import { SheetFooter } from './components/Footer';
import { SheetFooterItem } from './components/FooterItem';
import { SheetCloseButton } from './components/Close';

interface ISheetProps {
  isOpen: boolean;
  focusOnMount?: boolean;
  restoreFocus?: boolean;
  isAnimated?: boolean;
  placement?: 'start' | 'end';
  onClose?: (event: any) => void;
  children?: React.ReactNode;
}

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Sheet = React.forwardRef<HTMLElement, ISheetProps & HTMLAttributes<HTMLElement>>(
  ({ isOpen, focusOnMount, onClose, isAnimated, children, ...props }: ISheetProps, ref) => {
    const sheetRef = useRef<HTMLElement>();

    const { getSheetProps, ...context } = useSheet({
      isOpen,
      focusOnMount,
      onClose
    });

    useEffect(() => {
      if (isOpen && focusOnMount && sheetRef.current) {
        sheetRef.current.focus();
      }
    }, [focusOnMount]);

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

    // todo for Deric: Find a better way to disable CSSTransition.
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

Sheet.Title = SheetTitle;
Sheet.Description = SheetDescription;
Sheet.Header = SheetHeader;
Sheet.Body = SheetBody;
Sheet.Footer = SheetFooter;
Sheet.FooterItem = SheetFooterItem;
Sheet.Close = SheetCloseButton;
