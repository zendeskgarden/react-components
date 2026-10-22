/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { rgba } from 'polished';
import { createRef } from 'react';
import { css } from 'styled-components';

import { render } from '../../test/render';
import PALETTE from '../../theming/elements/palette';
import DEFAULT_THEME from '../../theming/elements/theme';
import { Type } from '../../types/elements';
import { StyledIcon } from '../../views/button/StyledIcon';
import { GlobalAlert } from './GlobalAlert';
import { GlobalAlertButton } from './GlobalAlertButton';

describe('GlobalAlertButton', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLButtonElement>();
    const { container } = render(<GlobalAlertButton ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  describe('basic', () => {
    const CASES: { type: Type; color: string }[] = [
      { type: 'success', color: PALETTE.white },
      { type: 'error', color: PALETTE.white },
      { type: 'warning', color: PALETTE.grey[900] },
      { type: 'info', color: PALETTE.grey[900] }
    ];

    const renderBasic = (type: Type) =>
      render(
        <GlobalAlert type={type}>
          <GlobalAlertButton isBasic>button</GlobalAlertButton>
        </GlobalAlert>
      ).getByRole('button');

    it.each(CASES)('renders $type foreground color', ({ type, color }) => {
      const button = renderBasic(type);

      expect(button).toHaveStyleRule('color', color);
      expect(button).toHaveStyleRule('color', color, { modifier: '&:hover' });
      expect(button).toHaveStyleRule('color', color, { modifier: '&:active' });
      expect(button).toHaveStyleRule('color', color, { modifier: '&:focus-visible' });
    });

    it.each(CASES)('renders $type hover background color', ({ type, color }) => {
      expect(renderBasic(type)).toHaveStyleRule(
        'background-color',
        rgba(color, DEFAULT_THEME.opacity[100]),
        { modifier: '&:hover' }
      );
    });

    it.each(CASES)('renders $type active background color', ({ type, color }) => {
      expect(renderBasic(type)).toHaveStyleRule(
        'background-color',
        rgba(color, DEFAULT_THEME.opacity[200]),
        { modifier: '&:active' }
      );
    });

    it.each(CASES)('renders the neutral focus ring given type $type', ({ type }) => {
      expect(renderBasic(type)).toHaveStyleRule(
        'box-shadow',
        expect.stringContaining(PALETTE.grey[900]),
        { modifier: '&:focus-visible' }
      );
    });

    it.each(CASES)('renders the icon in the foreground color given type $type', ({ type }) => {
      expect(renderBasic(type)).toHaveStyleRule('color', 'inherit', {
        modifier: css`& ${StyledIcon}` as any
      });
    });
  });

  it.each<{ type: Type }>([
    { type: 'success' },
    { type: 'error' },
    { type: 'warning' },
    { type: 'info' }
  ])('keeps the primary text color given type $type', ({ type }) => {
    const { getByRole } = render(
      <GlobalAlert type={type}>
        <GlobalAlertButton>button</GlobalAlertButton>
      </GlobalAlert>
    );

    expect(getByRole('button')).toHaveStyleRule('color', PALETTE.white);
    expect(getByRole('button')).not.toHaveStyleRule('color', PALETTE.grey[900], {
      modifier: '&:hover'
    });
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
