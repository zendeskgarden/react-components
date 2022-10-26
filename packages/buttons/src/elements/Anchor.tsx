/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { AnchorHTMLAttributes, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { IAnchorProps } from '../types';
import { StyledAnchor, StyledExternalIcon } from '../styled';

/**
 * @extends AnchorHTMLAttributes<HTMLAnchorElement>
 */
export const Anchor = forwardRef<HTMLAnchorElement, IAnchorProps>(
  ({ children, isExternal, externalIconTextLabel, ...otherProps }, ref) => {
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
        {isExternal && <StyledExternalIcon aria-label={externalIconTextLabel} />}
      </StyledAnchor>
    );
  }
);

Anchor.displayName = 'Anchor';

Anchor.propTypes = {
  isExternal: PropTypes.bool,
  isDanger: PropTypes.bool,
  externalIconTextLabel: PropTypes.string
};
