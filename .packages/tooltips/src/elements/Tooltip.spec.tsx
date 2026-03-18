/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import userEvent from '@testing-library/user-event';
import { PALETTE } from '@zendeskgarden/react-theming';
import { render, act, renderRtl, getRenderFn } from 'garden-test-utils';
import React from 'react';

import { ITooltipProps } from '../types';
import { Tooltip } from './Tooltip';

jest.useFakeTimers();

describe('Tooltip', () => {
  const user = userEvent.setup({ delay: null });

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

  beforeAll(() => {
    const elementMatches = HTMLElement.prototype.matches;

    // Override `.matches` currently missing from JSDOM
    HTMLElement.prototype.matches = function matches(selector: string) {
      let retVal;

      if (selector === ':focus-visible') {
        retVal = this === document.activeElement;
      } else {
        retVal = elementMatches.call(this, selector);
      }

      return retVal;
    };
  });

  it('renders as expected with the `isLabel` prop', () => {
    const id = 'test';
    const { getByTestId } = render(<BasicExample id={id} isLabel />);
    const element = getByTestId('trigger');

    expect(element).toHaveAttribute('aria-labelledby', id);
    expect(element).not.toHaveAttribute('aria-describedby');
  });

  it('renders tooltip within appendToNode prop', () => {
    const { getByTestId } = render(<BasicExample appendToNode={document.body} />);

    expect(getByTestId('tooltip').parentElement!.parentElement!.tagName).toBe('BODY');
  });

  it('renders tooltip with RTL styling if provided', async () => {
    const { getByTestId, getByText } = renderRtl(<BasicExample />);

    expect(getByText('Trigger')).not.toHaveFocus();

    await act(async () => {
      await user.tab();
      jest.runOnlyPendingTimers();
    });

    expect(getByText('Trigger')).toHaveFocus();
    expect(getByTestId('tooltip')).toHaveStyleRule('direction', 'rtl');
  });

  describe('Focusable Tooltip Content', () => {
    it('remains visible if tooltip content is focused', async () => {
      const { getByTestId, getByText } = renderRtl(
        <Tooltip content={<button>Content CTA</button>} data-test-id="tooltip">
          <button>Trigger</button>
        </Tooltip>
      );

      expect(getByText('Trigger')).not.toHaveFocus();

      await act(async () => {
        await user.tab();
        jest.runOnlyPendingTimers();
      });

      expect(getByText('Trigger')).toHaveFocus();
      expect(getByTestId('tooltip')).toHaveAttribute('aria-hidden', 'false');

      await act(async () => {
        await user.tab();
        jest.runOnlyPendingTimers();
      });

      expect(getByText('Trigger')).not.toHaveFocus();
      expect(getByText('Content CTA')).toHaveFocus();
      expect(getByTestId('tooltip')).toHaveAttribute('aria-hidden', 'false');
    });

    it('closes tooltip if content is blurred', async () => {
      const { getByTestId } = renderRtl(<BasicExample />);

      await act(async () => {
        await user.tab();
        jest.runOnlyPendingTimers();
      });

      expect(getByTestId('tooltip')).toHaveAttribute('aria-hidden', 'false');

      await act(async () => {
        await user.tab();
        jest.runOnlyPendingTimers();
      });

      expect(getByTestId('tooltip')).toHaveAttribute('aria-hidden', 'true');
    });
  });

  describe('Colors by Tooltip type', () => {
    type Args = [
      'dark' | 'light',
      'dark' | 'light',
      {
        color: string;
        bgColor: string;
        borderColor: string;
      }
    ];

    it.each<Args>([
      [
        'light',
        'light',
        {
          color: PALETTE.grey[700],
          bgColor: PALETTE.white,
          borderColor: PALETTE.grey[300]
        }
      ],
      [
        'light',
        'dark',
        {
          color: PALETTE.grey[500],
          bgColor: PALETTE.grey[1000],
          borderColor: PALETTE.grey[800]
        }
      ],
      [
        'dark',
        'light',
        {
          color: PALETTE.white,
          bgColor: PALETTE.grey[900],
          borderColor: PALETTE.grey[900]
        }
      ],
      [
        'dark',
        'dark',
        {
          color: PALETTE.white,
          bgColor: PALETTE.grey[700],
          borderColor: PALETTE.grey[700]
        }
      ]
    ])(
      'renders a "%s" tooltip in "%s" mode',
      async (type, mode, { color, bgColor, borderColor }) => {
        const { getByTestId } = getRenderFn(mode)(<BasicExample type={type} />);

        await act(async () => {
          await user.tab();
          jest.runOnlyPendingTimers();
        });

        const tooltip = getByTestId('tooltip');
        expect(tooltip).toHaveStyleRule('color', color);
        expect(tooltip).toHaveStyleRule('background-color', bgColor);
        expect(tooltip).toHaveStyleRule('border-color', borderColor);
      }
    );
  });

  describe('Sizes', () => {
    it('renders extra-large tooltip', async () => {
      const { getByTestId } = render(<BasicExample size="extra-large" />);

      await act(async () => {
        await user.tab();
        jest.runOnlyPendingTimers();
      });

      const tooltip = getByTestId('tooltip');

      expect(tooltip).toHaveStyleRule('max-width', '460px');
    });

    it('renders large tooltip', async () => {
      const { getByTestId } = render(<BasicExample size="large" />);

      await act(async () => {
        await user.tab();
        jest.runOnlyPendingTimers();
      });

      const tooltip = getByTestId('tooltip');

      expect(tooltip).toHaveStyleRule('max-width', '270px');
    });

    it('renders medium tooltip', async () => {
      const { getByTestId } = render(<BasicExample size="medium" />);

      await act(async () => {
        await user.tab();
        jest.runOnlyPendingTimers();
      });

      const tooltip = getByTestId('tooltip');

      expect(tooltip).toHaveStyleRule('max-width', '140px');
    });
  });

  describe('React node content', () => {
    it('renders with Title and Paragraph', async () => {
      const { getByTestId } = renderRtl(
        <BasicExample
          data-test-id="tooltip"
          content={
            <>
              <Tooltip.Title>Title</Tooltip.Title>
              <Tooltip.Paragraph>Paragraph</Tooltip.Paragraph>
            </>
          }
        />
      );

      await act(async () => {
        await user.tab();
        jest.runOnlyPendingTimers();
      });

      expect(getByTestId('tooltip')).toHaveTextContent('Title');
      expect(getByTestId('tooltip')).toHaveTextContent('Paragraph');
    });
  });
});
