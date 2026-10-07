/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PALETTE from '../elements/palette';
import DEFAULT_THEME from '../elements/theme';
import { getCheckeredBackground } from './getCheckeredBackground';

describe('getCheckeredBackground', () => {
  it('returns a valid background', () => {
    const size = 10;
    const result = getCheckeredBackground({ theme: DEFAULT_THEME, size });
    const expected1 = `0 0px / ${size}px ${size}px repeat`;
    const expected2 = `${size / 2}px ${size / 2}px / ${size}px ${size}px repeat`;

    expect(result).toContain(expected1);
    expect(result).toContain(expected2);
  });

  it('handles color overlay as expected', () => {
    const expected = `${PALETTE.blue[700]}80`;
    const result = getCheckeredBackground({ theme: DEFAULT_THEME, size: 10, overlay: expected });

    expect(result).toContain(`linear-gradient(${expected}, ${expected})`);
  });

  it('handles linear-gradient overlay as expected', () => {
    const expected = `linear-gradient(to right, ${PALETTE.white}, ${PALETTE.black})`;
    const result = getCheckeredBackground({ theme: DEFAULT_THEME, size: 10, overlay: expected });

    expect(result).toContain(`${expected},`);
  });

  it('handles vertical position as expected', () => {
    const size = 10;
    const positionY = DEFAULT_THEME.space.base;
    const result = getCheckeredBackground({ theme: DEFAULT_THEME, size, positionY });
    const expected1 = `0 ${positionY}px`;
    const expected2 = `${size / 2}px ${size / 2 + positionY}px`;

    expect(result).toContain(expected1);
    expect(result).toContain(expected2);
  });

  it('handles repeat as expected', () => {
    const repeat = 'repeat-x';
    const result = getCheckeredBackground({ theme: DEFAULT_THEME, size: 10, repeat });

    expect(result).toContain(repeat);
  });

  it('handles RTL as expected', () => {
    const theme = { ...DEFAULT_THEME, rtl: true };
    const size = 10;
    const result = getCheckeredBackground({ theme, size });
    const expected1 = `100% 0px / ${size}px ${size}px repeat`;
    const expected2 = `calc(100% - ${size / 2}px) ${size / 2}px / ${size}px ${size}px repeat`;

    expect(result).toContain(expected1);
    expect(result).toContain(expected2);
  });
});
