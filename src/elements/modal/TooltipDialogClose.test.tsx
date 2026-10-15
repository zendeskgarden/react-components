/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { act } from '@testing-library/react';
import { createRef } from 'react';

import { RTL_THEME, render } from '../../test/render';
import DEFAULT_THEME from '../../theming/elements/theme';
import { TooltipDialog } from './TooltipDialog';

describe('TooltipDialog.Close', () => {
  it('passes ref to underlying DOM element', async () => {
    const ref = createRef<HTMLButtonElement>();
    const { container, getByRole, rerender } = render(<div />);

    await act(async () => {
      await rerender(
        <TooltipDialog referenceElement={container as HTMLElement}>
          <TooltipDialog.Close ref={ref} aria-label="Close" />
        </TooltipDialog>
      );
    });

    expect(getByRole('button')).toBe(ref.current);
  });

  it('renders the close and icon ids, which a prop cannot replace', async () => {
    const { container, getByRole, rerender } = render(<div />);

    await act(async () => {
      await rerender(
        <TooltipDialog referenceElement={container as HTMLElement}>
          <TooltipDialog.Close aria-label="Close" data-garden-id="custom" />
        </TooltipDialog>
      );
    });

    const close = getByRole('button');

    expect(close).toHaveAttribute('data-garden-id', 'modals.tooltip_dialog.close');
    expect(close.querySelector('[data-garden-id="buttons.icon"]')).not.toBeNull();
  });

  it.each([
    ['default', undefined, 'right'],
    ['RTL', RTL_THEME, 'left']
  ] as const)('renders %s styling', async (_name, theme, side) => {
    const { container, getByRole, rerender } = render(<div />, { theme });

    await act(async () => {
      await rerender(
        <TooltipDialog referenceElement={container as HTMLElement}>
          <TooltipDialog.Close aria-label="Close" />
        </TooltipDialog>
      );
    });

    expect(getByRole('button')).toHaveStyleRule('top', `${DEFAULT_THEME.space.base * 2.5}px`);
    expect(getByRole('button')).toHaveStyleRule(side, `${DEFAULT_THEME.space.base * 3}px`);
  });

  it('is a medium icon button', async () => {
    const { container, getByRole, rerender } = render(<div />);

    await act(async () => {
      await rerender(
        <TooltipDialog referenceElement={container as HTMLElement}>
          <TooltipDialog.Close aria-label="Close" />
        </TooltipDialog>
      );
    });

    expect(getByRole('button')).toHaveStyleRule('width', `${DEFAULT_THEME.space.base * 10}px`);
  });
});
