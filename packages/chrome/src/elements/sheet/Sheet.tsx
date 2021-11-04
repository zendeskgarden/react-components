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
import PropTypes from 'prop-types';
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

export interface ISheetProps extends HTMLAttributes<HTMLElement> {
  /** An ID that is applied to Sheet elements */
  id?: string;
  /** Determines whether the Sheet is open or not **/
  isOpen?: boolean;
  /** Determines whether animation for opening and closing the Sheet is used **/
  isAnimated?: boolean;
  /** Focuses on the Sheet when isOpen is true and mounted **/
  focusOnMount?: boolean;
  /** Restores focus to the previous element after the Sheet is closed **/
  restoreFocus?: boolean;
  /** Determines the position of the Sheet **/
  placement?: 'start' | 'end';
}

/**
 * @extends HTMLAttributes<HTMLElement>
 */
// eslint-disable-next-line react/display-name
export const Sheet = React.forwardRef<HTMLElement, ISheetProps>(
  ({ id, isOpen, isAnimated, focusOnMount, restoreFocus, children, ...props }, ref) => {
    const sheetRef = useRef<HTMLElement>(null);

    const seed = useUIDSeed();
    const [idPrefix] = useState<string>(id || seed(`sheet_${PACKAGE_VERSION}`));
    const titleId = `${idPrefix}--title`;
    const descriptionId = `${idPrefix}--description`;

    const sheetContext = useMemo(() => ({ idPrefix }), [idPrefix]);

    useFocusableMount({ targetRef: sheetRef, isMounted: isOpen, focusOnMount, restoreFocus });

    if (isAnimated) {
      return (
        <SheetContext.Provider value={sheetContext as ISheetContext}>
          <CSSTransition in={isOpen} unmountOnExit timeout={250} classNames="side-sheet-transition">
            <StyledSheet
              id={idPrefix}
              aria-labelledby={titleId}
              aria-describedby={descriptionId}
              ref={mergeRefs([sheetRef, ref])}
              {...(props as any)}
            >
              {children}
            </StyledSheet>
          </CSSTransition>
        </SheetContext.Provider>
      );
    }

    return (
      <SheetContext.Provider value={sheetContext as ISheetContext}>
        {isOpen ? (
          <StyledSheet
            id={idPrefix}
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
            ref={mergeRefs([sheetRef, ref])}
            {...(props as any)}
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

Sheet.propTypes = {
  id: PropTypes.string,
  isOpen: PropTypes.bool,
  isAnimated: PropTypes.bool,
  focusOnMount: PropTypes.bool,
  restoreFocus: PropTypes.bool,
  placement: PropTypes.oneOf(['start', 'end'])
};

Sheet.defaultProps = {
  isOpen: false,
  isAnimated: true,
  focusOnMount: false,
  restoreFocus: false,
  placement: 'end'
};
