/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import { HUE, ICodeProps, INHERIT_SIZE } from '../../types/elements';
import { StyledCode } from '../../views/typography/StyledCode';
import { COMPONENT_IDS } from '../utils';

/**
 * @extends HTMLAttributes<HTMLElement>
 */
export const Code = forwardRef<HTMLElement, ICodeProps>(
  ({ hue = 'grey', size = 'inherit', ...other }, ref) => (
    <StyledCode
      ref={ref}
      $hue={hue}
      $size={size}
      {...other}
      as="code"
      $isMonospace
      data-garden-id={COMPONENT_IDS['typography.code']}
      data-garden-version={PACKAGE_VERSION}
    />
  )
);

Code.displayName = 'Code';

Code.propTypes = {
  hue: PropTypes.oneOf(HUE),
  size: PropTypes.oneOf(INHERIT_SIZE)
};
