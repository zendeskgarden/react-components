import React from 'react';
import { mountWithTheme } from 'utils';

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

  beforeEach(() => {
    // Disabled due to styled-components theming
    console.warn = jest.fn(); // eslint-disable-line no-console
  });

  describe('Types', () => {
    it('renders light tooltip if provided', () => {
      const wrapper = mountWithTheme(basicExample({ type: 'light' }));

      expect(wrapper.find(LightTooltip)).toHaveLength(1);
    });

    it('renders dark tooltip if provided', () => {
      const wrapper = mountWithTheme(basicExample({ type: 'dark' }));

      expect(wrapper.find(TooltipView)).toHaveLength(1);
    });
  });

  describe('Placements', () => {
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
      it(`renders tooltip with ${placement} placement if provided`, () => {
        const wrapper = mountWithTheme(basicExample({ placement }));

        expect(wrapper.find(TooltipContainer)).toHaveProp('placement', placement);
      });
    });
  });
});
