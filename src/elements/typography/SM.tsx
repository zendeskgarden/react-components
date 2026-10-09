/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import { ITypescaleMonospaceProps } from '../../types/elements';
import { StyledFont } from '../../views/typography/StyledFont';
import { COMPONENT_IDS } from '../utils';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const SM = forwardRef<HTMLDivElement, ITypescaleMonospaceProps>(
  ({ isBold, isMonospace, tag = 'div', ...other }, ref) => (
    <StyledFont
      $isBold={isBold}
      $isMonospace={isMonospace}
      as={tag}
      ref={ref}
      $size="small"
      {...other}
      data-garden-id={COMPONENT_IDS['typography.font']}
      data-garden-version={PACKAGE_VERSION}
    />
  )
);

SM.displayName = 'SM';

SM.propTypes = {
  tag: PropTypes.any,
  isBold: PropTypes.bool,
  isMonospace: PropTypes.bool
};
