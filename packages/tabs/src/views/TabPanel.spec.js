import React from 'react';
import { shallow } from 'enzyme';

import TabPanel from './TabPanel';

describe('TabPanel', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<TabPanel />);

    expect(wrapper).toMatchSnapshot();
  });
});
