import React from 'react';
import { mount } from 'enzyme';

import Tabs from './Tabs';
import TabsContainer from '../containers/TabsContainer';
import TabsView from '../views/TabsView';
import TabList from '../views/TabList';
import Tab from '../views/Tab';
import TabPanel from '../views/TabPanel';

describe('Tabs', () => {
  const basicExample = (
    <Tabs>
      <TabPanel label="Tab 1" key="tab-1">
        Tab 1 content
      </TabPanel>
      <TabPanel label="Tab 2" key="tab-2">
        Tab 2 content
      </TabPanel>
    </Tabs>
  );

  beforeEach(() => {
    // Disabled due to styled-components theming
    console.warn = jest.fn(); // eslint-disable-line no-console
  });

  it('renders horizontal mode by default', () => {
    const wrapper = mount(<Tabs />);

    expect(wrapper.find(TabsContainer)).toHaveProp('vertical', false);
    expect(wrapper.find(Tabs)).toHaveProp('vertical', false);
  });

  it('renders vertical mode if provided', () => {
    const wrapper = mount(<Tabs vertical />);

    expect(wrapper.find(TabsContainer)).toHaveProp('vertical', true);
    expect(wrapper.find(TabsView)).toHaveProp('vertical', true);
  });

  describe('Tab', () => {
    it('applies selected styling to currently selected tab', () => {
      const wrapper = mount(basicExample);

      wrapper
        .find(Tab)
        .at(1)
        .simulate('click');

      expect(wrapper.find(Tab).at(1)).toHaveProp('selected', true);
    });

    it('applies focused styling to currently focused tab', () => {
      const wrapper = mount(basicExample);

      wrapper.find(TabList).simulate('focus');

      expect(wrapper.find(Tab).first()).toHaveProp('focused', true);
    });

    it('applies disabled styling if provided', () => {
      const wrapper = mount(
        <Tabs>
          <TabPanel label="Tab 1" key="tab-1">
            Tab 1 content
          </TabPanel>
          <TabPanel disabled>Disabled tab</TabPanel>
        </Tabs>
      );

      expect(wrapper.find(Tab).last()).toHaveProp('disabled', true);
    });

    it('selected first tab if in uncontrolled state', () => {
      const wrapper = mount(basicExample);

      expect(wrapper.find(Tab).first()).toHaveProp('selected', true);
    });
  });

  describe('TabPanel', () => {
    it('throws if no key is provided to TabPanel', () => {
      console.error = jest.fn(); // eslint-disable-line no-console

      expect(() => {
        mount(
          <Tabs>
            <TabPanel>Invalid panel</TabPanel>
          </Tabs>
        );
      }).toThrow(
        '"key" must be defined within getTabProps regardless of being used within a .map()'
      );
    });

    it('does not throw if a key is provided to TabPanel', () => {
      expect(() => {
        mount(
          <Tabs>
            <TabPanel key="valid-panel">Valid panel</TabPanel>
          </Tabs>
        );
      }).not.toThrow();
    });
  });
});
