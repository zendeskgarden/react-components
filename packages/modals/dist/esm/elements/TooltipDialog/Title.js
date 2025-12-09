/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTooltipDialogContext } from '../../utils/useTooltipDialogContext.js';
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
import { StyledTooltipDialogTitle } from '../../styled/StyledTooltipDialogTitle.js';
import '../../styled/StyledTooltipDialogBody.js';
import '../../styled/StyledTooltipDialogFooter.js';
import '../../styled/StyledTooltipDialogFooterItem.js';
import '../../styled/StyledTooltipDialogClose.js';
import '../../styled/StyledDrawer.js';
import '../../styled/StyledDrawerHeader.js';
import '../../styled/StyledDrawerClose.js';
import '../../styled/StyledDrawerBody.js';
import '../../styled/StyledDrawerFooter.js';
import '../../styled/StyledDrawerFooterItem.js';

const TitleComponent = forwardRef(({
  children,
  tag = 'div',
  ...other
}, ref) => {
  const {
    getTitleProps,
    hasTitle,
    setHasTitle
  } = useTooltipDialogContext();
  useEffect(() => {
    if (!hasTitle && setHasTitle) {
      setHasTitle(true);
    }
    return () => {
      if (hasTitle && setHasTitle) {
        setHasTitle(false);
      }
    };
  }, [hasTitle, setHasTitle]);
  return React__default.createElement(StyledTooltipDialogTitle, Object.assign({}, getTitleProps(other), {
    as: tag,
    ref: ref
  }), children);
});
TitleComponent.displayName = 'TooltipDialog.Title';
TitleComponent.propTypes = {
  tag: PropTypes.any
};
const Title = TitleComponent;

export { Title };
