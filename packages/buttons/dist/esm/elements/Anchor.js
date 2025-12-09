/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { StyledAnchor } from '../styled/StyledAnchor.js';
import '../styled/StyledButton.js';
import '../styled/StyledSplitButton.js';
import { StyledExternalIcon } from '../styled/StyledExternalIcon.js';
import '../styled/StyledIcon.js';
import '../styled/StyledIconButton.js';
import { useText } from '@zendeskgarden/react-theming';

const Anchor = forwardRef(({
  children,
  externalIconLabel,
  isDanger,
  isExternal,
  isUnderlined = true,
  ...other
}, ref) => {
  let anchorProps = other;
  if (isExternal) {
    anchorProps = {
      target: '_blank',
      rel: 'noopener noreferrer',
      ...anchorProps
    };
  }
  const checkProps = isExternal ? {
    externalIconLabel
  } : {
    noIconLabel: 'true'
  };
  const iconAriaLabel = useText(Anchor, checkProps, isExternal ? 'externalIconLabel' : 'noIconLabel', '(opens in a new tab)');
  return React__default.createElement(StyledAnchor, Object.assign({
    ref: ref,
    $isDanger: isDanger,
    $isUnderlined: isUnderlined
  }, anchorProps), children, !!isExternal &&
  React__default.createElement(StyledExternalIcon, {
    role: "img",
    "aria-label": iconAriaLabel,
    "aria-hidden": undefined
  }));
});
Anchor.displayName = 'Anchor';
Anchor.propTypes = {
  isExternal: PropTypes.bool,
  isDanger: PropTypes.bool,
  isUnderlined: PropTypes.bool,
  externalIconLabel: PropTypes.string
};

export { Anchor };
