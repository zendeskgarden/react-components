import React from 'react';
import { shallow } from 'enzyme';
import AddItem from './AddItem';

describe('AddItem', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<AddItem />);

    expect(wrapper).toMatchSnapshot();
  });
});
