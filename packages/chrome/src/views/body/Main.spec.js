import React from 'react';
import { shallow } from 'enzyme';

import Main from './Main';

describe('Main', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<Main />);

    expect(wrapper).toMatchSnapshot();
  });
});
