import React from 'react';
import { shallow } from 'enzyme';
import { shallowWithTheme } from 'utils';

import TextGroup from './TextGroup';

describe('TextGroup', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<TextGroup />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders RTL styling', () => {
    const wrapper = shallowWithTheme(<TextGroup />, { rtl: true });

    expect(wrapper).toMatchSnapshot();
  });

  it('renders inline styling if provided', () => {
    const wrapper = shallow(<TextGroup inline />);

    expect(wrapper).toMatchSnapshot();
  });
});
