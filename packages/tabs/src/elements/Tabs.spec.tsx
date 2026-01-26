/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import userEvent from '@testing-library/user-event';
import { render } from 'garden-test-utils';
import React from 'react';

import { Tabs, ITabsProps, ITabProps } from '../';

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

    expect(getByTestId('container')).toHaveStyleRule('display', 'table');
  });

  it('calls onChange with correct item on selection', async () => {
    const onChangeSpy = jest.fn();

    const { getAllByTestId } = render(<BasicExample onChange={onChangeSpy} />);

    await user.click(getAllByTestId('tab')[1]);
    expect(onChangeSpy).toHaveBeenCalledWith('tab-2');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
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
      const tab = getAllByTestId('tab')[1];

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
