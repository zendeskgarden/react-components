/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { rgba } from 'polished';
import { createRef } from 'react';

import { render } from '../../test/render';
import PALETTE from '../../theming/elements/palette';
import DEFAULT_THEME from '../../theming/elements/theme';
import { getColor } from '../../theming/utils/getColor';
import { Type } from '../../types/elements';
import { GlobalAlert } from './GlobalAlert';
import { GlobalAlertClose } from './GlobalAlertClose';

/**
 * The info close has no hover or active background of its own; it takes the
 * basic icon button tint, which is neutral in v10 (blue in v9).
 */
const INFO_HOVER = getColor({
  theme: DEFAULT_THEME,
  hue: 'neutralHue',
  light: { shade: 700 },
  transparency: DEFAULT_THEME.opacity[100]
});
const INFO_ACTIVE = getColor({
  theme: DEFAULT_THEME,
  hue: 'neutralHue',
  light: { shade: 700 },
  transparency: DEFAULT_THEME.opacity[200]
});

describe('GlobalAlertClose', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLButtonElement>();
    const { container } = render(<GlobalAlertClose ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  it.each<{ type: Type; color: string }>([
    { type: 'success', color: rgba(PALETTE.green[100], DEFAULT_THEME.opacity[100]) },
    { type: 'error', color: rgba(PALETTE.red[100], DEFAULT_THEME.opacity[100]) },
    { type: 'warning', color: rgba(PALETTE.yellow[700], DEFAULT_THEME.opacity[100]) },
    { type: 'info', color: INFO_HOVER }
  ])('renders $type hover background color', ({ type, color }) => {
    const { getByRole } = render(
      <GlobalAlert type={type}>
        <GlobalAlertClose />
      </GlobalAlert>
    );

    expect(getByRole('button')).toHaveStyleRule('background-color', color, {
      modifier: '&:hover'
    });
  });

  it.each<{ type: Type; color: string }>([
    { type: 'success', color: rgba(PALETTE.green[100], DEFAULT_THEME.opacity[200]) },
    { type: 'error', color: rgba(PALETTE.red[100], DEFAULT_THEME.opacity[200]) },
    { type: 'warning', color: rgba(PALETTE.yellow[700], DEFAULT_THEME.opacity[200]) },
    { type: 'info', color: INFO_ACTIVE }
  ])('renders $type active background color', ({ type, color }) => {
    const { getByRole } = render(
      <GlobalAlert type={type}>
        <GlobalAlertClose />
      </GlobalAlert>
    );

    expect(getByRole('button')).toHaveStyleRule('background-color', color, {
      modifier: '&:active'
    });
  });

  it('renders the close and icon ids, which a prop cannot replace', () => {
    const { getByRole } = render(<GlobalAlertClose data-garden-id="custom" />);
    const button = getByRole('button');

    expect(button).toHaveAttribute('data-garden-id', 'notifications.global_alert.close');
    expect(button.querySelector('[data-garden-id="buttons.icon"]')).not.toBeNull();
  });

  it('renders a button of type "button" by default', () => {
    const { getByRole } = render(<GlobalAlertClose />);

    expect(getByRole('button')).toHaveAttribute('type', 'button');
  });
});
