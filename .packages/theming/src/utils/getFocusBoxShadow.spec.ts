/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PALETTE from '../elements/palette';
import DEFAULT_THEME from '../elements/theme';
import { getColor } from './getColor';
import { getFocusBoxShadow } from './getFocusBoxShadow';

describe('getFocusBoxShadow', () => {
  it('defaults as expected', () => {
    const boxShadow = getFocusBoxShadow({ theme: DEFAULT_THEME });

    expect(boxShadow).toContain(`${DEFAULT_THEME.shadowWidths.md} ${PALETTE.blue[700]}`);
    expect(boxShadow).toContain(`${DEFAULT_THEME.shadowWidths.xs} ${PALETTE.white}`);
  });

  it('handles dark mode as expected', () => {
    const boxShadow = getFocusBoxShadow({
      theme: { ...DEFAULT_THEME, colors: { ...DEFAULT_THEME.colors, base: 'dark' } }
    });

    expect(boxShadow).toContain(`${DEFAULT_THEME.shadowWidths.md} ${PALETTE.blue[600]}`);
    expect(boxShadow).toContain(`${DEFAULT_THEME.shadowWidths.xs} ${PALETTE.grey[1100]}`);
  });

  it('resizes as expected', () => {
    const boxShadow = getFocusBoxShadow({
      theme: DEFAULT_THEME,
      shadowWidth: 'sm',
      spacerWidth: 'sm'
    });

    expect(boxShadow).toContain(`${DEFAULT_THEME.shadowWidths.sm} ${PALETTE.blue[700]}`);
    expect(boxShadow).toContain(`${DEFAULT_THEME.shadowWidths.sm} ${PALETTE.white}`);
  });

  it('insets as expected', () => {
    const boxShadow = getFocusBoxShadow({ theme: DEFAULT_THEME, inset: true });

    expect(boxShadow).toContain('inset');
  });

  it('overrides color as expected', () => {
    const hue = 'successHue';
    const shade = 400;
    const boxShadow = getFocusBoxShadow({ theme: DEFAULT_THEME, color: { hue, shade } });

    expect(boxShadow).toContain(
      `${DEFAULT_THEME.shadowWidths.md} ${getColor({ hue, shade, theme: DEFAULT_THEME })}`
    );
  });

  it('overrides spacer color as expected', () => {
    const spacerHue = 'successHue';
    const spacerShade = 400;
    const boxShadow = getFocusBoxShadow({
      theme: DEFAULT_THEME,
      spacerColor: { hue: spacerHue, shade: spacerShade }
    });

    expect(boxShadow).toContain(
      `${DEFAULT_THEME.shadowWidths.xs} ${getColor({ hue: spacerHue, shade: spacerShade, theme: DEFAULT_THEME })}`
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
