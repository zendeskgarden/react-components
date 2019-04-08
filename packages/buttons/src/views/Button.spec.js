/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { mount, shallow } from 'enzyme';
import Button, { StyledButton } from './Button';

describe('Button', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<StyledButton />);

    expect(wrapper).toHaveClassName('c-btn');
  });

  it('renders danger styling if provided', () => {
    const wrapper = shallow(<StyledButton danger />);

    expect(wrapper).toHaveClassName('c-btn--danger');
  });

  it('renders correct combination of danger and disabled styling if provided', () => {
    const wrapper = shallow(<StyledButton danger disabled />);

    expect(wrapper).toHaveClassName('is-disabled');
    expect(wrapper).not.toHaveClassName('c-btn--danger');
  });

  it('renders stretched styling if provided', () => {
    const wrapper = shallow(<StyledButton stretched />);

    expect(wrapper).toHaveClassName('c-btn--full');
  });

  it('renders focus-inset styling if provided', () => {
    const wrapper = shallow(<StyledButton focusInset />);

    expect(wrapper).toHaveClassName('c-btn--focus-inset');
  });

  describe('Types', () => {
    it('renders primary styling if provided', () => {
      const wrapper = shallow(<StyledButton primary />);

      expect(wrapper).toHaveClassName('c-btn--primary');
    });

    it('renders basic styling if provided', () => {
      const wrapper = shallow(<StyledButton basic />);

      expect(wrapper).toHaveClassName('c-btn--basic');
    });

    it('renders muted styling if provided', () => {
      const wrapper = shallow(<StyledButton muted />);

      expect(wrapper).toHaveClassName('c-btn--muted');
    });

    it('renders link styling if provided', () => {
      const wrapper = shallow(<StyledButton link />);

      expect(wrapper).toHaveClassName('c-btn--anchor');
    });

    it('renders pill styling if provided', () => {
      const wrapper = shallow(<StyledButton pill />);

      expect(wrapper).toHaveClassName('c-btn--pill');
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
      const wrapper = shallow(<StyledButton size="small" />);

      expect(wrapper).toHaveClassName('c-btn--sm');
    });

    it('renders large styling if provided', () => {
      const wrapper = shallow(<StyledButton size="large" />);

      expect(wrapper).toHaveClassName('c-btn--lg');
    });
  });

  describe('States', () => {
    it('renders active styling if provided', () => {
      const wrapper = shallow(<StyledButton active />);

      expect(wrapper).toHaveClassName('is-active');
    });

    it('renders disabled styling if provided', () => {
      const wrapper = shallow(<StyledButton disabled />);

      expect(wrapper).toHaveClassName('is-disabled');
    });

    it('renders focused styling if provided', () => {
      const wrapper = shallow(<StyledButton focused />);

      expect(wrapper).toHaveClassName('is-focused');
    });

    it('renders hovered styling if provided', () => {
      const wrapper = shallow(<StyledButton hovered />);

      expect(wrapper).toHaveClassName('is-hovered');
    });

    it('renders selected styling if provided', () => {
      const wrapper = shallow(<StyledButton selected />);

      expect(wrapper).toHaveClassName('is-selected');
    });
  });
});
