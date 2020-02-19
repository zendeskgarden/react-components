/* eslint-disable no-console */
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, fireEvent } from 'garden-test-utils';

import { Tabs, ITabsProps, TabList, TabPanel, Tab } from '../';

describe('Tabs', () => {
  const BasicExample = (props: ITabsProps) => (
    <Tabs data-test-id="container" {...props}>
      <TabList>
        <Tab item="tab-1" data-test-id="tab">
          Tab 1
        </Tab>
        <Tab item="tab-2" data-test-id="tab">
          Tab 2
        </Tab>
      </TabList>
      <TabPanel item="tab-1" data-test-id="panel">
        Tab 1 content
      </TabPanel>
      <TabPanel item="tab-2" data-test-id="panel">
        Tab 2 content
      </TabPanel>
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

  it('calls onChange with correct item on selection', () => {
    const onChangeSpy = jest.fn();

    const { getAllByTestId } = render(<BasicExample onChange={onChangeSpy} />);

    fireEvent.click(getAllByTestId('tab')[1]);
    expect(onChangeSpy).toHaveBeenCalledWith('tab-2');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(
      <Tabs ref={ref}>
        <TabList>
          <Tab item="tab-1">Tab 1</Tab>
        </TabList>
        <TabPanel item="tab-1">Tab 1 content</TabPanel>
      </Tabs>
    );

    expect(container.firstChild).toBe(ref.current);
  });

  describe('Tab', () => {
    it('applies selected styling to currently selected tab', () => {
      const { getAllByTestId } = render(<BasicExample />);
      const tab = getAllByTestId('tab')[1];

      fireEvent.click(tab);

      expect(tab).toHaveAttribute('aria-selected', 'true');
    });

    it('applies disabled styling if provided', () => {
      const { getAllByTestId } = render(
        <Tabs>
          <TabList>
            <Tab data-test-id="tab" item="tab-1">
              Tab 1
            </Tab>
            <Tab data-test-id="tab" disabled>
              Disabled Tab
            </Tab>
          </TabList>
          <TabPanel item="tab-1">Tab 1 content</TabPanel>
        </Tabs>
      );

      expect(getAllByTestId('tab')[1]).toHaveAttribute('aria-disabled', 'true');
    });

    it('applies custom props if provided', () => {
      const { getByTestId } = render(
        <Tabs>
          <TabList>
            <Tab item="custom" data-test-id="custom-tab">
              Custom Tab
            </Tab>
          </TabList>
          <TabPanel item="custom">Custom Tab content</TabPanel>
        </Tabs>
      );

      expect(getByTestId('custom-tab')).toBeInTheDocument();
    });

    it('selected first tab if in uncontrolled state', () => {
      const { getAllByTestId } = render(<BasicExample />);

      expect(getAllByTestId('tab')[0]).toHaveAttribute('aria-selected', 'true');
    });
  });

  describe('TabPanel', () => {
    it('throws if no item is provided to TabPanel', () => {
      const originalError = console.error;

      console.error = jest.fn();

      expect(() => {
        render(
          <Tabs>
            <TabList>
              <Tab>Invalid panel</Tab>
            </TabList>
            <TabPanel>Invalid panel</TabPanel>
          </Tabs>
        );
      }).toThrow('Accessibility Error: You must provide an "item" option to "getTabProps()"');

      console.error = originalError;
    });

    it('does not throw if a item is provided to TabPanel', () => {
      expect(() => {
        render(
          <Tabs>
            <TabList>
              <Tab item="valid-panel">Panel</Tab>
            </TabList>
            <TabPanel item="valid-panel">Valid panel</TabPanel>
          </Tabs>
        );
      }).not.toThrow();
    });
  });
});
