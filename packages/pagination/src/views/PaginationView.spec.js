import React from 'react';
import { shallow } from 'enzyme';
import { shallowWithTheme } from 'utils';

import PaginationView from './PaginationView';

describe('PaginationView', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<PaginationView />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders RTL styling', () => {
    const wrapper = shallowWithTheme(<PaginationView />, { rtl: true });

    expect(wrapper).toMatchSnapshot();
  });
});
