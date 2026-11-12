/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { act, screen, waitFor, within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { FC, ReactElement, ReactNode } from 'react';
import { styled } from 'styled-components';
import { vi } from 'vitest';

import { RTL_THEME, render } from '../../test/render';
import { Tabs } from './Tabs';

const ITEMS = ['one', 'two', 'three', 'four', 'five'];
const LABELS = ['One', 'Two', 'Three', 'Four', 'Five'];

interface IExampleProps {
  disabled?: string[];
  defaultSelectedItem?: string;
  isVertical?: boolean;
  icon?: ReactElement;
  label?: string;
  onChange?: (item: any) => void;
  renderOverflowLabel?: (hiddenCount: number, selectedLabel?: string) => string;
}

const Example = ({
  disabled = [],
  defaultSelectedItem = 'one',
  isVertical,
  icon,
  label,
  onChange,
  renderOverflowLabel
}: IExampleProps) => (
  <Tabs isVertical={isVertical} defaultSelectedItem={defaultSelectedItem} onChange={onChange}>
    <Tabs.TabList aria-label="Sections" renderOverflowLabel={renderOverflowLabel}>
      {ITEMS.map((item, index) => (
        <Tabs.Tab
          key={item}
          item={item}
          disabled={disabled.includes(item)}
          icon={icon}
          label={label}
        >
          {LABELS[index]}
        </Tabs.Tab>
      ))}
    </Tabs.TabList>
    {ITEMS.map((item, index) => (
      <Tabs.TabPanel key={item} item={item}>
        {`${LABELS[index]} panel`}
      </Tabs.TabPanel>
    ))}
  </Tabs>
);

const rect = (left: number, top: number, width: number, height: number) =>
  ({
    x: left,
    y: top,
    left,
    top,
    width,
    height,
    right: left + width,
    bottom: top + height,
    toJSON: () => ({})
  }) as DOMRect;

const tabIndex = (element: Element) =>
  Array.from(element.parentElement!.querySelectorAll('[role="tab"]')).indexOf(element);

/* jsdom has no layout. Lays out 60px tabs with 20px gaps in a container whose
 * width the test controls. */
const mockLayout = (width: { current: number }) =>
  vi.spyOn(Element.prototype, 'getBoundingClientRect').mockImplementation(function getRect(
    this: Element
  ) {
    const id = this.getAttribute('data-garden-id');

    if (id === 'tabs.tablist_container') {
      return rect(0, 0, width.current, 40);
    }

    if (id === 'tabs.tab') {
      return rect(tabIndex(this) * 80, 0, 60, 40);
    }

    if (id === 'tabs.overflow_button') {
      return rect(width.current - 40, 0, 40, 40);
    }

    return rect(0, 0, 0, 0);
  });

/* Lays out 32px vertical tabs with 8px gaps in a container whose height the
 * test controls. */
const mockVerticalLayout = (height: { current: number }) =>
  vi.spyOn(Element.prototype, 'getBoundingClientRect').mockImplementation(function getRect(
    this: Element
  ) {
    const id = this.getAttribute('data-garden-id');

    if (id === 'tabs.tablist_container') {
      return rect(0, 0, 200, height.current);
    }

    if (id === 'tabs.tab') {
      return rect(0, tabIndex(this) * 40, 200, 32);
    }

    if (id === 'tabs.overflow_button') {
      return rect(0, height.current - 32, 200, 32);
    }

    return rect(0, 0, 0, 0);
  });

const resizeTo = (size: { current: number }, next: number) =>
  act(() => {
    size.current = next;
    window.dispatchEvent(new Event('resize'));
  });

const mockMotionPreference = (reduce: boolean) =>
  vi.spyOn(window, 'matchMedia').mockReturnValue({
    matches: reduce,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn()
  } as unknown as MediaQueryList);

const getIndicator = () =>
  document.querySelector<HTMLElement>('[data-garden-id="tabs.indicator"]')!;

describe('Tabs overflow', () => {
  afterEach(() => {
    vi.restoreAllMocks();
    Reflect.deleteProperty(document, 'fonts');
    Reflect.deleteProperty(globalThis, 'ResizeObserver');
  });

  it('moves tabs that do not fit into a menu that can select them', async () => {
    const width = { current: 250 };
    mockLayout(width);
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(<Example onChange={onChange} />);

    expect(screen.getAllByRole('tab').map(tab => tab.textContent)).toEqual(['One', 'Two']);

    const hidden = screen.getAllByRole('tab', { hidden: true }).slice(2);

    hidden.forEach(tab => {
      expect(tab).toHaveStyle({ visibility: 'hidden' });
      expect(tab).toHaveAttribute('tabindex', '-1');
    });

    const trigger = screen.getByRole('button', { name: '+3 tabs' });

    expect(trigger).toHaveAttribute('aria-haspopup', 'true');

    await user.click(trigger);

    const items = screen.getAllByRole('menuitemradio');

    expect(items.map(item => item.textContent)).toEqual(['Three', 'Four', 'Five']);

    await user.click(items[1]!);

    expect(onChange).toHaveBeenCalledWith('four');

    const four = screen.getAllByRole('tab', { hidden: true })[3]!;

    expect(four).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Four panel');

    await waitFor(() => expect(trigger).toHaveFocus());
    expect(trigger).toHaveAttribute('data-selected', 'true');

    await user.click(trigger);
    expect(screen.getByRole('menuitemradio', { name: 'Four' })).toHaveAttribute(
      'aria-checked',
      'true'
    );
  });

  it('keeps every tab visible when the container is wide enough', () => {
    mockLayout({ current: 400 });
    render(<Example />);

    expect(screen.getAllByRole('tab')).toHaveLength(5);
    expect(screen.queryByRole('button', { name: /tabs/u })).not.toBeInTheDocument();
    expect(document.querySelector('[data-garden-id="tabs.overflow_spacer"]')).toBeNull();
  });

  it('uses the singular label when one tab overflows', () => {
    mockLayout({ current: 370 });
    render(<Example />);

    expect(screen.getAllByRole('tab')).toHaveLength(4);
    expect(screen.getByRole('button', { name: '+1 tab' })).toBeInTheDocument();
  });

  it('names the selected tab in the trigger when the selection is in overflow', async () => {
    mockLayout({ current: 250 });
    const user = userEvent.setup();

    render(<Example />);

    await user.click(screen.getByRole('button', { name: '+3 tabs' }));
    await user.click(screen.getByRole('menuitemradio', { name: 'Four' }));

    expect(screen.getByRole('button', { name: '+3 tabs, Four selected' })).toHaveFocus();
  });

  it('places the indicator under the trigger when the selected tab is hidden', async () => {
    const width = { current: 250 };
    mockLayout(width);
    mockMotionPreference(true);
    const user = userEvent.setup();

    render(<Example />);

    expect(getIndicator()).toHaveStyle({ transform: 'translateX(0px)', width: '60px' });

    await user.click(screen.getByRole('button', { name: '+3 tabs' }));
    await user.click(screen.getByRole('menuitemradio', { name: 'Four' }));

    expect(getIndicator()).toHaveStyle({ transform: 'translateX(210px)', width: '40px' });
  });

  it('resets the UA button styles of the trigger', () => {
    mockLayout({ current: 250 });
    render(<Example />);

    const trigger = screen.getByRole('button', { name: '+3 tabs' });

    expect(trigger).toHaveStyleRule('margin', '0');
    expect(trigger).toHaveStyleRule('border', '0');
    expect(trigger).toHaveStyleRule('border-radius', '0');
    expect(trigger).toHaveStyleRule('background', 'transparent');
    expect(trigger).toHaveStyleRule('font-family', 'inherit');
    expect(trigger).toHaveStyleRule('font-size', '14px');
    expect(trigger).toHaveStyleRule('line-height', '1.4285714285714286');
  });

  it('shows the count in the tooltip of the horizontal trigger', async () => {
    mockLayout({ current: 250 });
    const user = userEvent.setup();

    render(<Example />);

    await user.hover(screen.getByRole('button', { name: '+3 tabs' }));

    expect(await screen.findByRole('tooltip')).toHaveTextContent('+3 tabs');
  });

  it('keeps the trigger enabled when every hidden tab is disabled', async () => {
    mockLayout({ current: 250 });
    const user = userEvent.setup();

    render(<Example disabled={['three', 'four', 'five']} />);

    const trigger = screen.getByRole('button', { name: '+3 tabs' });

    expect(trigger).not.toBeDisabled();

    await user.click(trigger);

    screen.getAllByRole('menuitemradio').forEach(item => {
      expect(item).toHaveAttribute('aria-disabled', 'true');
    });
  });

  it('renders the tab icon in the menu item', async () => {
    mockLayout({ current: 250 });
    const user = userEvent.setup();

    render(<Example icon={<svg data-test-id="icon" />} />);

    await user.click(screen.getByRole('button', { name: '+3 tabs' }));

    const item = screen.getByRole('menuitemradio', { name: 'Three' });

    expect(within(item).getByTestId('icon')).toBeInTheDocument();
  });

  it('passes the count and the selected label to renderOverflowLabel', () => {
    mockVerticalLayout({ current: 120 });
    const renderOverflowLabel = vi.fn((count: number, selectedLabel?: string) =>
      selectedLabel ? `${count} more, current: ${selectedLabel}` : `${count} more`
    );

    render(
      <Example isVertical defaultSelectedItem="five" renderOverflowLabel={renderOverflowLabel} />
    );

    expect(renderOverflowLabel).toHaveBeenCalledWith(3, undefined);
    expect(renderOverflowLabel).toHaveBeenCalledWith(3, 'Five');

    const trigger = screen.getByRole('button', { name: '3 more, current: Five' });

    expect(trigger).toHaveTextContent(/^3 more$/u);
  });

  it('uses the default label and visible text for vertical overflow', () => {
    mockVerticalLayout({ current: 120 });
    render(<Example isVertical />);

    expect(screen.getAllByRole('tab').map(tab => tab.textContent)).toEqual(['One', 'Two']);

    const trigger = screen.getByRole('button', { name: '+3 tabs' });

    expect(trigger).toHaveTextContent('+3 tabs');
  });

  it('keeps arrow keys and End away from overflowed tabs', async () => {
    mockLayout({ current: 250 });
    const user = userEvent.setup();

    render(<Example />);

    const tabs = screen.getAllByRole('tab');

    await user.click(tabs[0]!);
    await user.keyboard('{ArrowRight}');
    expect(tabs[1]).toHaveFocus();

    await user.keyboard('{ArrowRight}');
    expect(tabs[0]).toHaveFocus();

    await user.keyboard('{End}');
    expect(tabs[1]).toHaveFocus();

    await user.keyboard('{Home}');
    expect(tabs[0]).toHaveFocus();
  });

  it('enters the tab list on the first visible tab when the selection is in overflow', async () => {
    mockLayout({ current: 250 });
    const user = userEvent.setup();

    render(<Example defaultSelectedItem="four" />);

    const tabs = screen.getAllByRole('tab');

    expect(tabs[0]).toHaveAttribute('tabindex', '0');
    expect(tabs[1]).toHaveAttribute('tabindex', '-1');

    await user.tab();
    expect(tabs[0]).toHaveFocus();
  });

  it('moves focus to the trigger when the focused tab overflows, and back when tabs return', async () => {
    const width = { current: 400 };
    mockLayout(width);
    const user = userEvent.setup();

    render(<Example defaultSelectedItem="four" />);

    await user.tab();
    expect(screen.getByRole('tab', { name: 'Four' })).toHaveFocus();

    resizeTo(width, 250);

    const trigger = screen.getByRole('button', { name: '+3 tabs, Four selected' });

    expect(trigger).toHaveFocus();
    expect(screen.getAllByRole('tab').map(tab => tab.tabIndex)).toEqual([0, -1]);

    resizeTo(width, 400);

    expect(screen.queryByRole('button', { name: /^\+3 tabs/u })).not.toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Four' })).toHaveFocus();
  });

  it('keeps a Tab stop when the focused tab overflows while the selection stays visible', async () => {
    const width = { current: 400 };
    mockLayout(width);
    const user = userEvent.setup();

    render(<Example defaultSelectedItem="one" />);

    /* Focus Two without selecting it: One stays selected. */
    await user.tab();
    await user.keyboard('{ArrowRight}');

    const two = screen.getByRole('tab', { name: 'Two' });

    expect(two).toHaveFocus();
    expect(screen.getByRole('tab', { name: 'One' })).toHaveAttribute('aria-selected', 'true');

    /* Only One still fits, so the focused tab moves into the menu. */
    resizeTo(width, 130);

    const trigger = screen.getByRole('button', { name: '+4 tabs' });

    expect(trigger).toHaveFocus();

    const visibleTabs = screen.getAllByRole('tab');

    expect(visibleTabs).toHaveLength(1);
    expect(visibleTabs[0]).toHaveAttribute('tabindex', '0');

    /* Exactly one tab, the visible one, is a Tab stop. */
    const stops = screen
      .getAllByRole('tab', { hidden: true })
      .filter(tab => tab.getAttribute('tabindex') === '0');

    expect(stops).toHaveLength(1);

    await user.tab({ shift: true });
    expect(visibleTabs[0]).toHaveFocus();
  });

  it('closes the menu and focuses the trigger when the focused menu item becomes a visible tab', async () => {
    const width = { current: 250 };
    mockLayout(width);
    const user = userEvent.setup();

    render(<Example />);

    const trigger = screen.getByRole('button', { name: '+3 tabs' });

    trigger.focus();
    await user.keyboard('{ArrowDown}');
    await waitFor(() => expect(screen.getByRole('menuitemradio', { name: 'Three' })).toHaveFocus());

    resizeTo(width, 330);

    expect(screen.getAllByRole('tab').map(tab => tab.textContent)).toEqual(['One', 'Two', 'Three']);

    const nextTrigger = screen.getByRole('button', { name: '+2 tabs' });

    expect(nextTrigger).toHaveFocus();
    expect(nextTrigger).toHaveAttribute('aria-expanded', 'false');
  });

  it('closes the menu when every tab fits again, and does not reopen it', async () => {
    const width = { current: 250 };
    mockLayout(width);
    const user = userEvent.setup();

    render(<Example />);

    const trigger = screen.getByRole('button', { name: '+3 tabs' });

    await user.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'true');

    resizeTo(width, 400);

    expect(screen.queryByRole('button', { name: /tabs/u })).not.toBeInTheDocument();

    resizeTo(width, 250);

    expect(screen.getByRole('button', { name: '+3 tabs' })).toHaveAttribute(
      'aria-expanded',
      'false'
    );
  });

  it('ignores collected children that render no tab element', async () => {
    const Ghost: FC<{ item?: any }> = () => null;

    mockLayout({ current: 250 });
    const user = userEvent.setup();

    render(
      <Tabs defaultSelectedItem="one">
        <Tabs.TabList aria-label="Sections">
          {ITEMS.map((item, index) => (
            <Tabs.Tab key={item} item={item}>
              {LABELS[index]}
            </Tabs.Tab>
          ))}
          <Ghost item="ghost" />
        </Tabs.TabList>
      </Tabs>
    );

    expect(screen.getAllByRole('tab').map(tab => tab.textContent)).toEqual(['One', 'Two']);

    await user.click(screen.getByRole('button', { name: '+3 tabs' }));

    expect(screen.getAllByRole('menuitemradio').map(item => item.textContent)).toEqual([
      'Three',
      'Four',
      'Five'
    ]);
  });

  it('measures past panels wrapped with styled()', async () => {
    const StyledPanel = styled(Tabs.TabPanel)`
      padding-top: 8px;
    `;

    mockLayout({ current: 250 });
    const user = userEvent.setup();

    render(
      <Tabs defaultSelectedItem="one">
        <Tabs.TabList aria-label="Sections">
          {ITEMS.map((item, index) => (
            <Tabs.Tab key={item} item={item}>
              {LABELS[index]}
            </Tabs.Tab>
          ))}
        </Tabs.TabList>
        {ITEMS.map((item, index) => (
          <StyledPanel key={item} item={item}>
            {`${LABELS[index]} panel`}
          </StyledPanel>
        ))}
      </Tabs>
    );

    expect(screen.getAllByRole('tab').map(tab => tab.textContent)).toEqual(['One', 'Two']);

    await user.click(screen.getByRole('button', { name: '+3 tabs' }));

    expect(screen.getAllByRole('menuitemradio').map(item => item.textContent)).toEqual([
      'Three',
      'Four',
      'Five'
    ]);
  });

  it('measures past panel wrapper components with an item prop', async () => {
    const PanelWrapper: FC<{ item: string; children: ReactNode }> = ({ item, children }) => (
      <Tabs.TabPanel item={item}>{children}</Tabs.TabPanel>
    );

    mockLayout({ current: 250 });
    const user = userEvent.setup();

    render(
      <Tabs defaultSelectedItem="one">
        <Tabs.TabList aria-label="Sections">
          {ITEMS.map((item, index) => (
            <Tabs.Tab key={item} item={item}>
              {LABELS[index]}
            </Tabs.Tab>
          ))}
        </Tabs.TabList>
        {ITEMS.map((item, index) => (
          <PanelWrapper key={item} item={item}>
            {`${LABELS[index]} panel`}
          </PanelWrapper>
        ))}
      </Tabs>
    );

    expect(screen.getAllByRole('tab').map(tab => tab.textContent)).toEqual(['One', 'Two']);

    await user.click(screen.getByRole('button', { name: '+3 tabs' }));

    expect(screen.getAllByRole('menuitemradio').map(item => item.textContent)).toEqual([
      'Three',
      'Four',
      'Five'
    ]);
  });

  it('ignores a display: none tab when measuring and building the menu', async () => {
    /* display: none elements have no box. */
    vi.spyOn(Element.prototype, 'getBoundingClientRect').mockImplementation(function getRect(
      this: Element
    ) {
      const id = this.getAttribute('data-garden-id');

      if ((this as HTMLElement).style?.display === 'none') {
        return rect(0, 0, 0, 0);
      }

      if (id === 'tabs.tablist_container') {
        return rect(0, 0, 250, 40);
      }

      if (id === 'tabs.tab') {
        return rect(tabIndex(this) * 80, 0, 60, 40);
      }

      return rect(0, 0, 0, 0);
    });
    const user = userEvent.setup();

    render(
      <Tabs defaultSelectedItem="one">
        <Tabs.TabList aria-label="Sections">
          {ITEMS.map((item, index) => (
            <Tabs.Tab
              key={item}
              item={item}
              style={index === ITEMS.length - 1 ? { display: 'none' } : undefined}
            >
              {LABELS[index]}
            </Tabs.Tab>
          ))}
        </Tabs.TabList>
      </Tabs>
    );

    expect(screen.getAllByRole('tab').map(tab => tab.textContent)).toEqual(['One', 'Two']);

    await user.click(screen.getByRole('button', { name: '+2 tabs' }));

    expect(screen.getAllByRole('menuitemradio').map(item => item.textContent)).toEqual([
      'Three',
      'Four'
    ]);
  });

  it('measures only the visible list when two tab lists share the tabs', async () => {
    /* A list inside a display: none wrapper has no box. */
    vi.spyOn(Element.prototype, 'getBoundingClientRect').mockImplementation(function getRect(
      this: Element
    ) {
      const id = this.getAttribute('data-garden-id');

      if (this.closest('[data-test="hidden-list"]')) {
        return rect(0, 0, 0, 0);
      }

      if (id === 'tabs.tablist_container') {
        return rect(0, 0, 250, 40);
      }

      if (id === 'tabs.tab') {
        return rect(tabIndex(this) * 80, 0, 60, 40);
      }

      return rect(0, 0, 0, 0);
    });
    const user = userEvent.setup();

    const tabs = (label: string) => (
      <Tabs.TabList aria-label={label}>
        {ITEMS.map((item, index) => (
          <Tabs.Tab key={item} item={item}>
            {LABELS[index]}
          </Tabs.Tab>
        ))}
      </Tabs.TabList>
    );

    render(
      <Tabs defaultSelectedItem="one">
        <div data-test="hidden-list" style={{ display: 'none' }}>
          {tabs('Mobile')}
        </div>
        {tabs('Desktop')}
      </Tabs>
    );

    /* The hidden list must not freeze the page or overwrite the count. */
    const desktop = document.querySelectorAll('[data-garden-id="tabs.tablist_container"]')[1]!;

    expect(
      within(desktop as HTMLElement)
        .getAllByRole('tab')
        .map(tab => tab.textContent)
    ).toEqual(['One', 'Two']);

    await user.click(within(desktop as HTMLElement).getByRole('button', { name: '+3 tabs' }));

    expect(screen.getAllByRole('menuitemradio').map(item => item.textContent)).toEqual([
      'Three',
      'Four',
      'Five'
    ]);
  });

  it('keeps every tab visible when the layout cannot be measured', () => {
    const nanRect = {
      left: NaN,
      top: NaN,
      width: NaN,
      height: NaN,
      right: NaN,
      bottom: NaN,
      x: NaN,
      y: NaN,
      toJSON: () => ({})
    } as DOMRect;

    vi.spyOn(Element.prototype, 'getBoundingClientRect').mockReturnValue(nanRect);
    render(<Example />);

    expect(screen.getAllByRole('tab')).toHaveLength(5);
    expect(screen.queryByRole('button', { name: /tabs/u })).not.toBeInTheDocument();
  });

  it('names a hidden tab with no text by its item in the trigger', async () => {
    mockLayout({ current: 250 });
    const user = userEvent.setup();

    render(
      <Tabs defaultSelectedItem="one">
        <Tabs.TabList aria-label="Sections">
          {ITEMS.map((item, index) => (
            <Tabs.Tab key={item} item={item} icon={<svg data-test-id="icon" />}>
              {index < 2 ? LABELS[index] : undefined}
            </Tabs.Tab>
          ))}
        </Tabs.TabList>
      </Tabs>
    );

    await user.click(screen.getByRole('button', { name: '+3 tabs' }));
    await user.click(screen.getAllByRole('menuitemradio')[0]!);

    expect(screen.getByRole('button', { name: '+3 tabs, three selected' })).toBeInTheDocument();
  });

  it('renders an empty tab list', () => {
    mockLayout({ current: 400 });

    render(
      <Tabs>
        <Tabs.TabList aria-label="Sections" />
      </Tabs>
    );

    expect(screen.queryByRole('tab')).not.toBeInTheDocument();
    expect(screen.getByRole('tablist', { name: 'Sections' })).toBeInTheDocument();
  });

  it('keeps focus on the trigger when tabs partially return', async () => {
    const width = { current: 250 };
    mockLayout(width);
    const user = userEvent.setup();

    render(<Example />);

    const trigger = screen.getByRole('button', { name: '+3 tabs' });

    await user.click(trigger);
    expect(trigger).toHaveFocus();

    resizeTo(width, 330);

    expect(screen.getAllByRole('tab')).toHaveLength(3);
    expect(screen.getByRole('button', { name: '+2 tabs' })).toHaveFocus();
  });

  it('overflows every tab when no tab fits', () => {
    mockLayout({ current: 50 });
    render(<Example />);

    expect(screen.queryByRole('tab')).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: '+5 tabs, One selected' })).toBeInTheDocument();
  });

  it('measures from the right edge in RTL', () => {
    vi.spyOn(Element.prototype, 'getBoundingClientRect').mockImplementation(function getRect(
      this: Element
    ) {
      const id = this.getAttribute('data-garden-id');

      if (id === 'tabs.tablist_container') {
        return rect(0, 0, 250, 40);
      }

      if (id === 'tabs.tab') {
        const start = tabIndex(this) * 80;

        return rect(250 - start - 60, 0, 60, 40);
      }

      return rect(0, 0, 0, 0);
    });
    render(<Example />, { theme: RTL_THEME });

    expect(screen.getAllByRole('tab').map(tab => tab.textContent)).toEqual(['One', 'Two']);
  });

  it('measures again on ResizeObserver and font loading', () => {
    const callbacks: (() => void)[] = [];

    class MockResizeObserver {
      constructor(callback: () => void) {
        callbacks.push(callback);
      }

      observe = vi.fn();
      unobserve = vi.fn();
      disconnect = vi.fn();
    }

    Object.defineProperty(globalThis, 'ResizeObserver', {
      value: MockResizeObserver,
      configurable: true
    });
    Object.defineProperty(document, 'fonts', { value: new EventTarget(), configurable: true });

    const width = { current: 400 };
    mockLayout(width);

    render(<Example />);
    expect(screen.getAllByRole('tab')).toHaveLength(5);

    act(() => {
      width.current = 250;
      callbacks.forEach(callback => callback());
    });
    expect(screen.getAllByRole('tab')).toHaveLength(2);

    act(() => {
      width.current = 400;
      document.fonts.dispatchEvent(new Event('loadingdone'));
    });
    expect(screen.getAllByRole('tab')).toHaveLength(5);
  });

  /* mirrors the useText warning specs in react-theming: save/restore NODE_ENV + console.warn */
  describe('label warning', () => {
    const environment = process.env.NODE_ENV;
    const consoleWarning = console.warn;

    beforeEach(() => {
      process.env.NODE_ENV = 'development';
      console.warn = vi.fn();
    });

    afterEach(() => {
      process.env.NODE_ENV = environment;
      console.warn = consoleWarning;
    });

    const NonStringExample = ({ label }: { label?: string }) => (
      <Tabs defaultSelectedItem="one">
        <Tabs.TabList aria-label="Sections">
          <Tabs.Tab item="one">One</Tabs.Tab>
          <Tabs.Tab item="two">Two</Tabs.Tab>
          <Tabs.Tab item="three" label={label}>
            <span>Three</span>
          </Tabs.Tab>
          <Tabs.Tab item="four">Four</Tabs.Tab>
          <Tabs.Tab item="five">Five</Tabs.Tab>
        </Tabs.TabList>
      </Tabs>
    );

    it('warns once when a non-string tab without label moves into the menu', () => {
      const spy = vi.spyOn(console, 'warn');
      mockLayout({ current: 250 });

      render(<NonStringExample />);

      const labelWarnings = spy.mock.calls.filter(call =>
        String(call[0]).includes('without a plain-text label')
      );

      expect(labelWarnings).toHaveLength(1);
      /* While tabs overflow, the default trigger label warns too. */
      expect(
        spy.mock.calls.filter(call => String(call[0]).includes('`renderOverflowLabel`'))
      ).toHaveLength(1);
    });

    it('does not warn when the tab sets label, and the trigger uses it', async () => {
      const spy = vi.spyOn(console, 'warn');
      mockLayout({ current: 250 });
      const user = userEvent.setup();

      render(<NonStringExample label="Third" />);

      expect(
        spy.mock.calls.filter(call => String(call[0]).includes('without a plain-text label'))
      ).toHaveLength(0);

      await user.click(screen.getByRole('button', { name: '+3 tabs' }));
      await user.click(screen.getByRole('menuitemradio', { name: 'Three' }));

      expect(screen.getByRole('button', { name: '+3 tabs, Third selected' })).toBeInTheDocument();
    });
  });
});
