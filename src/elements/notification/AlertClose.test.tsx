/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createRef } from 'react';

import { DARK_THEME, RTL_THEME, render } from '../../test/render';
import PALETTE from '../../theming/elements/palette';
import { Type } from '../../types/elements';
import { Alert } from './Alert';
import { Close } from './AlertClose';

describe('Close', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLButtonElement>();
    const { container } = render(<Close ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  it('sets default aria-label', () => {
    const { container } = render(<Close />);

    expect(container.firstElementChild!.getAttribute('aria-label')).toBe('Close');
  });

  it('sets aria-label as prop', () => {
    const { container } = render(<Close aria-label="Foo" />);

    expect(container.firstElementChild!.getAttribute('aria-label')).toBe('Foo');
  });

  it('renders the close and icon ids, which a prop cannot replace', () => {
    const { getByRole } = render(<Close data-garden-id="custom" />);
    const button = getByRole('button');

    expect(button).toHaveAttribute('data-garden-id', 'notifications.close');
    expect(button.querySelector('[data-garden-id="buttons.icon"]')).not.toBeNull();
  });

  it('renders a button of type "button" by default', () => {
    const { getByRole } = render(<Close />);

    expect(getByRole('button')).toHaveAttribute('type', 'button');
  });

  it('renders with the correct styling for RTL writing systems', () => {
    const { container } = render(<Close />, { theme: RTL_THEME });

    expect(container.firstChild).toHaveStyleRule('left', '4px');
    expect(container.firstChild).not.toHaveStyleRule('right');
  });

  it('renders with the correct styling for LTR writing systems', () => {
    const { container } = render(<Close />);

    expect(container.firstChild).toHaveStyleRule('right', '4px');
    expect(container.firstChild).not.toHaveStyleRule('left');
  });

  it.each<{ type: Type; mode: 'light' | 'dark'; color: string }>([
    { type: 'success', mode: 'light', color: PALETTE.green[700] },
    { type: 'success', mode: 'dark', color: PALETTE.green[400] },
    { type: 'error', mode: 'light', color: PALETTE.red[700] },
    { type: 'error', mode: 'dark', color: PALETTE.red[400] },
    { type: 'warning', mode: 'light', color: PALETTE.yellow[700] },
    { type: 'warning', mode: 'dark', color: PALETTE.yellow[400] },
    { type: 'info', mode: 'light', color: PALETTE.grey[700] },
    { type: 'info', mode: 'dark', color: PALETTE.grey[500] }
  ])('renders the $mode mode color given type "$type"', ({ type, mode, color }) => {
    const { getByRole } = render(
      <Alert type={type}>
        <Close />
      </Alert>,
      { theme: mode === 'dark' ? DARK_THEME : undefined }
    );

    expect(getByRole('button')).toHaveStyleRule('color', color);
  });
});
