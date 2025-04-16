/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { PALETTE } from '@zendeskgarden/react-theming';
import { ILabeledColor } from '@zendeskgarden/react-colorpickers';

type Hue = 'blue' | 'green' | 'red' | 'yellow';

const SHADES = Object.keys(PALETTE.blue) as unknown as (keyof typeof PALETTE.blue)[];

const toLabeledValues = (hue: Hue) => {
  const colors = PALETTE[hue];

  return SHADES.map(shade => ({ label: `${hue}-${shade}`, value: colors[shade] }));
};

export const COLOR_SWATCH_COLORS: ILabeledColor[][] = [
  toLabeledValues('blue'),
  toLabeledValues('green'),
  toLabeledValues('red'),
  toLabeledValues('yellow')
];
