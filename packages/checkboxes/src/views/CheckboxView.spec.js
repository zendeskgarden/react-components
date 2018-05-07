import React from 'react';
import { shallow } from 'enzyme';
import { shallowWithTheme } from 'utils';

import CheckboxView from './CheckboxView';

describe('CheckboxView', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<CheckboxView />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders RTL styling', () => {
    const wrapper = shallowWithTheme(<CheckboxView />, { rtl: true });

    expect(wrapper).toMatchSnapshot();
  });
});
