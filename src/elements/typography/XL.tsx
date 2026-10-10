/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import { ITypescaleProps } from '../../types/elements';
import { StyledFont } from '../../views/typography/StyledFont';
import { COMPONENT_IDS } from '../utils';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const XL = forwardRef<HTMLDivElement, ITypescaleProps>(
  ({ isBold, tag = 'div', ...other }, ref) => (
    <StyledFont
      $size="extralarge"
      $isBold={isBold}
      ref={ref}
      as={tag}
      {...other}
      data-garden-id={COMPONENT_IDS['typography.font']}
      data-garden-version={PACKAGE_VERSION}
    />
  )
);

XL.displayName = 'XL';

XL.propTypes = {
  tag: PropTypes.any,
  isBold: PropTypes.bool
};
