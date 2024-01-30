/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { DefaultTheme, ThemeProps, createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle<{ prefix: string } & ThemeProps<DefaultTheme>>(
  ({ theme, prefix }) => {
    const { buttons } = theme.variables;

    return css`
      :root {
        --${prefix}--buttons--transition: ${buttons.transition};
        --${prefix}--buttons_sm--fontSize: ${buttons.sizes.sm.fontSize};
        --${prefix}--buttons_sm--padding: ${buttons.sizes.sm.padding}px;
        --${prefix}--buttons_sm--height: ${buttons.sizes.sm.height}px;
        --${prefix}--buttons_md--fontSize: ${buttons.sizes.md.fontSize};
        --${prefix}--buttons_md--padding: ${buttons.sizes.md.padding}px;
        --${prefix}--buttons_md--height: ${buttons.sizes.md.height}px;
        --${prefix}--buttons_lg--fontSize: ${buttons.sizes.lg.fontSize};
        --${prefix}--buttons_lg--padding: ${buttons.sizes.lg.padding}px;
        --${prefix}--buttons_lg--height: ${buttons.sizes.lg.height}px;
        --${prefix}--buttons--shade: ${buttons.shades.base};
        --${prefix}--buttons--shade--hover: ${buttons.shades.hover};
        --${prefix}--buttons--shade--active: ${buttons.shades.active};
        --${prefix}--buttons--shade--color--disabled: ${buttons.shades.disabledColor};
        --${prefix}--buttons--shades--bg--disabled: ${buttons.shades.disabledBgColor};
      }
    `;
  }
);
