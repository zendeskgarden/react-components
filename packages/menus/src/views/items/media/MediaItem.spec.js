import React from 'react';
import { shallow } from 'enzyme';
import MediaItem from './MediaItem';

describe('MediaItem', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<MediaItem />);

    expect(wrapper).toMatchSnapshot();
  });
});
