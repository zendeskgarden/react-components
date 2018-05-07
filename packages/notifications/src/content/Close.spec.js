import React from 'react';
import { shallow } from 'enzyme';
import Close from './Close';

describe('Close', () => {
  it('renders default close styling', () => {
    const wrapper = shallow(<Close />);

    expect(wrapper).toMatchSnapshot();
  });

  describe('state', () => {
    it('renders focused styling correctly', () => {
      const wrapper = shallow(<Close focused />);

      expect(wrapper).toMatchSnapshot();
    });

    it('renders hovered styling correctly', () => {
      const wrapper = shallow(<Close hovered />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
