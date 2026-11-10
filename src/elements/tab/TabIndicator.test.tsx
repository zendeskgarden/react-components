/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { act, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { renderToString } from 'react-dom/server';
import { vi } from 'vitest';

import { RTL_THEME, render } from '../../test/render';
import { ThemeProvider } from '../../theming/elements/ThemeProvider';
import { Tabs } from './Tabs';

const LIST_SIZE = 400;
const TAB_SIZE = 60;
const TAB_STEP = 80;

interface IExampleProps {
  isVertical?: boolean;
  selectedItem?: string;
}

const Example = ({ isVertical, selectedItem }: IExampleProps) => (
  <Tabs isVertical={isVertical} selectedItem={selectedItem}>
    <Tabs.TabList>
      <Tabs.Tab item="one">One</Tabs.Tab>
      <Tabs.Tab item="two">Two</Tabs.Tab>
      <Tabs.Tab item="three">Three</Tabs.Tab>
    </Tabs.TabList>
    <Tabs.TabPanel item="one">Panel one</Tabs.TabPanel>
    <Tabs.TabPanel item="two">Panel two</Tabs.TabPanel>
    <Tabs.TabPanel item="three">Panel three</Tabs.TabPanel>
  </Tabs>
);

/* jsdom has no layout. Tabs sit at a fixed step, from the start edge of the list. */
const mockLayout = ({ isVertical = false, isRtl = false } = {}) =>
  vi
    .spyOn(Element.prototype, 'getBoundingClientRect')
    .mockImplementation(function getRect(this: Element) {
      const rect = { left: 0, top: 0, width: 0, height: 0, right: 0, bottom: 0, x: 0, y: 0 };
      let layout = rect;

      if (this.getAttribute('role') === 'tablist') {
        layout = {
          ...rect,
          width: LIST_SIZE,
          height: LIST_SIZE,
          right: LIST_SIZE,
          bottom: LIST_SIZE
        };
      } else if (this.getAttribute('role') === 'tab') {
        const index = Array.from(this.parentElement!.querySelectorAll('[role="tab"]')).indexOf(
          this
        );
        const start = index * TAB_STEP;

        if (isVertical) {
          layout = {
            ...rect,
            top: start,
            bottom: start + TAB_SIZE,
            height: TAB_SIZE,
            width: LIST_SIZE
          };
        } else {
          const left = isRtl ? LIST_SIZE - start - TAB_SIZE : start;

          layout = { ...rect, left, right: left + TAB_SIZE, width: TAB_SIZE, height: 40 };
        }
      }

      return layout as DOMRect;
    });

const mockMotionPreference = (reduce: boolean) =>
  vi.spyOn(window, 'matchMedia').mockReturnValue({
    matches: reduce,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn()
  } as unknown as MediaQueryList);

const getIndicator = () =>
  document.querySelector<HTMLElement>('[data-garden-id="tabs.indicator"]')!;

describe('Tabs indicator', () => {
  beforeEach(() => {
    mockMotionPreference(false);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders one hidden-from-assistive-tech indicator inside the tab list', () => {
    mockLayout();
    render(<Example />);

    const indicators = document.querySelectorAll('[data-garden-id="tabs.indicator"]');

    expect(indicators).toHaveLength(1);
    expect(indicators[0]).toHaveAttribute('aria-hidden', 'true');
    expect(screen.getByRole('tablist')).toContainElement(indicators[0] as HTMLElement);
  });

  it('snaps under the selected tab on first paint when horizontal', () => {
    mockLayout();
    render(<Example selectedItem="two" />);

    expect(getIndicator()).toHaveStyle({
      transform: `translateX(${TAB_STEP}px)`,
      width: `${TAB_SIZE}px`
    });
    expect(getIndicator()).not.toHaveAttribute('hidden');
  });

  it('snaps next to the selected tab on first paint when vertical', () => {
    mockLayout({ isVertical: true });
    render(<Example isVertical selectedItem="three" />);

    expect(getIndicator()).toHaveStyle({
      transform: `translateY(${TAB_STEP * 2}px)`,
      height: `${TAB_SIZE}px`
    });
    expect(getIndicator().style.width).toBe('');
  });

  it('follows the physical position of the tab in RTL', () => {
    mockLayout({ isRtl: true });
    render(<Example selectedItem="two" />, { theme: RTL_THEME });

    expect(getIndicator()).toHaveStyle({
      transform: `translateX(${LIST_SIZE - TAB_STEP - TAB_SIZE}px)`,
      width: `${TAB_SIZE}px`
    });
  });

  it('springs to a newly selected tab, then settles on it', async () => {
    mockLayout();
    vi.spyOn(performance, 'now').mockReturnValue(0);

    let frame: FrameRequestCallback | undefined;

    vi.spyOn(window, 'requestAnimationFrame').mockImplementation(callback => {
      frame = callback;

      return 1;
    });
    render(<Example />);
    expect(getIndicator()).toHaveStyle({ transform: 'translateX(0px)', width: `${TAB_SIZE}px` });

    await userEvent.setup().click(screen.getByRole('tab', { name: 'Two' }));
    expect(screen.getByRole('tab', { name: 'Two' })).toHaveAttribute('aria-selected', 'true');

    act(() => frame!(16));
    expect(getIndicator()).not.toHaveStyle({ transform: 'translateX(0px)' });
    expect(getIndicator()).not.toHaveStyle({ transform: `translateX(${TAB_STEP}px)` });

    act(() => frame!(2000));
    expect(getIndicator()).toHaveStyle({
      transform: `translateX(${TAB_STEP}px)`,
      width: `${TAB_SIZE}px`
    });
  });

  it('moves without animation when reduced motion is preferred', async () => {
    mockLayout();
    mockMotionPreference(true);

    const request = vi.spyOn(window, 'requestAnimationFrame');

    render(<Example />);
    await userEvent.setup().click(screen.getByRole('tab', { name: 'Three' }));

    expect(getIndicator()).toHaveStyle({
      transform: `translateX(${TAB_STEP * 2}px)`,
      width: `${TAB_SIZE}px`
    });
    expect(request).not.toHaveBeenCalled();
  });

  it('is hidden when a tab has no size to measure', () => {
    vi.spyOn(Element.prototype, 'getBoundingClientRect').mockReturnValue({
      left: 0,
      top: 0,
      width: 0,
      height: 0,
      right: 0,
      bottom: 0,
      x: 0,
      y: 0
    } as DOMRect);
    render(<Example />);

    expect(getIndicator()).toHaveAttribute('hidden');
  });

  it('is hidden when no tab is selected', () => {
    mockLayout();
    render(<Example selectedItem="unknown" />);

    expect(getIndicator()).toHaveAttribute('hidden');
  });

  it('is not rendered by a tab list without parent Tabs', () => {
    render(<Tabs.TabList>Content</Tabs.TabList>);

    expect(getIndicator()).toBeNull();
  });

  it('renders on the server without throwing', () => {
    expect(() =>
      renderToString(
        <ThemeProvider>
          <Example />
        </ThemeProvider>
      )
    ).not.toThrow();
  });
});
