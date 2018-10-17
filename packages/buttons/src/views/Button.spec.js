/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { mount } from 'enzyme';
import Button from './Button';

describe('Button', () => {
  it('renders default styling', () => {
    const wrapper = mount(<Button />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders danger styling if provided', () => {
    const wrapper = mount(<Button danger />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correct combination of danger and disabled styling if provided', () => {
    const wrapper = mount(<Button danger disabled />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders stretched styling if provided', () => {
    const wrapper = mount(<Button stretched />);

    expect(wrapper).toMatchSnapshot();
  });

  describe('Types', () => {
    it('renders primary styling if provided', () => {
      const wrapper = mount(<Button primary />);

      expect(wrapper).toMatchSnapshot();
    });

    it('renders basic styling if provided', () => {
      const wrapper = mount(<Button basic />);

      expect(wrapper).toMatchSnapshot();
    });

    it('renders muted styling if provided', () => {
      const wrapper = mount(<Button muted />);

      expect(wrapper).toMatchSnapshot();
    });

    it('renders link styling if provided', () => {
      const wrapper = mount(<Button link />);

      expect(wrapper).toMatchSnapshot();
    });

    it('renders pill styling if provided', () => {
      const wrapper = mount(<Button pill />);

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Selection', () => {
    it('does not render focused styling if focused by mouse', () => {
      const wrapper = mount(<Button data-test-id="button" />);

      wrapper.find('button[data-test-id="button"]').simulate('click');
      expect(wrapper.find('button[data-test-id="button"]')).not.toHaveClassName('is-focused');
    });

    it('renders focused styling if focused by keyboard', () => {
      const wrapper = mount(<Button data-test-id="button" />);

      wrapper.find('button[data-test-id="button"]').simulate('focus');
      expect(wrapper.find('button[data-test-id="button"]')).toHaveClassName('is-focused');
    });
  });

  describe('Sizes', () => {
    it('renders small styling if provided', () => {
      const wrapper = mount(<Button size="small" />);

      expect(wrapper).toMatchSnapshot();
    });

    it('renders large styling if provided', () => {
      const wrapper = mount(<Button size="large" />);

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('States', () => {
    it('renders active styling if provided', () => {
      const wrapper = mount(<Button active />);

      expect(wrapper).toMatchSnapshot();
    });

    it('renders disabled styling if provided', () => {
      const wrapper = mount(<Button disabled />);

      expect(wrapper).toMatchSnapshot();
    });

    it('renders focused styling if provided', () => {
      const wrapper = mount(<Button focused />);

      expect(wrapper).toMatchSnapshot();
    });

    it('renders hovered styling if provided', () => {
      const wrapper = mount(<Button hovered />);

      expect(wrapper).toMatchSnapshot();
    });

    it('renders selected styling if provided', () => {
      const wrapper = mount(<Button selected />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
