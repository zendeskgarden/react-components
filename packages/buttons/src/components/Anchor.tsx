/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { AnchorHTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { KeyboardFocusContainer } from '@zendeskgarden/react-selection';
import { StyledAnchor, StyledExternalIcon } from '../styled';

interface IAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Apply danger styling */
  danger?: boolean;
  /** Used when the anchor navigates to an external resource */
  external?: boolean;
}

/**
 * Accepts all `<a>` props
 */
const Anchor: React.FunctionComponent<IAnchorProps> = React.forwardRef(
  ({ children, external, ...buttonProps }, ref) => (
    <KeyboardFocusContainer>
      {({ getFocusProps, keyboardFocused }: any) => (
        <StyledAnchor
          {...getFocusProps({
            ref,
            ...buttonProps,
            focused: keyboardFocused
          })}
        >
          {children}
          {external && <StyledExternalIcon />}
        </StyledAnchor>
      )}
    </KeyboardFocusContainer>
  )
);

Anchor.propTypes = {
  danger: PropTypes.bool,
  external: PropTypes.bool
};

/** @component */
export default Anchor;
