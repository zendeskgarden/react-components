import React from 'react';
import { shallow } from 'enzyme';
import { shallowWithTheme } from 'utils';

import Chrome from './Chrome';

describe('Chrome', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<Chrome />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders RTL styling', () => {
    const wrapper = shallowWithTheme(<Chrome />, { rtl: true });

    expect(wrapper).toMatchSnapshot();
  });
});
