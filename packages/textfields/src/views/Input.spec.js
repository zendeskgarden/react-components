/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallow } from 'enzyme';
import { shallowWithTheme } from '@zendeskgarden/react-testing';

import Input from './Input';

describe('Input', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<Input />);

    expect(wrapper).toHaveClassName('c-txt__input');
  });

  it('renders RTL styling', () => {
    const wrapper = shallowWithTheme(<Input />, { rtl: true });

    expect(wrapper).toHaveClassName('is-rtl');
  });

  it('renders small styling if provided', () => {
    const wrapper = shallow(<Input small />);

    expect(wrapper).toHaveClassName('c-txt__input--sm');
  });

  it('renders tag layout styling if provided', () => {
    const wrapper = shallow(<Input tagLayout />);

    expect(wrapper).toHaveClassName('c-txt__input--tag');
  });

  it('renders select styling if provided', () => {
    const wrapper = shallow(<Input select />);

    expect(wrapper).toHaveClassName('c-txt__input--select');
  });

  it('renders media layout styling if provided', () => {
    const wrapper = shallow(<Input mediaLayout />);

    expect(wrapper).toHaveClassName('c-txt__input--media');
  });

  it('renders bare styling if provided', () => {
    const wrapper = shallow(<Input bare />);

    expect(wrapper).toHaveClassName('c-txt__input--bare');
  });

  it('renders focus-inset styling if provided', () => {
    const wrapper = shallow(<Input focusInset />);

    expect(wrapper).toHaveClassName('c-txt__input--focus-inset');
  });

  it('renders disabled styling if provided', () => {
    const wrapper = shallow(<Input disabled />);

    expect(wrapper).toHaveClassName('is-disabled');
  });

  it('renders focused styling if provided', () => {
    const wrapper = shallow(<Input focused />);

    expect(wrapper).toHaveClassName('is-focused');
  });

  it('renders hovered styling if provided', () => {
    const wrapper = shallow(<Input hovered />);

    expect(wrapper).toHaveClassName('is-hovered');
  });

  it('renders open styling if provided', () => {
    const wrapper = shallow(<Input open />);

    expect(wrapper).toHaveClassName('is-open');
  });

  describe('validation', () => {
    ['success', 'warning', 'error'].forEach(validation => {
      it(`renders ${validation} styling if provided`, () => {
        const wrapper = shallow(<Input validation={validation} />);

        expect(wrapper).toHaveClassName(`c-txt__input--${validation}`);
      });
    });
  });
});
