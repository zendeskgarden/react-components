/* eslint-disable no-console */
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, fireEvent } from 'garden-test-utils';

import TabsContainer from './TabsContainer';

describe('TabsContainer', () => {
  let onChangeSpy;
  const tabs = ['tab-1', 'tab-2', 'tab-3'];

  const BasicExample = props => (
    <TabsContainer {...props}>
      {({ getTabListProps, getTabProps, getTabPanelProps, selectedKey, focusedKey }) => (
        <div>
          <div {...getTabListProps({ 'data-test-id': 'tablist' })}>
            {tabs.map(tab => (
              <div
                {...getTabProps({
                  key: tab,
                  'data-test-id': 'tab',
                  'data-selected': tab === selectedKey,
                  'data-focused': tab === focusedKey
                })}
              >
                {tab}
              </div>
            ))}
          </div>
          {tabs.map(tab => (
            <div {...getTabPanelProps({ key: tab, 'data-test-id': 'panel' })}>{tab} content</div>
          ))}
        </div>
      )}
    </TabsContainer>
  );

  beforeEach(() => {
    onChangeSpy = jest.fn();
  });

  it('calls onChange with selectedKey when Tab is selected', () => {
    const { getAllByTestId } = render(<BasicExample onChange={onChangeSpy} />);

    fireEvent.click(getAllByTestId('tab')[0]);

    expect(onChangeSpy).toHaveBeenCalledWith('tab-1');
  });

  describe('TabList', () => {
    it('applies correct accessibility role', () => {
      const { getByTestId } = render(<BasicExample />);

      expect(getByTestId('tablist')).toHaveAttribute('role', 'tablist');
    });

    describe('Tab', () => {
      it('throws if key is not provided', () => {
        const originalError = console.error;

        console.error = jest.fn();

        expect(() => {
          render(
            <TabsContainer>
              {({ getTabProps }) => <div {...getTabProps()}>Test tab</div>}
            </TabsContainer>
          );
        }).toThrow(
          '"key" must be defined within getTabProps regardless of being used within a .map()'
        );

        console.error = originalError;
      });

      it('applies the correct accessibility role', () => {
        const { getAllByTestId } = render(<BasicExample />);

        getAllByTestId('tab').forEach(tab => {
          expect(tab).toHaveAttribute('role', 'tab');
        });
      });
    });
  });

  describe('TabPanel', () => {
    it('throws if key is not provided', () => {
      const originalError = console.error;

      console.error = jest.fn();

      expect(() => {
        render(
          <TabsContainer>
            {({ getTabPanelProps }) => <div {...getTabPanelProps()}>Test tab</div>}
          </TabsContainer>
        );
      }).toThrow(
        '"key" must be defined within getTabPanelProps regardless of being used within a .map()'
      );

      console.error = originalError;
    });

    it('applies the correct accessibility role', () => {
      const { getAllByTestId } = render(<BasicExample />);

      getAllByTestId('panel').forEach(tabPanel => {
        expect(tabPanel).toHaveAttribute('role', 'tabpanel');
      });
    });

    describe('when tab selected', () => {
      it('enables aria-hidden if tab is currently not selected', () => {
        const { getAllByTestId } = render(<BasicExample />);

        fireEvent.click(getAllByTestId('tab')[1]);

        expect(getAllByTestId('panel')[1]).toHaveAttribute('aria-hidden', 'false');
      });

      it('disables aria-hidden if tab is currently selected', () => {
        const { getAllByTestId } = render(<BasicExample />);

        fireEvent.click(getAllByTestId('tab')[1]);
        const items = getAllByTestId('panel');

        expect(items[0]).toHaveAttribute('aria-hidden', 'true');
        expect(items[2]).toHaveAttribute('aria-hidden', 'true');
      });
    });
  });
});
