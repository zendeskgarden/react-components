/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useModalContext } from '../utils/useModalContext.js';
import '../styled/StyledBackdrop.js';
import '../styled/StyledBody.js';
import '../styled/StyledClose.js';
import '../styled/StyledFooter.js';
import '../styled/StyledFooterItem.js';
import { StyledHeader } from '../styled/StyledHeader.js';
import { StyledDangerIcon } from '../styled/StyledDangerIcon.js';
import '../styled/StyledModal.js';
import '../styled/StyledTooltipDialogBackdrop.js';
import '../styled/StyledTooltipWrapper.js';
import '../styled/StyledTooltipDialog.js';
import '../styled/StyledTooltipDialogTitle.js';
import '../styled/StyledTooltipDialogBody.js';
import '../styled/StyledTooltipDialogFooter.js';
import '../styled/StyledTooltipDialogFooterItem.js';
import '../styled/StyledTooltipDialogClose.js';
import '../styled/StyledDrawer.js';
import '../styled/StyledDrawerHeader.js';
import '../styled/StyledDrawerClose.js';
import '../styled/StyledDrawerBody.js';
import '../styled/StyledDrawerFooter.js';
import '../styled/StyledDrawerFooterItem.js';

const Header = forwardRef((_ref, ref) => {
  let {
    children,
    isDanger,
    tag = 'div',
    ...other
  } = _ref;
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
  return React__default.createElement(StyledHeader, Object.assign({}, getTitleProps(other), {
    as: tag,
    $isCloseButtonPresent: isCloseButtonPresent,
    $isDanger: isDanger,
    ref: ref
  }), !!isDanger && React__default.createElement(StyledDangerIcon, null), children);
});
Header.displayName = 'Modal.Header';
Header.propTypes = {
  isDanger: PropTypes.bool,
  tag: PropTypes.any
};

export { Header };
