/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { useContext, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { readableColor } from 'polished';
import { DEFAULT_THEME, getColor, useDocument } from '@zendeskgarden/react-theming';
import { ChromeContext } from '../utils/useChromeContext.js';
import { StyledChrome } from '../styled/StyledChrome.js';
import '../styled/StyledSkipNav.js';
import '../styled/StyledSkipNavIcon.js';
import '../styled/body/StyledBody.js';
import '../styled/body/StyledContent.js';
import '../styled/body/StyledMain.js';
import '../styled/footer/StyledFooter.js';
import '../styled/footer/StyledFooterItem.js';
import '../styled/header/StyledHeader.js';
import '../styled/header/StyledBaseHeaderItem.js';
import '../styled/header/StyledHeaderItem.js';
import '../styled/header/StyledHeaderItemIcon.js';
import '../styled/header/StyledLogoHeaderItem.js';
import '../styled/header/StyledHeaderItemText.js';
import '../styled/header/StyledHeaderItemWrapper.js';
import '../styled/nav/StyledNav.js';
import '../styled/nav/StyledNavList.js';
import '../styled/nav/StyledNavListItem.js';
import '../styled/nav/StyledBaseNavItem.js';
import '../styled/nav/StyledLogoNavItem.js';
import '../styled/nav/StyledBrandmarkNavItem.js';
import '../styled/nav/StyledNavButton.js';
import '../styled/nav/StyledNavItemIcon.js';
import '../styled/nav/StyledNavItemText.js';
import '../styled/sheet/StyledSheet.js';
import '../styled/sheet/StyledSheetWrapper.js';
import '../styled/sheet/StyledSheetTitle.js';
import '../styled/sheet/StyledSheetDescription.js';
import '../styled/sheet/StyledSheetBody.js';
import '../styled/sheet/StyledSheetClose.js';
import '../styled/sheet/StyledSheetFooter.js';
import '../styled/sheet/StyledSheetFooterItem.js';
import '../styled/sheet/StyledSheetHeader.js';

const Chrome = React__default.forwardRef((_ref, ref) => {
  let {
    hue,
    isFluid,
    ...props
  } = _ref;
  const theme = useContext(ThemeContext) || DEFAULT_THEME;
  const isLightMemoized = useMemo(() => {
    if (hue) {
      const backgroundColor = getColor({
        theme,
        hue
      });
      const LIGHT_COLOR = 'white';
      return readableColor(backgroundColor, LIGHT_COLOR, undefined, false ) === LIGHT_COLOR;
    }
    return false;
  }, [hue, theme]);
  const isLight = hue ? isLightMemoized : undefined;
  const chromeContextValue = useMemo(() => ({
    hue: hue || 'chromeHue',
    isLight
  }), [hue, isLight]);
  const environment = useDocument(theme);
  useEffect(() => {
    if (environment && !isFluid) {
      const htmlElement = environment.querySelector('html');
      if (htmlElement) {
        const defaultHtmlPosition = htmlElement.style.position;
        htmlElement.style.position = 'fixed';
        return () => {
          htmlElement.style.position = defaultHtmlPosition;
        };
      }
    }
    return undefined;
  }, [environment, isFluid]);
  return React__default.createElement(ChromeContext.Provider, {
    value: chromeContextValue
  }, React__default.createElement(StyledChrome, Object.assign({
    ref: ref
  }, props)));
});
Chrome.displayName = 'Chrome';
Chrome.propTypes = {
  hue: PropTypes.string
};

export { Chrome };
