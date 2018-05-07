import React from 'react';
import { shallow } from 'enzyme';
import Hint from './Hint';

describe('Hint', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<Hint />);

    expect(wrapper).toMatchSnapshot();
  });
});
