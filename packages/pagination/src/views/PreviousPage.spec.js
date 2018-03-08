import React from 'react';
import { shallow } from 'enzyme';

import PreviousPage from './PreviousPage';

describe('PreviousPage', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<PreviousPage />);

    expect(wrapper).toMatchSnapshot();
  });
});
