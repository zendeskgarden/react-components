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

import { StyledSheet, StyledSheetWrapper } from '../../styled';
import { SheetContext } from '../../utils/useSheetContext';
import { useFocusableMount } from '../../utils/useFocusableMount';

import { SheetTitle } from './components/Title';
import { SheetDescription } from './components/Description';
import { SheetHeader } from './components/Header';
import { SheetBody } from './components/Body';
import { SheetFooter } from './components/Footer';
import { SheetFooterItem } from './components/FooterItem';
import { SheetClose } from './components/Close';

interface IStaticSheetExport<T, P>
  extends ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> {
  Title: typeof SheetTitle;
  Description: typeof SheetDescription;
  Header: typeof SheetHeader;
  Body: typeof SheetBody;
  Footer: typeof SheetFooter;
  FooterItem: typeof SheetFooterItem;
  Close: typeof SheetClose;
}

export interface ISheetProps extends HTMLAttributes<HTMLElement> {
  /** Opens the Sheet **/
  isOpen?: boolean;
  /** Determines whether animation for opening and closing the Sheet is used **/
  isAnimated?: boolean;
  /** Focuses on the Sheet when `isOpen` is true and mounted **/
  focusOnMount?: boolean;
  /** Directs keyboard focus to the Sheet on mount **/
  restoreFocus?: boolean;
  /** Returns keyboard focus to the element that triggered the Sheet **/
  placement?: 'start' | 'end';
  /** Sets the width in pixels, based on the placement of the Sheet */
  size?: string;
}

/**
 * @extends HTMLAttributes<HTMLElement>
 */
export const Sheet = React.forwardRef<HTMLElement, ISheetProps>(
  (
    { id, isOpen, isAnimated, focusOnMount, restoreFocus, placement, size, children, ...props },
    ref
  ) => {
    const sheetRef = useRef<HTMLElement>(null);

    const seed = useUIDSeed();
    const [idPrefix] = useState<string>(id || seed(`sheet_${PACKAGE_VERSION}`));
    const titleId = `${idPrefix}--title`;
    const descriptionId = `${idPrefix}--description`;

    const sheetContext = useMemo(() => ({ titleId, descriptionId }), [titleId, descriptionId]);

    useFocusableMount({ targetRef: sheetRef, isMounted: isOpen, focusOnMount, restoreFocus });

    return (
      <SheetContext.Provider value={sheetContext}>
        <StyledSheet
          isOpen={isOpen}
          isAnimated={isAnimated}
          placement={placement}
          size={size}
          tabIndex={-1}
          id={idPrefix}
          aria-labelledby={titleId}
          aria-describedby={descriptionId}
          ref={mergeRefs([sheetRef, ref])}
          {...props}
        >
          <StyledSheetWrapper
            isOpen={isOpen}
            isAnimated={isAnimated}
            placement={placement}
            size={size}
          >
            {children}
          </StyledSheetWrapper>
        </StyledSheet>
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
Sheet.Close = SheetClose;

Sheet.displayName = 'Sheet';

Sheet.propTypes = {
  id: PropTypes.string,
  isOpen: PropTypes.bool,
  isAnimated: PropTypes.bool,
  focusOnMount: PropTypes.bool,
  restoreFocus: PropTypes.bool,
  placement: PropTypes.oneOf(['start', 'end']),
  size: PropTypes.string
};

Sheet.defaultProps = {
  isAnimated: true,
  placement: 'end',
  size: '380px'
};
