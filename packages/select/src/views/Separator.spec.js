import React from 'react';
import { shallow } from 'enzyme';
import Separator from './Separator';

describe('Separator', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<Separator />);

    expect(wrapper).toMatchSnapshot();
  });
});
