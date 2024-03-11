/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { scale } from 'chroma-js';
import get from 'lodash.get';
import { IGardenTheme } from '../types';
import DEFAULT_THEME from '../elements/theme';
import PALETTE from '../elements/palette';

type ColorParameters = {
  theme: IGardenTheme;
  variable?: string | [string];
};

export const getColor = ({ theme = DEFAULT_THEME, variable }: ColorParameters) => {
  let retVal;

  if (variable) {
    const variables =
      theme.colors.base === 'dark' ? theme.variables.colors.dark : theme.variables.colors.light;

    get(variables, variable);
  }

  return retVal;
};

scale([PALETTE.white, PALETTE.black]).correctLightness().colors(12);
