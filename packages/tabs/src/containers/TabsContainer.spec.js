/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { mount } from 'enzyme';
import { SelectionContainer } from '@zendeskgarden/react-selection';

import TabsContainer from './TabsContainer';

describe('TabsContainer', () => {
  let wrapper;
  const tabs = ['tab-1', 'tab-2', 'tab-3'];

  const basicExample = vertical => (
    <TabsContainer vertical={vertical}>
      {({ getTabListProps, getTabProps, getTabPanelProps, selectedKey, focusedKey }) => (
        <div>
          <div {...getTabListProps({ 'data-test-id': 'tab-list' })}>
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
            <div {...getTabPanelProps({ key: tab, 'data-test-id': 'tab-panel' })}>
              {tab} content
            </div>
          ))}
        </div>
      )}
    </TabsContainer>
  );

  beforeEach(() => {
    // Disabled due to styled-components theming
    console.warn = jest.fn(); // eslint-disable-line no-console
    wrapper = mount(basicExample());
  });

  const findTabList = enzymeWrapper => enzymeWrapper.find('[data-test-id="tab-list"]');
  const findTabs = enzymeWrapper => enzymeWrapper.find('[data-test-id="tab"]');
  const findTabPanels = enzymeWrapper => enzymeWrapper.find('[data-test-id="tab-panel"]');

  it('applies horizontal direction to SelectionContainer by default', () => {
    expect(wrapper.find(SelectionContainer)).toHaveProp('direction', 'horizontal');
  });

  it('applies vertical direction to SelectionContainer if provided', () => {
    wrapper = mount(basicExample(true));

    expect(wrapper.find(SelectionContainer)).toHaveProp('direction', 'vertical');
  });

  describe('TabList', () => {
    it('applies correct accessibility role', () => {
      expect(findTabList(wrapper)).toHaveProp('role', 'tablist');
    });

    describe('Tab', () => {
      it('throws if key is not provided', () => {
        console.error = jest.fn(); // eslint-disable-line no-console

        expect(() => {
          mount(
            <TabsContainer>
              {({ getTabProps }) => <div {...getTabProps()}>Test tab</div>}
            </TabsContainer>
          );
        }).toThrow(
          '"key" must be defined within getTabProps regardless of being used within a .map()'
        );
      });

      it('applies the correct accessibility role', () => {
        findTabs(wrapper).forEach(tab => {
          expect(tab).toHaveProp('role', 'tab');
        });
      });
    });
  });

  describe('TabPanel', () => {
    it('throws if key is not provided', () => {
      console.error = jest.fn(); // eslint-disable-line no-console

      expect(() => {
        mount(
          <TabsContainer>
            {({ getTabPanelProps }) => <div {...getTabPanelProps()}>Test tab</div>}
          </TabsContainer>
        );
      }).toThrow(
        '"key" must be defined within getTabPanelProps regardless of being used within a .map()'
      );
    });

    it('applies the correct accessibility role', () => {
      findTabPanels(wrapper).forEach(tabPanel => {
        expect(tabPanel).toHaveProp('role', 'tabpanel');
      });
    });

    describe('when tab selected', () => {
      beforeEach(() => {
        findTabs(wrapper)
          .at(1)
          .simulate('click');
      });

      it('enables aria-hidden if tab is currently not selected', () => {
        expect(findTabPanels(wrapper).at(1)).toHaveProp('aria-hidden', false);
      });

      it('disables aria-hidden if tab is currently selected', () => {
        const items = findTabPanels(wrapper);

        expect(items.at(0)).toHaveProp('aria-hidden', true);
        expect(items.at(2)).toHaveProp('aria-hidden', true);
      });
    });
  });
});
