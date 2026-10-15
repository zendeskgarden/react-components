/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createRef } from 'react';

import { DARK_THEME, RTL_THEME, render } from '../../test/render';
import DEFAULT_THEME from '../../theming/elements/theme';
import { getColor } from '../../theming/utils/getColor';
import { getHueColor } from '../../theming/utils/getHueColor';
import { StyledOppositeContent } from '../../views/accordion/StyledOppositeContent';
import { StyledSeparator } from '../../views/accordion/StyledSeparator';
import { StyledTimelineContent } from '../../views/accordion/StyledTimelineContent';
import { Timeline } from './Timeline';

const ICON = '[data-garden-id="timeline.icon"]';
const SEPARATOR = '[data-garden-id="timeline.content.separator"]';

describe('Timeline', () => {
  const { base } = DEFAULT_THEME.space;

  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLOListElement>();
    const { getByTestId } = render(<Timeline data-test-id="timeline" ref={ref} />);

    expect(getByTestId('timeline')).toBe(ref.current);
  });

  it('does not let props override the garden attributes', () => {
    const { getByTestId } = render(
      <Timeline data-test-id="timeline" data-garden-id="custom" data-garden-version="0.0.0" />
    );

    expect(getByTestId('timeline')).toHaveAttribute('data-garden-id', 'timeline');
    expect(getByTestId('timeline')).toHaveAttribute('data-garden-version', PACKAGE_VERSION);
  });

  it('renders an ordered list without list styling', () => {
    const { getByTestId } = render(<Timeline data-test-id="timeline" />);

    expect(getByTestId('timeline').nodeName).toBe('OL');
    expect(getByTestId('timeline')).toHaveStyleRule('list-style', 'none');
  });

  describe('Item', () => {
    it('passes ref to underlying DOM element', () => {
      const ref = createRef<HTMLLIElement>();
      const { getByTestId } = render(
        <Timeline>
          <Timeline.Item data-test-id="item" ref={ref} />
        </Timeline>
      );

      expect(getByTestId('item')).toBe(ref.current);
    });

    it('does not let props override the garden attributes', () => {
      const { getByTestId } = render(
        <Timeline>
          <Timeline.Item data-test-id="item" data-garden-id="custom" data-garden-version="0.0.0" />
        </Timeline>
      );

      expect(getByTestId('item')).toHaveAttribute('data-garden-id', 'timeline.item');
      expect(getByTestId('item')).toHaveAttribute('data-garden-version', PACKAGE_VERSION);
    });

    it('hides the line after the last item', () => {
      const { getByTestId } = render(
        <Timeline>
          <Timeline.Item data-test-id="item" />
        </Timeline>
      );

      expect(getByTestId('item')).toHaveStyleRule('display', 'none', {
        modifier: `&:last-of-type ${StyledSeparator}::after`
      });
    });

    describe('Styling', () => {
      const alternate = `&:nth-child(even)`;

      it('renders default styling', () => {
        const { getByTestId } = render(
          <Timeline>
            <Timeline.Item data-test-id="item" />
          </Timeline>
        );

        expect(getByTestId('item')).not.toHaveStyleRule('flex-direction', 'row-reverse', {
          modifier: alternate
        });
        expect(getByTestId('item')).not.toHaveStyleRule('flex', '1', { modifier: '&::before' });
        expect(getByTestId('item')).not.toHaveStyleRule('content', "''", {
          modifier: '&::before'
        });
        expect(getByTestId('item')).not.toHaveStyleRule('padding', `${base * 4}px`, {
          modifier: '&::before'
        });
      });

      it('renders alternate styling', () => {
        const { getByTestId } = render(
          <Timeline isAlternate>
            <Timeline.Item data-test-id="item" />
          </Timeline>
        );

        expect(getByTestId('item')).toHaveStyleRule('flex-direction', 'row-reverse', {
          modifier: alternate
        });
        expect(getByTestId('item')).toHaveStyleRule('flex', '1', { modifier: '&::before' });
        expect(getByTestId('item')).toHaveStyleRule('content', "''", { modifier: '&::before' });
        expect(getByTestId('item')).toHaveStyleRule('padding', `${base * 4}px`, {
          modifier: '&::before'
        });
      });

      it('does not render a spacer if the item has opposite content', () => {
        const { getByTestId } = render(
          <Timeline isAlternate>
            <Timeline.Item data-test-id="item">
              <Timeline.OppositeContent>Opposite</Timeline.OppositeContent>
              <Timeline.Content>Content</Timeline.Content>
            </Timeline.Item>
          </Timeline>
        );

        expect(getByTestId('item')).toHaveStyleRule('flex-direction', 'row-reverse', {
          modifier: alternate
        });
        expect(getByTestId('item')).not.toHaveStyleRule('content', "''", {
          modifier: '&::before'
        });
      });

      it.each([
        ['LTR', DEFAULT_THEME, 'left', 'right'],
        ['RTL', RTL_THEME, 'right', 'left']
      ] as const)('aligns alternate content in %s', (_, theme, oppositeAlign, contentAlign) => {
        const { getByTestId } = render(
          <Timeline isAlternate>
            <Timeline.Item data-test-id="item" />
          </Timeline>,
          { theme }
        );

        expect(getByTestId('item')).toHaveStyleRule('text-align', oppositeAlign, {
          modifier: `${alternate} ${StyledOppositeContent}`
        });
        expect(getByTestId('item')).toHaveStyleRule('text-align', contentAlign, {
          modifier: `${alternate} ${StyledTimelineContent}`
        });
      });
    });
  });

  describe('Content', () => {
    it('passes ref to underlying DOM element', () => {
      const ref = createRef<HTMLDivElement>();
      const { getByTestId } = render(
        <Timeline>
          <Timeline.Item>
            <Timeline.Content data-test-id="content" ref={ref} />
          </Timeline.Item>
        </Timeline>
      );

      expect(getByTestId('content')).toBe(ref.current);
    });

    it('does not let props override the garden attributes', () => {
      const { getByTestId } = render(
        <Timeline>
          <Timeline.Item>
            <Timeline.Content
              data-test-id="content"
              data-garden-id="custom"
              data-garden-version="0.0.0"
            />
          </Timeline.Item>
        </Timeline>
      );

      expect(getByTestId('content')).toHaveAttribute('data-garden-id', 'timeline.content');
      expect(getByTestId('content')).toHaveAttribute('data-garden-version', PACKAGE_VERSION);
    });

    it('renders its children', () => {
      const { getByText } = render(
        <Timeline>
          <Timeline.Item>
            <Timeline.Content>Plant seed</Timeline.Content>
          </Timeline.Item>
        </Timeline>
      );

      expect(getByText('Plant seed')).toBeInTheDocument();
    });

    it('renders a separator with the default icon', () => {
      const { container } = render(
        <Timeline>
          <Timeline.Item>
            <Timeline.Content />
          </Timeline.Item>
        </Timeline>
      );

      expect(container.querySelector(SEPARATOR)).toHaveStyleRule('display', 'flex');
      expect(container.querySelector(SEPARATOR)).toHaveStyleRule(
        'border-left',
        `${DEFAULT_THEME.borders.sm} ${getColor({ theme: DEFAULT_THEME, variable: 'border.emphasis' })}`,
        { modifier: '&::after' }
      );
      expect(container.querySelector(ICON)!.nodeName).toBe('svg');
    });

    it('renders a custom icon', () => {
      const { container } = render(
        <Timeline>
          <Timeline.Item icon={<span data-test-id="custom-icon" />}>
            <Timeline.Content />
          </Timeline.Item>
        </Timeline>
      );

      expect(container.querySelector(ICON)).toHaveAttribute('data-test-id', 'custom-icon');
    });

    it.each([
      ['light', DEFAULT_THEME],
      ['dark', DARK_THEME]
    ] as const)('renders icon colors in %s mode', (_, theme) => {
      const { container } = render(
        <Timeline>
          <Timeline.Item>
            <Timeline.Content />
          </Timeline.Item>
        </Timeline>,
        { theme }
      );

      expect(container.querySelector(ICON)).toHaveStyleRule(
        'color',
        getColor({ theme, variable: 'border.emphasis' })
      );
      expect(container.querySelector(ICON)).toHaveStyleRule(
        'background-color',
        getHueColor({ theme, value: 'background.default' })
      );
      expect(container.querySelector(ICON)).toHaveStyleRule('padding', `${base}px 0`);
    });

    it('renders the icon on a custom surface color', () => {
      const { container } = render(
        <Timeline>
          <Timeline.Item surfaceColor="background.subtle">
            <Timeline.Content />
          </Timeline.Item>
        </Timeline>
      );

      expect(container.querySelector(ICON)).toHaveStyleRule(
        'background-color',
        getHueColor({ theme: DEFAULT_THEME, value: 'background.subtle' })
      );
    });
  });

  describe('OppositeContent', () => {
    it('passes ref to underlying DOM element', () => {
      const ref = createRef<HTMLDivElement>();
      const { getByTestId } = render(
        <Timeline>
          <Timeline.Item>
            <Timeline.OppositeContent data-test-id="opposite" ref={ref} />
          </Timeline.Item>
        </Timeline>
      );

      expect(getByTestId('opposite')).toBe(ref.current);
    });

    it('does not let props override the garden attributes', () => {
      const { getByTestId } = render(
        <Timeline>
          <Timeline.Item>
            <Timeline.OppositeContent
              data-test-id="opposite"
              data-garden-id="custom"
              data-garden-version="0.0.0"
            />
          </Timeline.Item>
        </Timeline>
      );

      expect(getByTestId('opposite')).toHaveAttribute(
        'data-garden-id',
        'timeline.opposite.content'
      );
      expect(getByTestId('opposite')).toHaveAttribute('data-garden-version', PACKAGE_VERSION);
    });

    it.each([
      ['LTR', DEFAULT_THEME, 'right'],
      ['RTL', RTL_THEME, 'left']
    ] as const)('renders styling in %s', (_, theme, align) => {
      const { getByText } = render(
        <Timeline>
          <Timeline.Item>
            <Timeline.OppositeContent>Exercise</Timeline.OppositeContent>
          </Timeline.Item>
        </Timeline>,
        { theme }
      );

      expect(getByText('Exercise')).toHaveStyleRule('text-align', align);
    });
  });
});
