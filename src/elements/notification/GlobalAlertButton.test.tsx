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

  it.each<{ type: Type }>([
    { type: 'success' },
    { type: 'error' },
    { type: 'warning' },
    { type: 'info' }
  ])('uses the basic button styles when basic, given type $type', ({ type }) => {
    const { getByRole } = render(
      <GlobalAlert type={type}>
        <GlobalAlertButton isBasic>button</GlobalAlertButton>
      </GlobalAlert>
    );

    expect(getByRole('button')).toHaveStyleRule('color', PALETTE.grey[900]);
    expect(getByRole('button')).toHaveStyleRule(
      'background-color',
      rgba(PALETTE.grey[700], DEFAULT_THEME.opacity[100]),
      { modifier: '&:hover' }
    );
  });

  it.each<{ type: Type }>([
    { type: 'success' },
    { type: 'error' },
    { type: 'warning' },
    { type: 'info' }
  ])('renders the primary background color given type $type', ({ type }) => {
    const { getByRole } = render(
      <GlobalAlert type={type}>
        <GlobalAlertButton>button</GlobalAlertButton>
      </GlobalAlert>
    );

    expect(getByRole('button')).toHaveStyleRule('background-color', PALETTE.grey[900]);
  });

  it('renders a 16px svg, as in any small button', () => {
    const { getByRole } = render(
      <GlobalAlert type="info">
        <GlobalAlertButton>button</GlobalAlertButton>
      </GlobalAlert>
    );

    expect(getByRole('button')).toHaveStyleRule('width', DEFAULT_THEME.iconSizes.md, {
      modifier: '& svg'
    });
    expect(getByRole('button')).toHaveStyleRule('height', DEFAULT_THEME.iconSizes.md, {
      modifier: '& svg'
    });
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
