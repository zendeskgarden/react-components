import React from 'react';
import { shallow } from 'enzyme';
import SelectGroup from './SelectGroup';

describe('SelectGroup', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<SelectGroup />);

    expect(wrapper).toMatchSnapshot();
  });
});
