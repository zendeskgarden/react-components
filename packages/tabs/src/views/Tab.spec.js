import React from 'react';
import { shallow } from 'enzyme';

import Tab from './Tab';

describe('Tab', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<Tab />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders hovered styling', () => {
    const wrapper = shallow(<Tab hovered />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders focused styling', () => {
    const wrapper = shallow(<Tab focused />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders active styling', () => {
    const wrapper = shallow(<Tab active />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders disabled styling', () => {
    const wrapper = shallow(<Tab disabled />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders selected styling', () => {
    const wrapper = shallow(<Tab selected />);

    expect(wrapper).toMatchSnapshot();
  });
});
