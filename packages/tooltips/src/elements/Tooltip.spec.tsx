/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, act, renderRtl } from 'garden-test-utils';
import { DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';

import { Tooltip, ITooltipProps } from './Tooltip';

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
    const { getByTestId, getByText } = renderRtl(<BasicExample />);

    expect(getByText('Trigger')).not.toHaveFocus();

    act(() => {
      userEvent.tab();
      jest.runOnlyPendingTimers();
    });

    expect(getByText('Trigger')).toHaveFocus();
    expect(getByTestId('tooltip')).toHaveStyleRule('direction', 'rtl');
  });

  describe('Focusable Tooltip Content', () => {
    it('remains visible if tooltip content is focused', () => {
      const { getByTestId, getByText } = renderRtl(
        <Tooltip content={<button>Content CTA</button>} data-test-id="tooltip">
          <button>Trigger</button>
        </Tooltip>
      );

      expect(getByText('Trigger')).not.toHaveFocus();

      act(() => {
        userEvent.tab();
        jest.runOnlyPendingTimers();
      });

      expect(getByText('Trigger')).toHaveFocus();
      expect(getByTestId('tooltip')).toHaveAttribute('aria-hidden', 'false');

      act(() => {
        userEvent.tab();
        jest.runOnlyPendingTimers();
      });

      expect(getByText('Trigger')).not.toHaveFocus();
      expect(getByText('Content CTA')).toHaveFocus();
      expect(getByTestId('tooltip')).toHaveAttribute('aria-hidden', 'false');
    });

    it('closes tooltip if content is blurred', () => {
      const { getByTestId } = renderRtl(<BasicExample />);

      act(() => {
        userEvent.tab();
        jest.runOnlyPendingTimers();
      });

      expect(getByTestId('tooltip')).toHaveAttribute('aria-hidden', 'false');

      act(() => {
        userEvent.tab();
        jest.runOnlyPendingTimers();
      });

      expect(getByTestId('tooltip')).toHaveAttribute('aria-hidden', 'true');
    });
  });

  describe('Types', () => {
    it('renders light tooltip if provided', () => {
      const { getByTestId } = render(<BasicExample type="light" />);

      act(() => {
        userEvent.tab();
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
        userEvent.tab();
        jest.runOnlyPendingTimers();
      });

      expect(getByTestId('tooltip')).toHaveStyleRule('color', DEFAULT_THEME.colors.background);
    });
  });

  describe('Sizes', () => {
    it('renders extra-large tooltip', () => {
      const { getByTestId } = render(<BasicExample size="extra-large" />);

      act(() => {
        userEvent.tab();
        jest.runOnlyPendingTimers();
      });

      const tooltip = getByTestId('tooltip');

      expect(tooltip).toHaveStyleRule('max-width', '460px');
    });

    it('renders large tooltip', () => {
      const { getByTestId } = render(<BasicExample size="large" />);

      act(() => {
        userEvent.tab();
        jest.runOnlyPendingTimers();
      });

      const tooltip = getByTestId('tooltip');

      expect(tooltip).toHaveStyleRule('max-width', '270px');
    });

    it('renders medium tooltip', () => {
      const { getByTestId } = render(<BasicExample size="medium" />);

      act(() => {
        userEvent.tab();
        jest.runOnlyPendingTimers();
      });

      const tooltip = getByTestId('tooltip');

      expect(tooltip).toHaveStyleRule('max-width', '140px');
    });
  });
});
