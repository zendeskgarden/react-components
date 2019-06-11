/* eslint-disable no-console */
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, fireEvent } from 'garden-test-utils';

import Tabs from './Tabs';
import TabPanel from '../views/TabPanel';

describe('Tabs', () => {
  const BasicExample = props => (
    <Tabs data-test-id="container" {...props}>
      <TabPanel label={<span data-test-id="tab">Tab 1</span>} key="tab-1" data-test-id="panel">
        Tab 1 content
      </TabPanel>
      <TabPanel label={<span data-test-id="tab">Tab 2</span>} key="tab-2" data-test-id="panel">
        Tab 2 content
      </TabPanel>
    </Tabs>
  );

  it('renders horizontal mode by default', () => {
    const { getByTestId } = render(<BasicExample />);

    expect(getByTestId('container')).not.toHaveClass('c-tab--block');
  });

  it('renders vertical mode if provided', () => {
    const { getByTestId } = render(<BasicExample vertical />);

    expect(getByTestId('container')).toHaveClass('c-tab--block');
  });

  describe('Tab', () => {
    it('applies selected styling to currently selected tab', () => {
      const { getAllByTestId } = render(<BasicExample />);
      const tab = getAllByTestId('tab')[1];

      fireEvent.click(tab);

      expect(tab.parentElement).toHaveClass('is-selected');
    });

    it('applies focused styling to currently focused tab', () => {
      const { getAllByTestId, getByRole } = render(<BasicExample />);
      const tab = getAllByTestId('tab')[0];

      fireEvent.focus(getByRole('tablist'));

      expect(tab.parentElement).toHaveClass('is-focused');
    });

    it('applies disabled styling if provided', () => {
      const { getAllByTestId } = render(
        <Tabs>
          <TabPanel label={<span data-test-id="tab">Tab 1</span>} key="tab-1">
            Tab 1 content
          </TabPanel>
          <TabPanel disabled label={<span data-test-id="tab">Tab 2</span>}>
            Disabled tab
          </TabPanel>
        </Tabs>
      );

      expect(getAllByTestId('tab')[1].parentElement).toHaveClass('is-disabled');
    });

    it('applies custom props if provided', () => {
      const { getByTestId } = render(
        <Tabs>
          <TabPanel key="custom" tabProps={{ 'data-test-id': 'custom-tab' }}>
            Custom Tab
          </TabPanel>
        </Tabs>
      );

      expect(getByTestId('custom-tab')).toBeInTheDocument();
    });

    it('selected first tab if in uncontrolled state', () => {
      const { getAllByTestId } = render(<BasicExample />);

      expect(getAllByTestId('tab')[0].parentElement).toHaveClass('is-selected');
    });
  });

  describe('TabPanel', () => {
    it('throws if no key is provided to TabPanel', () => {
      const originalError = console.error;

      console.error = jest.fn();

      expect(() => {
        render(
          <Tabs>
            <TabPanel>Invalid panel</TabPanel>
          </Tabs>
        );
      }).toThrow(
        '"key" must be defined within getTabProps regardless of being used within a .map()'
      );

      console.error = originalError;
    });

    it('does not throw if a key is provided to TabPanel', () => {
      expect(() => {
        render(
          <Tabs>
            <TabPanel key="valid-panel">Valid panel</TabPanel>
          </Tabs>
        );
      }).not.toThrow();
    });
  });
});
