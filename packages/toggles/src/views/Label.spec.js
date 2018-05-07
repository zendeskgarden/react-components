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

  it('renders regular styling if provided', () => {
    const wrapper = shallow(<Label regular />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders checked styling if provided', () => {
    const wrapper = shallow(<Label checked />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders hovered styling if provided', () => {
    const wrapper = shallow(<Label hovered />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders focused styling if provided', () => {
    const wrapper = shallow(<Label focused />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders disabled styling if provided', () => {
    const wrapper = shallow(<Label disabled />);

    expect(wrapper).toMatchSnapshot();
  });
});
