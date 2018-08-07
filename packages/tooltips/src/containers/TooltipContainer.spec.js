/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { mountWithTheme } from '@zendeskgarden/react-testing';
import { Portal } from 'react-portal';
import TooltipContainer from './TooltipContainer';
import {
  GARDEN_PLACEMENTS,
  getPopperPlacement,
  getRtlPopperPlacement
} from '../utils/gardenPlacements';

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

describe('TooltipContainer', () => {
  let wrapper;

  const BasicExample = props => (
    <TooltipContainer
      id="custom-test-id"
      trigger={({ getTriggerProps }) => (
        <div {...getTriggerProps({ 'data-test-id': 'trigger' })}>trigger</div>
      )}
      {...props}
    >
      {({ getTooltipProps, placement }) => (
        <div {...getTooltipProps({ 'data-test-id': 'tooltip', 'data-placement': placement })}>
          tooltip
        </div>
      )}
    </TooltipContainer>
  );

  const findTooltip = providedWrapper => {
    return providedWrapper.find('[data-test-id="tooltip"]');
  };

  const findTrigger = providedWrapper => {
    return providedWrapper.find('[data-test-id="trigger"]');
  };

  beforeEach(() => {
    clearTimeout.mockClear();

    wrapper = mountWithTheme(<BasicExample />);
  });

  describe('getTriggerProps', () => {
    it('should have tabIndex of 0', () => {
      expect(findTrigger(wrapper)).toHaveProp('tabIndex', 0);
    });

    describe('aria-describedby', () => {
      it('should reference tooltip id when visible', () => {
        findTrigger(wrapper).simulate('focus');
        jest.runOnlyPendingTimers();
        wrapper.update();
        expect(findTrigger(wrapper)).toHaveProp('aria-describedby', 'custom-test-id--tooltip');
      });
    });

    describe('onFocus()', () => {
      it('should not display tooltip immediately when focused', () => {
        findTrigger(wrapper).simulate('focus');
        expect(findTooltip(wrapper).parent()).toHaveProp('aria-hidden', true);
      });

      it('should display tooltip after delay when focused', () => {
        findTrigger(wrapper).simulate('focus');

        jest.runOnlyPendingTimers();
        wrapper.update();
        expect(findTooltip(wrapper).parent()).toHaveProp('aria-hidden', false);
      });
    });

    describe('onBlur()', () => {
      it('should close tooltip immediately after blur', () => {
        findTrigger(wrapper).simulate('focus');
        findTrigger(wrapper).simulate('blur');

        jest.runOnlyPendingTimers();
        wrapper.update();
        expect(findTooltip(wrapper).parent()).toHaveProp('aria-hidden', true);
      });
    });

    describe('onMouseEnter()', () => {
      it('should not display tooltip immediately when clicked', () => {
        findTrigger(wrapper).simulate('mouseenter');
        expect(findTooltip(wrapper).parent()).toHaveProp('aria-hidden', true);
      });

      it('should display tooltip after delay when clicked', () => {
        findTrigger(wrapper).simulate('mouseenter');

        jest.runOnlyPendingTimers();
        wrapper.update();
        expect(findTooltip(wrapper).parent()).toHaveProp('aria-hidden', false);
      });

      it('should clear open timeout if unmounted during interval', () => {
        findTrigger(wrapper).simulate('mouseenter');
        wrapper.unmount();
        // 3 total clearTimeouts occur during this action
        expect(clearTimeout).toHaveBeenCalledTimes(3);
      });
    });

    describe('onMouseLeave()', () => {
      it('should not hide tooltip immediately when mouseleaved', () => {
        findTrigger(wrapper).simulate('mouseenter');
        jest.runOnlyPendingTimers();
        wrapper.update();
        expect(findTooltip(wrapper).parent()).toHaveProp('aria-hidden', false);

        findTrigger(wrapper).simulate('mouseleave');
        wrapper.update();
        expect(findTooltip(wrapper).parent()).toHaveProp('aria-hidden', false);
      });

      it('should hide tooltip aften delay when mouseleaved', () => {
        findTrigger(wrapper).simulate('mouseenter');
        findTrigger(wrapper).simulate('mouseleave');

        jest.runOnlyPendingTimers();
        wrapper.update();
        expect(findTooltip(wrapper).parent()).toHaveProp('aria-hidden', true);
      });
    });
  });

  describe('getTooltipProps', () => {
    it('should have accessibility ID applied', () => {
      findTrigger(wrapper).simulate('mouseover');
      jest.runOnlyPendingTimers();
      wrapper.update();

      expect(findTooltip(wrapper)).toHaveProp('id', 'custom-test-id--tooltip');
    });

    it('should not close tooltip if mouseenter during close delay period', () => {
      findTrigger(wrapper).simulate('mouseenter');
      findTrigger(wrapper).simulate('mouseleave');
      findTooltip(wrapper).simulate('mouseenter');

      jest.runOnlyPendingTimers();
      wrapper.update();
      expect(findTooltip(wrapper).parent()).toHaveProp('aria-hidden', false);
    });

    it('should close tooltip if mouseleaveed', () => {
      findTrigger(wrapper).simulate('mouseenter');
      findTrigger(wrapper).simulate('mouseleave');
      findTooltip(wrapper).simulate('mouseenter');
      findTooltip(wrapper).simulate('mouseleave');

      jest.runOnlyPendingTimers();
      wrapper.update();
      expect(findTooltip(wrapper).parent()).toHaveProp('aria-hidden', true);
    });

    it('should render tooltip within portal if appendToBody is provided', () => {
      wrapper = mountWithTheme(
        <TooltipContainer
          appendToBody
          id="custom-test-id"
          trigger={({ getTriggerProps }) => (
            <div {...getTriggerProps({ 'data-test-id': 'trigger' })}>trigger</div>
          )}
        >
          {({ getTooltipProps }) => (
            <div {...getTooltipProps({ 'data-test-id': 'tooltip' })}>tooltip</div>
          )}
        </TooltipContainer>
      );

      findTrigger(wrapper).simulate('focus');

      jest.runOnlyPendingTimers();
      wrapper.update();
      expect(wrapper.contains(Portal)).toBe(true);
    });
  });

  describe('zIndex', () => {
    it('should not apply zIndex if none is provided', () => {
      wrapper = mountWithTheme(<BasicExample isVisible />);
      const tooltipWrapper = findTooltip(wrapper).parent();

      expect(tooltipWrapper).not.toHaveStyle('z-index');
    });

    it('should apply zIndex if provided', () => {
      wrapper = mountWithTheme(<BasicExample zIndex={3000} isVisible />);
      const tooltipWrapper = findTooltip(wrapper).parent();

      expect(tooltipWrapper).toHaveStyleRule('z-index', '3000');
    });
  });

  describe('placement', () => {
    describe('with LTR locale', () => {
      it('applies placements as provided', () => {
        Object.values(GARDEN_PLACEMENTS).forEach(providedPlacement => {
          wrapper = mountWithTheme(
            <TooltipContainer
              placement={providedPlacement}
              id="custom-test-id"
              trigger={({ getTriggerProps }) => (
                <div {...getTriggerProps({ 'data-test-id': 'trigger' })}>trigger</div>
              )}
            >
              {({ getTooltipProps, placement }) => (
                <div
                  {...getTooltipProps({ 'data-test-id': 'tooltip', 'data-placement': placement })}
                >
                  tooltip
                </div>
              )}
            </TooltipContainer>
          );

          expect(wrapper.find('Popper')).toHaveProp(
            'placement',
            getPopperPlacement(providedPlacement)
          );
        });
      });
    });

    describe('with RTL locale', () => {
      it('applies translated placements', () => {
        Object.values(GARDEN_PLACEMENTS).forEach(providedPlacement => {
          wrapper = mountWithTheme(
            <TooltipContainer
              placement={providedPlacement}
              id="custom-test-id"
              trigger={({ getTriggerProps }) => (
                <div {...getTriggerProps({ 'data-test-id': 'trigger' })}>trigger</div>
              )}
            >
              {({ getTooltipProps, placement }) => (
                <div
                  {...getTooltipProps({ 'data-test-id': 'tooltip', 'data-placement': placement })}
                >
                  tooltip
                </div>
              )}
            </TooltipContainer>,
            { rtl: true }
          );

          expect(wrapper.find('Popper')).toHaveProp(
            'placement',
            getRtlPopperPlacement(providedPlacement)
          );
        });
      });
    });
  });
});
