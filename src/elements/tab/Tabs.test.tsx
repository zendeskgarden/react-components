/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { userEvent } from '@testing-library/user-event';
import { createRef } from 'react';
import { renderToString } from 'react-dom/server';
import { styled } from 'styled-components';
import { vi } from 'vitest';

import { render } from '../../test/render';
import DEFAULT_THEME from '../../theming/elements/theme';
import { ThemeProvider } from '../../theming/elements/ThemeProvider';
import { ITabsProps, ITabProps } from '../../types/elements';
import { StyledTabListContainer } from '../../views/tab/StyledTabListContainer';
import { StyledTabPanel } from '../../views/tab/StyledTabPanel';
import { Tabs } from './Tabs';

describe('Tabs', () => {
  const user = userEvent.setup();

  /* Validates `Tab` component extension works as expected with `toTabs` */
  const TestTab = (props: ITabProps) => <Tabs.Tab {...props} />;

  const BasicExample = (props: ITabsProps) => (
    <Tabs data-test-id="container" {...props}>
      <Tabs.TabList>
        <Tabs.Tab item="tab-1" data-test-id="tab">
          Tab 1
        </Tabs.Tab>
        <TestTab item="tab-2" data-test-id="tab">
          Tab 2
        </TestTab>
      </Tabs.TabList>
      <Tabs.TabPanel item="tab-1" data-test-id="panel">
        Tab 1 content
      </Tabs.TabPanel>
      <Tabs.TabPanel item="tab-2" data-test-id="panel">
        Tab 2 content
      </Tabs.TabPanel>
    </Tabs>
  );

  it('renders horizontal mode by default', () => {
    const { getByTestId } = render(<BasicExample />);

    expect(getByTestId('container')).not.toHaveClass('c-tab--block');
  });

  it('renders vertical mode if provided', () => {
    const { getByTestId } = render(<BasicExample isVertical />);

    expect(getByTestId('container')).toHaveStyleRule('display', 'flex');
  });

  it('lets the tabs shrink in flex and grid layouts', () => {
    const { getByTestId } = render(<BasicExample />);

    expect(getByTestId('container')).toHaveStyleRule('min-width', '0');
  });

  it('stacks vertical tabs above their panels on small screens', () => {
    const { getByTestId } = render(<BasicExample isVertical />);
    const media = `(max-width: ${parseFloat(DEFAULT_THEME.breakpoints.sm) - 0.02}px)`;

    expect(getByTestId('container')).toHaveStyleRule('flex-direction', 'column', { media });
    expect(getByTestId('container')).toHaveStyleRule('align-items', 'stretch', { media });
  });

  it('keeps the vertical tab list from shrinking under its panels', () => {
    const { getByTestId } = render(<BasicExample isVertical />);

    expect(getByTestId('container')).toHaveStyleRule('flex-shrink', '0', {
      modifier: `> ${StyledTabListContainer}`
    });
    expect(getByTestId('container')).toHaveStyleRule('flex', '1 1 0', {
      modifier: `> ${StyledTabPanel}`
    });
    expect(getByTestId('container')).toHaveStyleRule('min-width', '0', {
      modifier: `> ${StyledTabPanel}`
    });
  });

  it('calls onChange with correct item on selection', async () => {
    const onChangeSpy = vi.fn();

    const { getAllByTestId } = render(<BasicExample onChange={onChangeSpy} />);

    await user.click(getAllByTestId('tab')[1]!);
    expect(onChangeSpy).toHaveBeenCalledWith('tab-2');
  });

  it('does not call onChange on mount', () => {
    const onChangeSpy = vi.fn();

    render(<BasicExample onChange={onChangeSpy} />);

    expect(onChangeSpy).not.toHaveBeenCalled();
  });

  it('selects the tab named by defaultSelectedItem on the first render', () => {
    const { getAllByTestId } = render(<BasicExample defaultSelectedItem="tab-2" />);

    expect(getAllByTestId('tab')[1]).toHaveAttribute('aria-selected', 'true');
  });

  it('prefers selectedItem over defaultSelectedItem', () => {
    const { getAllByTestId } = render(
      <BasicExample selectedItem="tab-1" defaultSelectedItem="tab-2" />
    );

    expect(getAllByTestId('tab')[0]).toHaveAttribute('aria-selected', 'true');
  });

  it('has a selected tab on the first server render', () => {
    const html = renderToString(
      <ThemeProvider>
        <BasicExample />
      </ThemeProvider>
    );

    expect(html).toContain('aria-selected="true"');
  });

  it('changes the selection of an uncontrolled Tabs that has onChange', async () => {
    const onChangeSpy = vi.fn();

    const { getAllByTestId } = render(<BasicExample onChange={onChangeSpy} />);
    const tab = getAllByTestId('tab')[1]!;

    await user.click(tab);

    expect(tab).toHaveAttribute('aria-selected', 'true');
    expect(onChangeSpy).toHaveBeenCalledWith('tab-2');
  });

  it('treats selectedItem={null} as a controlled value with no selection', async () => {
    const onChange = vi.fn();
    const { getAllByRole, rerender } = render(
      <BasicExample selectedItem={null} onChange={onChange} />
    );

    getAllByRole('tab').forEach(tab => {
      expect(tab).toHaveAttribute('aria-selected', 'false');
    });

    /* The first navigable tab keeps the Tab stop. */
    const tabs = getAllByRole('tab');

    expect(tabs[0]).toHaveAttribute('tabindex', '0');
    expect(tabs[1]).toHaveAttribute('tabindex', '-1');

    /* A selection does not change the displayed selection while controlled. */
    await user.click(tabs[1]!);
    expect(onChange).toHaveBeenCalledWith('tab-2');
    expect(tabs[1]).toHaveAttribute('aria-selected', 'false');

    rerender(<BasicExample selectedItem="tab-2" onChange={onChange} />);
    expect(tabs[1]).toHaveAttribute('aria-selected', 'true');
  });

  it('only changes a controlled selection when the consumer updates selectedItem', async () => {
    const onChangeSpy = vi.fn();

    const { getAllByTestId, rerender } = render(
      <BasicExample selectedItem="tab-1" onChange={onChangeSpy} />
    );
    const tabs = getAllByTestId('tab');

    await user.click(tabs[1]!);

    expect(onChangeSpy).toHaveBeenCalledWith('tab-2');
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true');

    rerender(<BasicExample selectedItem="tab-2" onChange={onChangeSpy} />);

    expect(tabs[1]).toHaveAttribute('aria-selected', 'true');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLDivElement>();
    const { container } = render(
      <Tabs ref={ref}>
        <Tabs.TabList>
          <Tabs.Tab item="tab-1">Tab 1</Tabs.Tab>
        </Tabs.TabList>
        <Tabs.TabPanel item="tab-1">Tab 1 content</Tabs.TabPanel>
      </Tabs>
    );

    expect(container.firstChild).toBe(ref.current);
  });

  describe('Tab', () => {
    it('applies selected styling to currently selected tab', async () => {
      const { getAllByTestId } = render(<BasicExample />);
      const tab = getAllByTestId('tab')[1]!;

      await user.click(tab);

      expect(tab).toHaveAttribute('aria-selected', 'true');
    });

    it('applies disabled styling if provided', () => {
      const { getAllByTestId } = render(
        <Tabs>
          <Tabs.TabList>
            <Tabs.Tab data-test-id="tab" item="tab-1">
              Tab 1
            </Tabs.Tab>
            <Tabs.Tab data-test-id="tab" disabled>
              Disabled Tab
            </Tabs.Tab>
          </Tabs.TabList>
          <Tabs.TabPanel item="tab-1">Tab 1 content</Tabs.TabPanel>
        </Tabs>
      );

      expect(getAllByTestId('tab')[1]).toHaveAttribute('aria-disabled', 'true');
    });

    it.each([
      ['wrapped with styled()', styled(Tabs.TabPanel)``],
      [
        'rendered by a component with an item prop',
        (props: ITabProps) => <Tabs.TabPanel {...props} />
      ]
    ])('keeps a disabled tab disabled when its panel is %s', async (_name, Panel) => {
      const onChange = vi.fn();
      const { getByRole } = render(
        <Tabs onChange={onChange}>
          <Tabs.TabList>
            <Tabs.Tab item="one">One</Tabs.Tab>
            <Tabs.Tab item="two" disabled>
              Two
            </Tabs.Tab>
          </Tabs.TabList>
          <Panel item="one">Panel one</Panel>
          <Panel item="two">Panel two</Panel>
        </Tabs>
      );
      const tab = getByRole('tab', { name: 'Two' });

      expect(tab).toHaveAttribute('aria-disabled', 'true');

      await user.click(tab);

      expect(onChange).not.toHaveBeenCalled();
      expect(tab).toHaveAttribute('aria-selected', 'false');
    });

    it('keeps a disabled tab disabled when its wrapped panel comes before the tab list', () => {
      const Panel = styled(Tabs.TabPanel)``;
      const { getByRole } = render(
        <Tabs>
          <Panel item="one">Panel one</Panel>
          <Panel item="two">Panel two</Panel>
          <Tabs.TabList>
            <Tabs.Tab item="one">One</Tabs.Tab>
            <Tabs.Tab item="two" disabled>
              Two
            </Tabs.Tab>
          </Tabs.TabList>
        </Tabs>
      );

      expect(getByRole('tab', { name: 'Two' })).toHaveAttribute('aria-disabled', 'true');
    });

    it('applies custom props if provided', () => {
      const { getByTestId } = render(
        <Tabs>
          <Tabs.TabList>
            <Tabs.Tab item="custom" data-test-id="custom-tab">
              Custom Tab
            </Tabs.Tab>
          </Tabs.TabList>
          <Tabs.TabPanel item="custom">Custom Tab content</Tabs.TabPanel>
        </Tabs>
      );

      expect(getByTestId('custom-tab')).toBeInTheDocument();
    });

    it('selected first tab if in uncontrolled state', () => {
      const { getAllByTestId } = render(<BasicExample />);

      expect(getAllByTestId('tab')[0]).toHaveAttribute('aria-selected', 'true');
    });

    it('selects the first enabled tab when the first tab is disabled', () => {
      const { getAllByTestId } = render(
        <Tabs>
          <Tabs.TabList>
            <Tabs.Tab data-test-id="tab" item="tab-1" disabled>
              Tab 1
            </Tabs.Tab>
            <Tabs.Tab data-test-id="tab" item="tab-2">
              Tab 2
            </Tabs.Tab>
          </Tabs.TabList>
          <Tabs.TabPanel item="tab-1">Tab 1 content</Tabs.TabPanel>
          <Tabs.TabPanel item="tab-2">Tab 2 content</Tabs.TabPanel>
        </Tabs>
      );

      expect(getAllByTestId('tab')[1]).toHaveAttribute('aria-selected', 'true');
    });
  });

  describe('Tabs.TabPanel', () => {
    it('does not throw if a item is provided to Tabs.TabPanel', () => {
      expect(() => {
        render(
          <Tabs>
            <Tabs.TabList>
              <Tabs.Tab item="valid-panel">Panel</Tabs.Tab>
            </Tabs.TabList>
            <Tabs.TabPanel item="valid-panel">Valid panel</Tabs.TabPanel>
          </Tabs>
        );
      }).not.toThrow();
    });
  });
});
