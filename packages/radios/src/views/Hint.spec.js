import React from 'react';
import { shallow } from 'enzyme';
import { shallowWithTheme } from 'utils';

import Hint from './Hint';

describe('Hint', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<Hint />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders RTL styling', () => {
    const wrapper = shallowWithTheme(<Hint />, { rtl: true });

    expect(wrapper).toMatchSnapshot();
  });
});
