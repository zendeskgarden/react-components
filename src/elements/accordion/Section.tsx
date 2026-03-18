/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { forwardRef, HTMLAttributes } from 'react';

import { StyledSection } from '../../views/accordion/StyledSection';
import { COMPONENT_IDS } from '../utils';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Section = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => (
  <StyledSection
    {...props}
    data-garden-id={COMPONENT_IDS['accordions.section']}
    data-garden-version={PACKAGE_VERSION}
    ref={ref}
  />
));

Section.displayName = 'Accordion.Section';
