import React from 'react';
import { shallow } from 'enzyme';
import { shallowWithTheme } from 'utils';

import TabsView from './TabsView';

describe('TabsView', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<TabsView />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders RTL styling', () => {
    const wrapper = shallowWithTheme(<TabsView />, { rtl: true });

    expect(wrapper).toMatchSnapshot();
  });

  it('renders vertical styling', () => {
    const wrapper = shallow(<TabsView vertical />);

    expect(wrapper).toMatchSnapshot();
  });
});
