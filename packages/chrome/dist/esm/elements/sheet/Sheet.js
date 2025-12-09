/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { useRef, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useId } from '@zendeskgarden/container-utilities';
import { mergeRefs } from 'react-merge-refs';
import { PLACEMENT } from '../../types/index.js';
import '../../styled/StyledChrome.js';
import '../../styled/StyledSkipNav.js';
import '../../styled/StyledSkipNavIcon.js';
import '../../styled/body/StyledBody.js';
import '../../styled/body/StyledContent.js';
import '../../styled/body/StyledMain.js';
import '../../styled/footer/StyledFooter.js';
import '../../styled/footer/StyledFooterItem.js';
import '../../styled/header/StyledHeader.js';
import '../../styled/header/StyledBaseHeaderItem.js';
import '../../styled/header/StyledHeaderItem.js';
import '../../styled/header/StyledHeaderItemIcon.js';
import '../../styled/header/StyledLogoHeaderItem.js';
import '../../styled/header/StyledHeaderItemText.js';
import '../../styled/header/StyledHeaderItemWrapper.js';
import '../../styled/nav/StyledNav.js';
import '../../styled/nav/StyledNavList.js';
import '../../styled/nav/StyledNavListItem.js';
import '../../styled/nav/StyledBaseNavItem.js';
import '../../styled/nav/StyledLogoNavItem.js';
import '../../styled/nav/StyledBrandmarkNavItem.js';
import '../../styled/nav/StyledNavButton.js';
import '../../styled/nav/StyledNavItemIcon.js';
import '../../styled/nav/StyledNavItemText.js';
import { StyledSheet } from '../../styled/sheet/StyledSheet.js';
import { StyledSheetWrapper } from '../../styled/sheet/StyledSheetWrapper.js';
import '../../styled/sheet/StyledSheetTitle.js';
import '../../styled/sheet/StyledSheetDescription.js';
import '../../styled/sheet/StyledSheetBody.js';
import '../../styled/sheet/StyledSheetClose.js';
import '../../styled/sheet/StyledSheetFooter.js';
import '../../styled/sheet/StyledSheetFooterItem.js';
import '../../styled/sheet/StyledSheetHeader.js';
import { SheetContext } from '../../utils/useSheetContext.js';
import { useFocusableMount } from '../../utils/useFocusableMount.js';
import { Title } from './components/Title.js';
import { Description } from './components/Description.js';
import { Header } from './components/Header.js';
import { Body } from './components/Body.js';
import { Footer } from './components/Footer.js';
import { FooterItem } from './components/FooterItem.js';
import { Close } from './components/Close.js';

const SheetComponent = React__default.forwardRef((_ref, ref) => {
  let {
    id,
    isOpen,
    isAnimated = true,
    focusOnMount,
    restoreFocus,
    placement = 'end',
    size = '380px',
    children,
    ...props
  } = _ref;
  const sheetRef = useRef(null);
  const [isCloseButtonPresent, setIsCloseButtonPresent] = useState(false);
  const idPrefix = useId(id);
  const titleId = `${idPrefix}--title`;
  const descriptionId = `${idPrefix}--description`;
  const sheetContext = useMemo(() => ({
    titleId,
    descriptionId,
    isCloseButtonPresent,
    setIsCloseButtonPresent
  }), [titleId, descriptionId, isCloseButtonPresent]);
  useFocusableMount({
    targetRef: sheetRef,
    isMounted: isOpen,
    focusOnMount,
    restoreFocus
  });
  return React__default.createElement(SheetContext.Provider, {
    value: sheetContext
  }, React__default.createElement(StyledSheet, Object.assign({
    inert: isOpen ? undefined : '',
    $isOpen: isOpen,
    $isAnimated: isAnimated,
    $placement: placement,
    $size: size,
    tabIndex: -1,
    id: idPrefix,
    "aria-labelledby": titleId,
    "aria-describedby": descriptionId,
    ref: mergeRefs([sheetRef, ref])
  }, props), React__default.createElement(StyledSheetWrapper, {
    $isOpen: isOpen,
    $isAnimated: isAnimated,
    $placement: placement,
    $size: size
  }, children)));
});
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
const Sheet = SheetComponent;
Sheet.Body = Body;
Sheet.Close = Close;
Sheet.Description = Description;
Sheet.Footer = Footer;
Sheet.FooterItem = FooterItem;
Sheet.Header = Header;
Sheet.Title = Title;

export { Sheet };
