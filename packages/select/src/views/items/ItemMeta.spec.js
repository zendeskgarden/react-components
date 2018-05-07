import React from 'react';
import { shallow } from 'enzyme';
import ItemMeta from './ItemMeta';

describe('ItemMeta', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<ItemMeta />);

    expect(wrapper).toMatchSnapshot();
  });
});
