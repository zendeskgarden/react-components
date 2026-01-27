/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { ComponentPropsWithRef } from 'react';

import { StyledSection } from '../../views/accordion/StyledSection';
import { COMPONENT_IDS } from '../utils';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Section = (props: ComponentPropsWithRef<'div'>) => (
  <StyledSection
    {...props}
    data-garden-id={COMPONENT_IDS['accordions.section']}
    data-garden-version={PACKAGE_VERSION}
  />
);
