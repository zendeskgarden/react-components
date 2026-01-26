/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useId } from '@zendeskgarden/container-utilities';
import PropTypes from 'prop-types';
import React, { useRef, useMemo, useState } from 'react';
import { mergeRefs } from 'react-merge-refs';

import { StyledSheet, StyledSheetWrapper } from '../../styled';
import { ISheetProps, PLACEMENT } from '../../types';
import { useFocusableMount } from '../../utils/useFocusableMount';
import { SheetContext } from '../../utils/useSheetContext';
import { Body } from './components/Body';
import { Close } from './components/Close';
import { Description } from './components/Description';
import { Footer } from './components/Footer';
import { FooterItem } from './components/FooterItem';
import { Header } from './components/Header';
import { Title } from './components/Title';

const SheetComponent = React.forwardRef<HTMLElement, ISheetProps>(
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
