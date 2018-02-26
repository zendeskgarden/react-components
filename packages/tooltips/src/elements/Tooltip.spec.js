import React from 'react';
import { mount } from 'enzyme';

import Tooltip from './Tooltip';
import TooltipView from '../views/TooltipView';
import LightTooltip from '../views/LightTooltip';
import TooltipContainer from '../containers/TooltipContainer';

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

describe('Tooltip', () => {
  const basicExample = ({ placement, size, type } = {}) => (
    <Tooltip placement={placement} size={size} type={type} trigger={<button>Trigger</button>}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua.
    </Tooltip>
  );

  describe('Types', () => {
    it('renders light tooltip if provided', () => {
      const wrapper = mount(basicExample({ type: 'light' }));

      expect(wrapper.find(LightTooltip)).toHaveLength(1);
    });

    it('renders dark tooltip if provided', () => {
      const wrapper = mount(basicExample({ type: 'dark' }));

      expect(wrapper.find(TooltipView)).toHaveLength(1);
    });
  });

  describe('Placements', () => {
    ['top', 'right', 'bottom', 'left'].forEach(placement => {
      it(`renders tooltip with ${placement} placement if provided`, () => {
        const wrapper = mount(basicExample({ placement }));

        expect(wrapper.find(TooltipContainer)).toHaveProp('placement', placement);
      });
    });
  });
});
