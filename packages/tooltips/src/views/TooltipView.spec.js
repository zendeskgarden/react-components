/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallow } from 'enzyme';
import { shallowWithTheme } from '@zendeskgarden/react-testing';
import TooltipView from './TooltipView';

describe('TooltipView', () => {
  it('renders default styling correctly', () => {
    const wrapper = shallow(<TooltipView />);

    expect(wrapper).toHaveClassName('c-tooltip');
  });

  it('renders RTL styling correctly', () => {
    const wrapper = shallowWithTheme(<TooltipView />, { rtl: true });

    expect(wrapper).toHaveClassName('is-rtl');
  });

  describe('Sizing', () => {
    ['medium', 'large', 'extra-large'].forEach(size => {
      it(`renders ${size} size correctly`, () => {
        const wrapper = shallow(<TooltipView size={size} />);

        expect(wrapper).toHaveClassName(`c-tooltip--${size}`);
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
      const classes = {
        top: 'b',
        'top-start': 'bl',
        'top-end': 'br',
        right: 'l',
        'right-start': 'lt',
        'right-end': 'lb',
        bottom: 't',
        'bottom-start': 'tl',
        'bottom-end': 'tr',
        left: 'r',
        'left-start': 'rt',
        'left-end': 'rb'
      };

      it(`renders ${placement} placement correctly`, () => {
        const wrapper = shallow(<TooltipView placement={placement} />);

        expect(wrapper).toHaveClassName(`c-arrow--${classes[placement]}`);
      });
    });

    it('does not render arrow styling if disabled', () => {
      const wrapper = shallow(<TooltipView arrow={false} placement="top" />);

      expect(wrapper).not.toHaveClassName('c-arrow');
    });
  });
});
