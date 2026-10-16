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
import { Type } from '../../types/elements';
import { GlobalAlert } from './GlobalAlert';
import { GlobalAlertButton } from './GlobalAlertButton';

describe('GlobalAlertButton', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLButtonElement>();
    const { container } = render(<GlobalAlertButton ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  it('uses the basic close styles when basic', () => {
    const { getByRole } = render(
      <GlobalAlert type="success">
        <GlobalAlertButton isBasic>button</GlobalAlertButton>
      </GlobalAlert>
    );

    expect(getByRole('button')).toHaveStyleRule(
      'background-color',
      rgba(PALETTE.green[100], DEFAULT_THEME.opacity[100]),
      { modifier: '&:hover' }
    );
  });

  it.each<{ type: Type; color: string }>([
    { type: 'success', color: PALETTE.green[900] },
    { type: 'error', color: PALETTE.red[900] },
    { type: 'warning', color: PALETTE.yellow[700] },
    { type: 'info', color: PALETTE.blue[700] }
  ])('renders $type background color', ({ type, color }) => {
    const { getByRole } = render(
      <GlobalAlert type={type}>
        <GlobalAlertButton>button</GlobalAlertButton>
      </GlobalAlert>
    );

    expect(getByRole('button')).toHaveStyleRule('background-color', color);
  });

  it('renders the button id, which a prop cannot replace', () => {
    const { getByRole } = render(<GlobalAlertButton data-garden-id="custom" />);

    expect(getByRole('button')).toHaveAttribute(
      'data-garden-id',
      'notifications.global_alert.button'
    );
  });

  it('renders a button of type "button" by default', () => {
    const { getByRole } = render(<GlobalAlertButton />);

    expect(getByRole('button')).toHaveAttribute('type', 'button');
  });
});
