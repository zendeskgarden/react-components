/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createRef } from 'react';

import { RTL_THEME, render } from '../../test/render';
import DEFAULT_THEME from '../../theming/elements/theme';
import { Drawer } from './Drawer';

describe('Drawer.Close', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLButtonElement>();
    const { getByRole } = render(
      <Drawer isOpen>
        <Drawer.Close ref={ref} />
      </Drawer>
    );

    expect(getByRole('button')).toBe(ref.current);
  });

  it('renders the close and icon ids, which a prop cannot replace', () => {
    const { getByRole } = render(
      <Drawer isOpen>
        <Drawer.Close data-garden-id="custom" />
      </Drawer>
    );
    const close = getByRole('button');

    expect(close).toHaveAttribute('data-garden-id', 'modals.drawer_modal.close');
    expect(close.querySelector('[data-garden-id="buttons.icon"]')).not.toBeNull();
  });

  it('renders default styling', () => {
    const { getByRole } = render(
      <Drawer isOpen>
        <Drawer.Close />
      </Drawer>
    );

    expect(getByRole('button')).toHaveStyleRule('top', `${DEFAULT_THEME.space.base * 2.5}px`);
    expect(getByRole('button')).toHaveStyleRule('right', `${DEFAULT_THEME.space.base * 2}px`);
  });

  it('renders RTL styling', () => {
    const { getByRole } = render(
      <Drawer isOpen>
        <Drawer.Close />
      </Drawer>,
      { theme: RTL_THEME }
    );

    expect(getByRole('button')).toHaveStyleRule('top', `${DEFAULT_THEME.space.base * 2.5}px`);
    expect(getByRole('button')).toHaveStyleRule('left', `${DEFAULT_THEME.space.base * 2}px`);
  });
});
