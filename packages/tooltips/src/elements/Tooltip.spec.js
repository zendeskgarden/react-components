/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { mountWithTheme } from '@zendeskgarden/react-testing';

import Tooltip from './Tooltip';
import TooltipView from '../views/TooltipView';
import LightTooltip from '../views/LightTooltip';

/**
 * Mocks popper.js calls within react-popper due to virtual testing environment
 */
jest.mock('popper.js', () => {
  const PopperJS = jest.requireActual('popper.js');

  return class Popper {
    static placements = PopperJS.placements;

    constructor() {
      return {
        destroy: () => {
          // mock implementation
        },
        scheduleUpdate: () => {
          // mock implementation
        }
      };
    }
  };
});

jest.useFakeTimers();

describe('Tooltip', () => {
  const basicExample = ({ placement, size, type } = {}) => (
    <Tooltip
      placement={placement}
      size={size}
      type={type}
      trigger={<button data-test-id="trigger">Trigger</button>}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua.
    </Tooltip>
  );

  const findTrigger = providedWrapper => {
    return providedWrapper.find('[data-test-id="trigger"]');
  };

  describe('Types', () => {
    it('renders light tooltip if provided', () => {
      const wrapper = mountWithTheme(basicExample({ type: 'light' }));

      findTrigger(wrapper).simulate('focus');
      jest.runOnlyPendingTimers();
      wrapper.update();
      expect(wrapper.find(LightTooltip)).toHaveLength(1);
    });

    it('renders dark tooltip if provided', () => {
      const wrapper = mountWithTheme(basicExample({ type: 'dark' }));

      findTrigger(wrapper).simulate('focus');
      jest.runOnlyPendingTimers();
      wrapper.update();
      expect(wrapper.find(TooltipView)).toHaveLength(1);
    });
  });
});
