/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { render } from 'garden-test-utils';
import React from 'react';
import { useTheme } from 'styled-components';

import { IGardenTheme } from '../types';
import { ThemeProvider } from './ThemeProvider';

describe('ThemeProvider', () => {
  it('only renders children', () => {
    const { container } = render(
      <ThemeProvider>
        <button />
      </ThemeProvider>
    );

    expect(container.firstChild!.nodeName).toBe('BUTTON');
  });

  it('provides theme color variable parity between modes', () => {
    let dark: IGardenTheme['colors']['variables']['dark'] | undefined;
    let light: IGardenTheme['colors']['variables']['light'] | undefined;

    const Test = () => {
      const theme = useTheme();

      dark = theme.colors.variables.dark;
      light = theme.colors.variables.light;

      return <div />;
    };

    render(<Test />);

    expect(dark).toBeDefined();
    expect(light).toBeDefined();

    const {
      background: darkBackground,
      border: darkBorder,
      foreground: darkForeground,
      shadow: darkShadow
    } = dark!;
    const {
      background: lightBackground,
      border: lightBorder,
      foreground: lightForeground,
      shadow: lightShadow
    } = light!;
    const darkKeys = [
      ...Object.keys(darkBackground),
      ...Object.keys(darkBorder),
      ...Object.keys(darkForeground),
      ...Object.keys(darkShadow)
    ].join();
    const lightKeys = [
      ...Object.keys(lightBackground),
      ...Object.keys(lightBorder),
      ...Object.keys(lightForeground),
      ...Object.keys(lightShadow)
    ].join();

    expect(darkKeys).toStrictEqual(lightKeys);
  });
});
