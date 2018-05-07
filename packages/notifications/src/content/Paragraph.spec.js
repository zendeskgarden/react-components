import React from 'react';
import { shallow } from 'enzyme';
import Paragraph from './Paragraph';

describe('Paragraph', () => {
  it('renders paragraph styling', () => {
    const wrapper = shallow(<Paragraph />);

    expect(wrapper).toMatchSnapshot();
  });
});
