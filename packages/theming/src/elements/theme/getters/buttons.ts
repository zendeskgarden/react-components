/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { IGardenTheme } from '../../../types';
import memoize from 'lodash.memoize';

export const getButtonVariables = memoize(
  (theme: IGardenTheme) => {
    const { fontSizes, space } = theme;

    return {
      transition: `
        border-color 0.25s ease-in-out,
        box-shadow 0.1s ease-in-out,
        background-color 0.25s ease-in-out,
        color 0.25s ease-in-out,
        outline-color 0.1s ease-in-out,
        z-index 0.25s ease-in-out;
      `,
      sizes: {
        sm: {
          fontSize: fontSizes.sm,
          padding: space.base * 3,
          height: space.base * 8
        },
        md: {
          fontSize: fontSizes.md,
          padding: space.base * 4,
          height: space.base * 10
        },
        lg: {
          fontSize: fontSizes.md,
          padding: space.base * 5,
          height: space.base * 12
        }
      },
      shades: {
        base: 600,
        hover: 700,
        active: 800,
        disabledColor: 400,
        disabledBgColor: 200
      }
    };
  },
  theme => JSON.stringify(theme)
);
