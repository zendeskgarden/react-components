/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { forwardRef, LiHTMLAttributes } from 'react';

import { useText } from '../../theming/utils/useText';
import { StyledGapListItem } from '../../views/pagination/StyledGapListItem';
import { COMPONENT_IDS } from '../utils';

const GapComponent = forwardRef<HTMLLIElement, LiHTMLAttributes<HTMLLIElement>>((props, ref) => {
  const ariaLabel = useText(
    GapComponent,
    props,
    'aria-label',
    'Ellipsis indicating non-visible pages'
  );

  return (
    <StyledGapListItem
      {...props}
      data-garden-id={COMPONENT_IDS['pagination.gap']}
      data-garden-version={PACKAGE_VERSION}
      aria-label={ariaLabel}
      ref={ref}
    >
      …
    </StyledGapListItem>
  );
});

GapComponent.displayName = 'Pagination.Gap';

/**
 * @extends LiHTMLAttributes<HTMLLIElement>
 */
export const Gap = GapComponent;
