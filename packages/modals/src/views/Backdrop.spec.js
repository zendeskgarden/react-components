import React from 'react';
import { shallow } from 'enzyme';
import { shallowWithTheme } from 'utils';
import Backdrop from './Backdrop';

describe('Backdrop', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<Backdrop />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders RTL styling', () => {
    const wrapper = shallowWithTheme(<Backdrop />, { rtl: true });

    expect(wrapper).toMatchSnapshot();
  });

  it('renders center styling if provided', () => {
    const wrapper = shallow(<Backdrop center />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders animation styling if provided', () => {
    const wrapper = shallow(<Backdrop animate />);

    expect(wrapper).toMatchSnapshot();
  });
});
