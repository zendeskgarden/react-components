import React from 'react';
import { shallow } from 'enzyme';

import Gap from './Gap';

describe('Gap', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<Gap />);

    expect(wrapper).toMatchSnapshot();
  });
});
