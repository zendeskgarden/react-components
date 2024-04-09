/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { useTheme } from 'styled-components';
import { render } from 'garden-test-utils';
import { ThemeProvider } from './ThemeProvider';
import { IGardenTheme } from '../types';

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

    const { background: darkBackground, border: darkBorder, foreground: darkForeground } = dark!;
    const {
      background: lightBackground,
      border: lightBorder,
      foreground: lightForeground
    } = light!;
    const darkKeys = [
      ...Object.keys(darkBackground),
      ...Object.keys(darkBorder),
      ...Object.keys(darkForeground)
    ].join();
    const lightKeys = [
      ...Object.keys(lightBackground),
      ...Object.keys(lightBorder),
      ...Object.keys(lightForeground)
    ].join();

    expect(darkKeys).toStrictEqual(lightKeys);
  });
});
