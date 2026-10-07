/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { IGardenTheme } from '../types';

/**
 * Render size for 20px SVG assets in component slots. Compact →
 * `theme.iconSizes.md` (16px), default → `theme.space.md` (20px).
 *
 * Internal to the package; not part of the public API.
 */
export const getIconRenderSize = (theme: IGardenTheme, isCompact = false): string =>
  isCompact ? theme.iconSizes.md : theme.space.md;
