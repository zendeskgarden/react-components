/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallow } from 'enzyme';
import { shallowWithTheme } from 'utils';
import TooltipView from './TooltipView';

describe('TooltipView', () => {
  it('renders default styling correctly', () => {
    const wrapper = shallow(<TooltipView />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders RTL styling correctly', () => {
    const wrapper = shallowWithTheme(<TooltipView />, { rtl: true });

    expect(wrapper).toMatchSnapshot();
  });

  describe('Sizing', () => {
    ['medium', 'large', 'extra-large'].forEach(size => {
      it(`renders ${size} size correctly`, () => {
        const wrapper = shallow(<TooltipView size={size} />);

        expect(wrapper).toMatchSnapshot();
      });
    });
  });

  describe('Placement', () => {
    [
      'top',
      'top-start',
      'top-end',
      'right',
      'right-start',
      'right-end',
      'bottom',
      'bottom-start',
      'bottom-end',
      'left',
      'left-start',
      'left-end'
    ].forEach(placement => {
      it(`renders ${placement} placement correctly`, () => {
        const wrapper = shallow(<TooltipView placement={placement} />);

        expect(wrapper).toMatchSnapshot();
      });
    });

    it('does not render arrow styling if disabled', () => {
      const wrapper = shallow(<TooltipView arrow={false} placement="top" />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
