import React from 'react';
import { shallow } from 'enzyme';
import { shallowWithTheme } from 'utils';

import ToggleView from './ToggleView';

describe('ToggleView', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<ToggleView />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders RTL styling', () => {
    const wrapper = shallowWithTheme(<ToggleView />, { rtl: true });

    expect(wrapper).toMatchSnapshot();
  });
});
