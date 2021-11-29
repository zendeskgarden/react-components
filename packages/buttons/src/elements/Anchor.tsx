/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { AnchorHTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledAnchor, StyledExternalIcon } from '../styled';

export interface IAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Applies danger styling */
  isDanger?: boolean;
  /**
   * Attaches `target="_blank"` and `rel="noopener noreferrer"` to an anchor that
   * navigates to an external resource. This ensures that the anchor is a
   * safe [cross-origin destination link](https://web.dev/external-anchors-use-rel-noopener/).
   **/
  isExternal?: boolean;
}

/**
 * @extends AnchorHTMLAttributes<HTMLAnchorElement>
 */
const Anchor: React.FunctionComponent<IAnchorProps & React.RefAttributes<HTMLAnchorElement>> =
  React.forwardRef<HTMLAnchorElement, IAnchorProps>(
    ({ children, isExternal, ...otherProps }, ref) => {
      let anchorProps: AnchorHTMLAttributes<HTMLAnchorElement> = otherProps;

      if (isExternal) {
        anchorProps = {
          target: '_blank',
          rel: 'noopener noreferrer',
          ...anchorProps
        };
      }

      return (
        <StyledAnchor ref={ref} {...(anchorProps as any)}>
          {children}
          {isExternal && <StyledExternalIcon />}
        </StyledAnchor>
      );
    }
  );

Anchor.displayName = 'Anchor';

Anchor.propTypes = {
  isExternal: PropTypes.bool,
  isDanger: PropTypes.bool
};

export default Anchor;
