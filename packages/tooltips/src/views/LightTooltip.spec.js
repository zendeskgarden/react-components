import React from 'react';
import { shallow } from 'enzyme';
import LightTooltip from './LightTooltip';

describe('LightTooltip', () => {
  it('renders default styling correctly', () => {
    const wrapper = shallow(<LightTooltip />);

    expect(wrapper).toMatchSnapshot();
  });
});
