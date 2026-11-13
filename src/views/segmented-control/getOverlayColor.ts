/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { IGardenTheme } from '../../theming/types';
import { getColor } from '../../theming/utils/getColor';

/*
 * The design's translucent neutral (white in dark mode). The track and the
 * hovered and pressed segments all use it, at increasing opacity, so a
 * segment tint always stays visible against the track beneath it.
 */
export const getOverlayColor = (theme: IGardenTheme, transparency: number | undefined) =>
  getColor({
    theme,
    hue: 'neutralHue',
    light: { shade: 700 },
    dark: { hue: 'white' },
    transparency
  });
