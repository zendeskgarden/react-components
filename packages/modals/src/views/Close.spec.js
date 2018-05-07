import React from 'react';
import { mount } from 'enzyme';
import Close from './Close';

describe('Close', () => {
  it('renders default close styling', () => {
    const wrapper = mount(<Close />);

    expect(wrapper).toMatchSnapshot();
  });

  describe('state', () => {
    it('renders focused styling correctly if provided', () => {
      const wrapper = mount(<Close focused />);

      expect(wrapper).toMatchSnapshot();
    });

    it('renders focused styling if focused', () => {
      const wrapper = mount(<Close />);

      wrapper.simulate('focus');
      expect(wrapper).toMatchSnapshot();
    });

    it('removes focused styling if blurred', () => {
      const wrapper = mount(<Close />);

      wrapper.simulate('focus');
      wrapper.simulate('blur');
      expect(wrapper).toMatchSnapshot();
    });

    it('renders hovered styling correctly if provided', () => {
      const wrapper = mount(<Close hovered />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
