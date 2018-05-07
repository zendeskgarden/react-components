import React from 'react';
import { shallow } from 'enzyme';

import Content from './Content';

describe('Content', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<Content />);

    expect(wrapper).toMatchSnapshot();
  });
});
