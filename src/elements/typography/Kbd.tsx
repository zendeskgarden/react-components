/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import { IKbdProps, INHERIT_SIZE } from '../../types/elements';
import { StyledKbd } from '../../views/typography/StyledKbd';
import { COMPONENT_IDS } from '../utils';

/**
 * @extends HTMLAttributes<HTMLElement>
 */
export const Kbd = forwardRef<HTMLElement, IKbdProps>(({ size = 'inherit', ...other }, ref) => (
  <StyledKbd
    $size={size}
    {...other}
    as="kbd"
    $isMonospace
    data-garden-id={COMPONENT_IDS['typography.kbd']}
    data-garden-version={PACKAGE_VERSION}
    ref={ref}
  />
));

Kbd.displayName = 'Kbd';

Kbd.propTypes = {
  size: PropTypes.oneOf(INHERIT_SIZE)
};
