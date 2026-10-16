/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createRef } from 'react';

import { DARK_THEME, RTL_THEME, render } from '../../test/render';
import PALETTE from '../../theming/elements/palette';
import { Close } from './Close';

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

  it('renders a type prop', () => {
    const { getByRole } = render(<Close type="submit" />);

    expect(getByRole('button')).toHaveAttribute('type', 'submit');
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

  it.each([
    ['light', undefined, PALETTE.grey[700]],
    ['dark', DARK_THEME, PALETTE.grey[500]]
  ])('renders %s mode neutral color given no type', (_mode, theme, color) => {
    const { container } = render(<Close />, { theme });

    expect(container.firstChild).toHaveStyleRule('color', color);
  });
});
