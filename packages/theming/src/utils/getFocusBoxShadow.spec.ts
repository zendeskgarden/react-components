/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { getFocusBoxShadow } from './getFocusBoxShadow';
import DEFAULT_THEME from '../elements/theme';
import PALETTE from '../elements/palette';
import { getColor } from './getColor';

describe('getFocusBoxShadow', () => {
  it('defaults as expected', () => {
    const boxShadow = getFocusBoxShadow({ theme: DEFAULT_THEME });

    expect(boxShadow).toContain(`${DEFAULT_THEME.shadowWidths.md} ${PALETTE.blue[600]}`);
    expect(boxShadow).toContain(`${DEFAULT_THEME.shadowWidths.xs} ${PALETTE.white}`);
  });

  it('resizes as expected', () => {
    const boxShadow = getFocusBoxShadow({
      theme: DEFAULT_THEME,
      shadowWidth: 'sm',
      spacerWidth: 'sm'
    });

    expect(boxShadow).toContain(`${DEFAULT_THEME.shadowWidths.sm} ${PALETTE.blue[600]}`);
    expect(boxShadow).toContain(`${DEFAULT_THEME.shadowWidths.sm} ${PALETTE.white}`);
  });

  it('insets as expected', () => {
    const boxShadow = getFocusBoxShadow({ theme: DEFAULT_THEME, inset: true });

    expect(boxShadow).toContain('inset');
  });

  it('overrides color as expected', () => {
    const hue = 'successHue';
    const shade = 400;
    const boxShadow = getFocusBoxShadow({ theme: DEFAULT_THEME, hue, shade });

    expect(boxShadow).toContain(
      `${DEFAULT_THEME.shadowWidths.md} ${getColor(hue, shade, DEFAULT_THEME)}`
    );
  });

  it('overrides spacer color as expected', () => {
    const spacerHue = 'successHue';
    const spacerShade = 400;
    const boxShadow = getFocusBoxShadow({
      theme: DEFAULT_THEME,
      spacerHue,
      spacerShade
    });

    expect(boxShadow).toContain(
      `${DEFAULT_THEME.shadowWidths.xs} ${getColor(spacerHue, spacerShade, DEFAULT_THEME)}`
    );
  });

  it('knocks out spacer as expected', () => {
    const boxShadow = getFocusBoxShadow({ theme: DEFAULT_THEME, spacerWidth: null });

    expect(boxShadow).not.toContain(`${DEFAULT_THEME.shadowWidths.xs} ${PALETTE.white}`);
  });

  it('combines with existing box-shadow as expected', () => {
    const dropShadow = DEFAULT_THEME.shadows.lg('4px', '8px', PALETTE.black);
    const boxShadow = getFocusBoxShadow({
      theme: DEFAULT_THEME,
      boxShadow: dropShadow
    });

    expect(boxShadow).toContain(dropShadow);
  });
});
