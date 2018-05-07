import React from 'react';
import { mount } from 'enzyme';
import Anchor from './Anchor';

describe('Anchor', () => {
  it('renders danger styling if provided', () => {
    const wrapper = mount(<Anchor danger />);

    expect(wrapper).toMatchSnapshot();
  });

  describe('Selection', () => {
    it('does not render focused styling if focused by mouse', () => {
      const wrapper = mount(<Anchor data-test-id="anchor" />);

      wrapper.find('a[data-test-id="anchor"]').simulate('click');
      expect(wrapper.find('a[data-test-id="anchor"]')).not.toHaveClassName('is-focused');
    });

    it('renders focused styling if focused by keyboard', () => {
      const wrapper = mount(<Anchor data-test-id="anchor" />);

      wrapper.find('a[data-test-id="anchor"]').simulate('focus');
      expect(wrapper.find('a[data-test-id="anchor"]')).toHaveClassName('is-focused');
    });
  });

  describe('States', () => {
    it('renders active styling if provided', () => {
      const wrapper = mount(<Anchor active />);

      expect(wrapper).toMatchSnapshot();
    });

    it('renders disabled styling if provided', () => {
      const wrapper = mount(<Anchor disabled />);

      expect(wrapper).toMatchSnapshot();
    });

    it('renders focused styling if provided', () => {
      const wrapper = mount(<Anchor focused />);

      expect(wrapper).toMatchSnapshot();
    });

    it('renders hovered styling if provided', () => {
      const wrapper = mount(<Anchor hovered />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
