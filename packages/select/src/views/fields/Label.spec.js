import React from 'react';
import { shallow } from 'enzyme';
import Label from './Label';

describe('Label', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<Label />);

    expect(wrapper).toMatchSnapshot();
  });
});
