import React from 'react';
import { shallow } from 'enzyme';

import NextPage from './NextPage';

describe('NextPage', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<NextPage />);

    expect(wrapper).toMatchSnapshot();
  });
});
