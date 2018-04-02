import React from 'react';
import { shallow } from 'enzyme';

import HeaderItemWrapper from './HeaderItemWrapper';

describe('HeaderItemWrapper', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<HeaderItemWrapper />);

    expect(wrapper).toMatchSnapshot();
  });
});
