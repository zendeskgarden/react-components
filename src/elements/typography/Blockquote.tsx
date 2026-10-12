/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import { IBlockquoteProps, SIZE } from '../../types/elements';
import { StyledBlockquote } from '../../views/typography/StyledBlockquote';
import { COMPONENT_IDS } from '../utils';

/**
 * @extends BlockquoteHTMLAttributes<HTMLQuoteElement>
 */
export const Blockquote = forwardRef<HTMLQuoteElement, IBlockquoteProps>(
  ({ size = 'medium', ...props }, ref) => (
    <StyledBlockquote
      ref={ref}
      size={size}
      {...props}
      data-garden-id={COMPONENT_IDS['typography.blockquote']}
      data-garden-version={PACKAGE_VERSION}
    />
  )
);

Blockquote.displayName = 'Blockquote';

Blockquote.propTypes = {
  size: PropTypes.oneOf(SIZE)
};
