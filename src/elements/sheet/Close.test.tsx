/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { screen } from '@testing-library/react';
import { createRef } from 'react';
import { vi } from 'vitest';

import { useSheetContext } from '../../hooks/sheet/useSheetContext';
import { RTL_THEME, render } from '../../test/render';
import DEFAULT_THEME from '../../theming/elements/theme';
import { Close } from './Close';

vi.mock('../../hooks/sheet/useSheetContext', () => {
  const setIsCloseButtonPresent = vi.fn();

  return {
    useSheetContext: () => ({
      setIsCloseButtonPresent
    })
  };
});

describe('Sheet.Close', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLButtonElement>();

    render(<Close ref={ref} />);

    const btn = screen.getByRole('button');

    expect(btn).toBe(ref.current);
  });

  it('renders the close and icon ids, which a prop cannot replace', () => {
    render(<Close data-garden-id="custom" />);

    const btn = screen.getByRole('button');

    expect(btn).toHaveAttribute('data-garden-id', 'chrome.sheet_close');
    expect(btn.querySelector('[data-garden-id="buttons.icon"]')).not.toBeNull();
  });

  it('renders as a button of type button', () => {
    render(<Close />);

    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });

  it('renders default styling', () => {
    render(<Close />);

    const btn = screen.getByRole('button');

    expect(btn).toHaveStyleRule('top', `${DEFAULT_THEME.space.base * 2.5}px`);
    expect(btn).toHaveStyleRule('right', `${DEFAULT_THEME.space.base * 2.5}px`);
  });

  it('renders RTL styling', () => {
    render(<Close />, { theme: RTL_THEME });

    expect(screen.getByRole('button')).toHaveStyleRule(
      'left',
      `${DEFAULT_THEME.space.base * 2.5}px`
    );
  });

  describe('functionality', () => {
    it('calls setIsCloseButtonPresent when mounting and unmounting', () => {
      const { unmount } = render(<Close />);
      const { setIsCloseButtonPresent } = useSheetContext();

      expect(setIsCloseButtonPresent).toHaveBeenCalledWith(true);

      unmount();

      expect(setIsCloseButtonPresent).toHaveBeenCalledWith(false);
      expect(setIsCloseButtonPresent).toHaveBeenCalledTimes(2);
    });
  });
});
