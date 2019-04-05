/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { mount } from 'enzyme';
import Close from './Close';

describe('Close', () => {
  it('renders default close styling', () => {
    const wrapper = mount(<Close />);

    expect(wrapper.childAt(0).childAt(0)).toHaveClassName('c-dialog__close');
  });

  describe('state', () => {
    it('renders focused styling correctly if provided', () => {
      const wrapper = mount(<Close focused />);

      expect(wrapper.childAt(0).childAt(0)).toHaveClassName('is-focused');
    });

    it('renders focused styling if focused', () => {
      const wrapper = mount(<Close />);

      wrapper.simulate('focus');
      expect(wrapper.childAt(0).childAt(0)).toHaveClassName('is-focused');
    });

    it('removes focused styling if blurred', () => {
      const wrapper = mount(<Close />);

      wrapper.simulate('focus');
      wrapper.simulate('blur');
      expect(wrapper.childAt(0).childAt(0)).not.toHaveClassName('is-focused');
    });

    it('renders hovered styling correctly if provided', () => {
      const wrapper = mount(<Close hovered />);

      expect(wrapper.childAt(0).childAt(0)).toHaveClassName('is-hovered');
    });
  });
});
