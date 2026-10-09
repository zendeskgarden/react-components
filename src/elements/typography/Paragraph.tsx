/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import { IParagraphProps, SIZE } from '../../types/elements';
import { StyledParagraph } from '../../views/typography/StyledParagraph';
import { COMPONENT_IDS } from '../utils';

/**
 * @extends HTMLAttributes<HTMLParagraphElement>
 */
export const Paragraph = forwardRef<HTMLParagraphElement, IParagraphProps>(
  ({ size = 'medium', ...props }, ref) => (
    <StyledParagraph
      ref={ref}
      size={size}
      {...props}
      data-garden-id={COMPONENT_IDS['typography.paragraph']}
      data-garden-version={PACKAGE_VERSION}
    />
  )
);

Paragraph.displayName = 'Paragraph';

Paragraph.propTypes = {
  size: PropTypes.oneOf(SIZE)
};
