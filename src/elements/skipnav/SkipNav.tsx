/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import { ISkipNavProps } from '../../types/elements';
import { StyledSkipNav } from '../../views/skipnav/StyledSkipNav';
import { StyledSkipNavIcon } from '../../views/skipnav/StyledSkipNavIcon';
import { COMPONENT_IDS } from '../utils';

/**
 * @extends AnchorHTMLAttributes<HTMLAnchorElement>
 */
export const SkipNav = forwardRef<HTMLAnchorElement, ISkipNavProps>(
  ({ targetId, zIndex = 1, children, ...props }, ref) => (
    <StyledSkipNav
      href={`#${targetId}`}
      $zIndex={zIndex}
      ref={ref}
      {...props}
      data-garden-id={COMPONENT_IDS['chrome.skipnav']}
      data-garden-version={PACKAGE_VERSION}
    >
      <StyledSkipNavIcon
        data-garden-id={COMPONENT_IDS['chrome.skipnav_icon']}
        data-garden-version={PACKAGE_VERSION}
      />
      {children}
    </StyledSkipNav>
  )
);

SkipNav.displayName = 'SkipNav';

SkipNav.propTypes = {
  targetId: PropTypes.string.isRequired,
  zIndex: PropTypes.number
};
