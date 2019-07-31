/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { KeyboardFocusContainer } from '@zendeskgarden/react-selection';
import { StyledAnchor, StyledExternalIcon } from '../styled';

/**
 * Accepts all `<a>` props
 */
const Anchor = React.forwardRef(({ children, external, ...buttonProps }, ref) => (
  <KeyboardFocusContainer>
    {({ getFocusProps, keyboardFocused }) => (
      <StyledAnchor
        {...getFocusProps({
          ref,
          external,
          ...buttonProps,
          focused: keyboardFocused
        })}
      >
        {children}
        {external && <StyledExternalIcon />}
      </StyledAnchor>
    )}
  </KeyboardFocusContainer>
));

Anchor.propTypes = {
  /** Apply danger styling */
  danger: PropTypes.bool,
  /** Used when the anchor navigates to an external resource */
  external: PropTypes.bool,
  /** @ignore */
  children: PropTypes.node
};

/** @component */
export default Anchor;
