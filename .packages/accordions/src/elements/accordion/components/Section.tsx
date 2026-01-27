/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes } from 'react';

import { StyledSection } from '../../../styled';

const SectionComponent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => <StyledSection ref={ref} {...props} />
);

SectionComponent.displayName = 'Accordion.Section';

/**
 * @extends HTMLAttributes<HTMLElement>
 */
export const Section = SectionComponent;
