/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createRef } from 'react';

import { RTL_THEME, render } from '../../test/render';
import DEFAULT_THEME from '../../theming/elements/theme';
import { Close } from './Close';
import { Modal } from './Modal';

describe('Close', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLButtonElement>();

    const { getByTestId } = render(
      <Modal>
        <Close ref={ref} data-test-id="close">
          Close content
        </Close>
      </Modal>
    );

    expect(getByTestId('close')).toBe(ref.current);
  });

  it('renders the close and icon ids, which a prop cannot replace', () => {
    const { getByTestId } = render(
      <Modal>
        <Close data-test-id="close" data-garden-id="custom" />
      </Modal>
    );
    const close = getByTestId('close');

    expect(close).toHaveAttribute('data-garden-id', 'modals.close');
    expect(close.querySelector('[data-garden-id="buttons.icon"]')).not.toBeNull();
    expect(close).toHaveAttribute('type', 'button');
  });

  it('renders default styling', () => {
    const { getByTestId } = render(
      <Modal>
        <Close data-test-id="close" />
      </Modal>
    );

    expect(getByTestId('close')).toHaveStyleRule('top', `${DEFAULT_THEME.space.base * 2.5}px`);
    expect(getByTestId('close')).toHaveStyleRule('right', `${DEFAULT_THEME.space.base * 6.5}px`);
  });

  it('renders RTL styling', () => {
    const { getByTestId } = render(
      <Modal>
        <Close data-test-id="close" />
      </Modal>,
      { theme: RTL_THEME }
    );

    expect(getByTestId('close')).toHaveStyleRule('top', `${DEFAULT_THEME.space.base * 2.5}px`);
    expect(getByTestId('close')).toHaveStyleRule('left', `${DEFAULT_THEME.space.base * 6.5}px`);
  });
});
