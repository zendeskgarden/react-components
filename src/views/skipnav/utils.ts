/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { IGardenTheme } from '../../theming/types';

export const getHeaderHeight = (theme: IGardenTheme) => `${theme.space.base * 13}px`;
