/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, fireEvent, act, renderRtl } from 'garden-test-utils';
import { DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';

import Tooltip, { ITooltipProps } from './Tooltip';

jest.useFakeTimers();

describe('Tooltip', () => {
  const BasicExample = ({ placement, size, type, ...other }: Partial<ITooltipProps>) => (
    <Tooltip
      placement={placement}
      size={size}
      type={type}
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua."
      data-test-id="tooltip"
      {...other}
    >
      <button data-test-id="trigger">Trigger</button>
    </Tooltip>
  );

  it('renders tooltip within appendToNode prop', () => {
    const { getByTestId } = render(<BasicExample appendToNode={document.body} />);

    expect(getByTestId('tooltip').parentElement!.parentElement!.tagName).toBe('BODY');
  });

  it('renders tooltip with RTL styling if provided', () => {
    const { getByTestId } = renderRtl(<BasicExample />);

    act(() => {
      fireEvent.focus(getByTestId('trigger'));
      jest.runOnlyPendingTimers();
    });

    expect(getByTestId('tooltip')).toHaveStyleRule('direction', 'rtl');
  });

  describe('Focusable Tooltip Content', () => {
    it('remains visible if tooltip content is focused', () => {
      const { getByTestId } = renderRtl(<BasicExample />);

      act(() => {
        fireEvent.focus(getByTestId('trigger'));
        jest.runOnlyPendingTimers();
      });

      expect(getByTestId('tooltip')).toHaveAttribute('aria-hidden', 'false');

      act(() => {
        fireEvent.focus(getByTestId('tooltip'));
        jest.runOnlyPendingTimers();
      });

      expect(getByTestId('tooltip')).toHaveAttribute('aria-hidden', 'false');
    });

    it('closes tooltip if content is blurred', () => {
      const { getByTestId } = renderRtl(<BasicExample />);

      act(() => {
        fireEvent.focus(getByTestId('trigger'));
        jest.runOnlyPendingTimers();
      });

      expect(getByTestId('tooltip')).toHaveAttribute('aria-hidden', 'false');

      act(() => {
        fireEvent.blur(getByTestId('tooltip'));
        jest.runOnlyPendingTimers();
      });

      expect(getByTestId('tooltip')).toHaveAttribute('aria-hidden', 'true');
    });
  });

  describe('Types', () => {
    it('renders light tooltip if provided', () => {
      const { getByTestId } = render(<BasicExample type="light" />);

      act(() => {
        fireEvent.focus(getByTestId('trigger'));
        jest.runOnlyPendingTimers();
      });

      expect(getByTestId('tooltip')).toHaveStyleRule(
        'color',
        getColor('neutralHue', 700, DEFAULT_THEME)
      );
    });

    it('renders dark tooltip if provided', () => {
      const { getByTestId } = render(<BasicExample type="dark" />);

      act(() => {
        fireEvent.focus(getByTestId('trigger'));
        jest.runOnlyPendingTimers();
      });

      expect(getByTestId('tooltip')).toHaveStyleRule('color', DEFAULT_THEME.colors.background);
    });
  });

  describe('Sizes', () => {
    it('renders extra-large tooltip', () => {
      const { getByTestId } = render(<BasicExample size="extra-large" />);

      act(() => {
        fireEvent.focus(getByTestId('trigger'));
        jest.runOnlyPendingTimers();
      });

      const tooltip = getByTestId('tooltip');

      expect(tooltip).toHaveStyleRule('max-width', '460px');
    });

    it('renders large tooltip', () => {
      const { getByTestId } = render(<BasicExample size="large" />);

      act(() => {
        fireEvent.focus(getByTestId('trigger'));
        jest.runOnlyPendingTimers();
      });

      const tooltip = getByTestId('tooltip');

      expect(tooltip).toHaveStyleRule('max-width', '270px');
    });

    it('renders medium tooltip', () => {
      const { getByTestId } = render(<BasicExample size="medium" />);

      act(() => {
        fireEvent.focus(getByTestId('trigger'));
        jest.runOnlyPendingTimers();
      });

      const tooltip = getByTestId('tooltip');

      expect(tooltip).toHaveStyleRule('max-width', '140px');
    });
  });
});
