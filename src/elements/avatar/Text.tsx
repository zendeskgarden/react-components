/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { forwardRef, HTMLAttributes } from 'react';

import { StyledText } from '../../views/avatar/StyledText';
import { COMPONENT_IDS } from '../utils';

const TextComponent = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>((props, ref) => (
  <StyledText
    ref={ref}
    {...props}
    data-garden-id={COMPONENT_IDS['avatars.text']}
    data-garden-version={PACKAGE_VERSION}
  />
));

TextComponent.displayName = 'Avatar.Text';

/**
 * @extends HTMLAttributes<HTMLSpanElement>
 */
export const Text = TextComponent;
