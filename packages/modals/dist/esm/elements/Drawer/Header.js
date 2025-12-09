/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useModalContext } from '../../utils/useModalContext.js';
import '../../styled/StyledBackdrop.js';
import '../../styled/StyledBody.js';
import '../../styled/StyledClose.js';
import '../../styled/StyledFooter.js';
import '../../styled/StyledFooterItem.js';
import '../../styled/StyledHeader.js';
import '../../styled/StyledDangerIcon.js';
import '../../styled/StyledModal.js';
import '../../styled/StyledTooltipDialogBackdrop.js';
import '../../styled/StyledTooltipWrapper.js';
import '../../styled/StyledTooltipDialog.js';
import '../../styled/StyledTooltipDialogTitle.js';
import '../../styled/StyledTooltipDialogBody.js';
import '../../styled/StyledTooltipDialogFooter.js';
import '../../styled/StyledTooltipDialogFooterItem.js';
import '../../styled/StyledTooltipDialogClose.js';
import '../../styled/StyledDrawer.js';
import { StyledDrawerHeader } from '../../styled/StyledDrawerHeader.js';
import '../../styled/StyledDrawerClose.js';
import '../../styled/StyledDrawerBody.js';
import '../../styled/StyledDrawerFooter.js';
import '../../styled/StyledDrawerFooterItem.js';

const HeaderComponent = forwardRef(({
  tag = 'div',
  ...other
}, ref) => {
  const {
    isCloseButtonPresent,
    hasHeader,
    setHasHeader,
    getTitleProps
  } = useModalContext();
  useEffect(() => {
    if (!hasHeader && setHasHeader) {
      setHasHeader(true);
    }
    return () => {
      if (hasHeader && setHasHeader) {
        setHasHeader(false);
      }
    };
  }, [hasHeader, setHasHeader]);
  return React__default.createElement(StyledDrawerHeader, Object.assign({}, getTitleProps(other), {
    as: tag,
    $isCloseButtonPresent: isCloseButtonPresent,
    ref: ref
  }));
});
HeaderComponent.displayName = 'Drawer.Header';
HeaderComponent.propTypes = {
  tag: PropTypes.any
};
const Header = HeaderComponent;

export { Header };
