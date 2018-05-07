import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

describe('Header', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders standalone styling if provided', () => {
    const wrapper = shallow(<Header standalone />);

    expect(wrapper).toMatchSnapshot();
  });
});
