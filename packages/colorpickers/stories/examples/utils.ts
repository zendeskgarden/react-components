/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { ILabeledColor } from '@zendeskgarden/react-colorpickers';

type Hue = Record<number | string, string> | string;

type LabeledColors = (
  palette: Record<string, Hue>,
  hues: Hue[],
  shades: string[]
) => ILabeledColor[];

const capitalize = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);

export const labeledColors: LabeledColors = (palette, hues = [], shades = []) => {
  const filteredPalette = Object.keys(palette)
    .filter(hue => hues.includes(hue))
    .reduce<typeof palette>((accPalette, currHue) => {
      const hue = palette[currHue];

      const shadeMatchedHue = Object.keys(hue)
        .filter(shade => shades.includes(shade))
        .reduce<Record<string, string>>((acc, curr) => {
          acc[curr] = hue[curr as unknown as number];

          return acc;
        }, {});

      accPalette[currHue] = shadeMatchedHue;

      return accPalette;
    }, {});

  const workingPalette = hues.length ? filteredPalette : palette;

  return Object.keys(workingPalette).reduce<ILabeledColor[]>((acc, hue) => {
    if (typeof palette[hue] === 'string') {
      if (hues.includes(hue)) {
        return [{ label: capitalize(hue), value: palette[hue] as string }, ...acc];
      }

      return acc;
    }

    const labeledValues = Object.keys(palette[hue])
      .filter(shade => {
        if (shades.length) return shades.includes(shade);

        return true;
      })
      .map(shade => {
        const label = `${hue}-${shade}`;
        const value = palette[hue][Number(shade)];

        return {
          label: capitalize(label),
          value
        };
      });

    if (acc) {
      acc.push(...labeledValues);
    }

    return acc;
  }, []);
};
