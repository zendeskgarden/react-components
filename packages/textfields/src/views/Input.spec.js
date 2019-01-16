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

    expect(wrapper).toMatchSnapshot();
  });

  it('renders RTL styling', () => {
    const wrapper = shallowWithTheme(<Input />, { rtl: true });

    expect(wrapper).toMatchSnapshot();
  });

  it('renders small styling if provided', () => {
    const wrapper = shallow(<Input small />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders tag layout styling if provided', () => {
    const wrapper = shallow(<Input tagLayout />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders select styling if provided', () => {
    const wrapper = shallow(<Input select />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders media layout styling if provided', () => {
    const wrapper = shallow(<Input mediaLayout />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders bare styling if provided', () => {
    const wrapper = shallow(<Input bare />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders focus-inset styling if provided', () => {
    const wrapper = shallow(<Input focusInset />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders disabled styling if provided', () => {
    const wrapper = shallow(<Input disabled />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders focused styling if provided', () => {
    const wrapper = shallow(<Input focused />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders hovered styling if provided', () => {
    const wrapper = shallow(<Input hovered />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders open styling if provided', () => {
    const wrapper = shallow(<Input open />);

    expect(wrapper).toMatchSnapshot();
  });

  describe('validation', () => {
    ['success', 'warning', 'error', 'none'].forEach(validation => {
      it(`renders ${validation} styling if provided`, () => {
        const wrapper = shallow(<Input validation={validation} />);

        expect(wrapper).toMatchSnapshot();
      });
    });
  });
});
