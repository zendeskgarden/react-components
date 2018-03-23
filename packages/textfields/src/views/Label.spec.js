import React from 'react';
import { shallow } from 'enzyme';
import { shallowWithTheme } from 'utils';

import Label from './Label';

describe('Label', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<Label />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders RTL styling', () => {
    const wrapper = shallowWithTheme(<Label />, { rtl: true });

    expect(wrapper).toMatchSnapshot();
  });

  it('renders small styling if provided', () => {
    const wrapper = shallow(<Label small />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders regular styling if provided', () => {
    const wrapper = shallow(<Label regular />);

    expect(wrapper).toMatchSnapshot();
  });
});
