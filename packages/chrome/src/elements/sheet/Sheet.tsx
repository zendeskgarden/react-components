/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, {
  useRef,
  useMemo,
  useState,
  HTMLAttributes,
  PropsWithoutRef,
  RefAttributes,
  ForwardRefExoticComponent
} from 'react';
import { useUIDSeed } from 'react-uid';
import mergeRefs from 'react-merge-refs';
import { CSSTransition } from 'react-transition-group';

import { StyledSheet } from '../../styled';
import { SheetContext, ISheetContext } from '../../utils/useSheetContext';
import { useFocusableMount } from '../../utils/useFocusableMount';

import { SheetTitle } from './components/Title';
import { SheetDescription } from './components/Description';
import { SheetHeader } from './components/Header';
import { SheetBody } from './components/Body';
import { SheetFooter } from './components/Footer';
import { SheetFooterItem } from './components/FooterItem';
import { SheetCloseButton } from './components/Close';

interface IStaticSheetExport<T, P>
  extends ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> {
  Title: typeof SheetTitle;
  Description: typeof SheetDescription;
  Header: typeof SheetHeader;
  Body: typeof SheetBody;
  Footer: typeof SheetFooter;
  FooterItem: typeof SheetFooterItem;
  Close: typeof SheetCloseButton;
}

interface ISheetProps extends HTMLAttributes<HTMLElement> {
  id?: string;
  isOpen: boolean;
  isAnimated?: boolean;
  focusOnMount?: boolean;
  restoreFocus?: boolean;
  placement?: 'start' | 'end';
}

/**
 * @extends HTMLAttributes<HTMLElement>
 */
// eslint-disable-next-line react/display-name
export const Sheet = React.forwardRef<HTMLElement, ISheetProps>(
  (
    { id, isOpen, isAnimated, focusOnMount, restoreFocus, children, ...props }: ISheetProps,
    ref
  ) => {
    const sheetRef = useRef<HTMLElement>(null);

    const seed = useUIDSeed();
    const [idPrefix] = useState<string>(id || seed(`sheet_${PACKAGE_VERSION}`));
    const titleId = `${idPrefix}--title`;
    const descriptionId = `${idPrefix}--description`;

    const context = useMemo(() => ({ idPrefix }), [idPrefix]);

    useFocusableMount({ targetRef: sheetRef, isMounted: isOpen, focusOnMount, restoreFocus });

    if (isAnimated) {
      return (
        <SheetContext.Provider value={context as ISheetContext}>
          <CSSTransition in={isOpen} unmountOnExit timeout={250} classNames="side-sheet-transition">
            <StyledSheet
              tabIndex="-1"
              aria-labelledby={titleId}
              aria-describedby={descriptionId}
              ref={mergeRefs([sheetRef, ref])}
              {...props}
            >
              {children}
            </StyledSheet>
          </CSSTransition>
        </SheetContext.Provider>
      );
    }

    return (
      <SheetContext.Provider value={context as ISheetContext}>
        {isOpen ? (
          <StyledSheet
            tabIndex="-1"
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
            ref={mergeRefs([sheetRef, ref])}
            {...props}
          >
            {children}
          </StyledSheet>
        ) : null}
      </SheetContext.Provider>
    );
  }
) as IStaticSheetExport<HTMLElement, ISheetProps>;

Sheet.Title = SheetTitle;
Sheet.Description = SheetDescription;
Sheet.Header = SheetHeader;
Sheet.Body = SheetBody;
Sheet.Footer = SheetFooter;
Sheet.FooterItem = SheetFooterItem;
Sheet.Close = SheetCloseButton;

Sheet.displayName = 'Sheet';

Sheet.defaultProps = {
  isOpen: false,
  isAnimated: true,
  focusOnMount: false,
  restoreFocus: false,
  placement: 'end'
};
