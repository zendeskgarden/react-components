/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, fireEvent } from 'garden-test-utils';
import TooltipContainer from './TooltipContainer';

const BasicExample = props => (
  <TooltipContainer
    id="custom-test-id"
    trigger={({ getTriggerProps, ref }) => (
      <div {...getTriggerProps({ 'data-test-id': 'trigger', ref })}>trigger</div>
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

jest.useFakeTimers();

describe('TooltipContainer', () => {
  beforeEach(() => {
    clearTimeout.mockClear();
  });

  describe('getTriggerProps', () => {
    it('should have tabIndex of 0', () => {
      const { getByTestId } = render(<BasicExample />);

      expect(getByTestId('trigger')).toHaveAttribute('tabIndex', '0');
    });

    describe('onFocus()', () => {
      it('should not display tooltip immediately when focused', () => {
        const { getByTestId, queryByTestId } = render(<BasicExample />);

        fireEvent.focus(getByTestId('trigger'));
        expect(queryByTestId('tooltip')).not.toBeInTheDocument();
      });

      it('should display tooltip after delay when focused', () => {
        const { getByTestId } = render(<BasicExample />);

        fireEvent.focus(getByTestId('trigger'));

        jest.runOnlyPendingTimers();
        expect(getByTestId('tooltip')).toBeInTheDocument();
      });
    });

    describe('onBlur()', () => {
      it('should close tooltip immediately after blur', () => {
        const { getByTestId, queryByTestId } = render(<BasicExample />);

        fireEvent.focus(getByTestId('trigger'));
        fireEvent.blur(getByTestId('trigger'));
        jest.runOnlyPendingTimers();

        expect(queryByTestId('tooltip')).not.toBeInTheDocument();
      });
    });

    describe('onMouseEnter()', () => {
      it('should not display tooltip immediately when clicked', () => {
        const { getByTestId, queryByTestId } = render(<BasicExample />);

        fireEvent.mouseEnter(getByTestId('trigger'));

        expect(queryByTestId('tooltip')).not.toBeInTheDocument();
      });

      it('should display tooltip after delay when clicked', () => {
        const { getByTestId } = render(<BasicExample />);

        fireEvent.mouseEnter(getByTestId('trigger'));
        jest.runOnlyPendingTimers();

        expect(getByTestId('tooltip')).toBeInTheDocument();
      });

      it('should clear open timeout if unmounted during interval', () => {
        const { getByTestId, unmount } = render(<BasicExample />);

        fireEvent.mouseEnter(getByTestId('trigger'));
        unmount();

        // 3 total clearTimeouts occur during this action
        expect(clearTimeout).toHaveBeenCalledTimes(3);
      });
    });

    describe('onMouseLeave()', () => {
      it('should not hide tooltip immediately when mouseleaved', () => {
        const { getByTestId } = render(<BasicExample />);

        fireEvent.mouseEnter(getByTestId('trigger'));
        jest.runOnlyPendingTimers();

        expect(getByTestId('tooltip')).toBeInTheDocument();

        fireEvent.mouseLeave(getByTestId('trigger'));

        expect(getByTestId('tooltip')).toBeInTheDocument();
      });

      it('should hide tooltip aften delay when mouseleaved', () => {
        const { getByTestId, queryByTestId } = render(<BasicExample />);

        fireEvent.mouseEnter(getByTestId('trigger'));
        fireEvent.mouseLeave(getByTestId('trigger'));
        jest.runOnlyPendingTimers();

        expect(queryByTestId('tooltip')).not.toBeInTheDocument();
      });
    });
  });

  describe('getTooltipProps', () => {
    it('should not close tooltip if mouseenter during close delay period', () => {
      const { getByTestId } = render(<BasicExample />);

      fireEvent.mouseEnter(getByTestId('trigger'));
      jest.runOnlyPendingTimers();
      fireEvent.mouseLeave(getByTestId('trigger'));
      fireEvent.mouseEnter(getByTestId('tooltip'));
      jest.runOnlyPendingTimers();

      expect(getByTestId('tooltip')).toBeInTheDocument();
    });

    it('should close tooltip if mouseleaveed', () => {
      const { getByTestId, queryByTestId } = render(<BasicExample />);

      fireEvent.mouseEnter(getByTestId('trigger'));
      jest.runOnlyPendingTimers();
      fireEvent.mouseEnter(getByTestId('tooltip'));
      fireEvent.mouseLeave(getByTestId('tooltip'));
      jest.runOnlyPendingTimers();

      expect(queryByTestId('tooltip')).not.toBeInTheDocument();
    });

    it('should leave tooltip open if focused', () => {
      const { getByTestId } = render(<BasicExample />);

      fireEvent.mouseEnter(getByTestId('trigger'));
      jest.runOnlyPendingTimers();
      fireEvent.blur(getByTestId('trigger'));
      fireEvent.focus(getByTestId('tooltip'));
      jest.runOnlyPendingTimers();

      expect(getByTestId('tooltip')).toBeInTheDocument();
    });

    it('should close tooltip if blurred', () => {
      const { getByTestId, queryByTestId } = render(<BasicExample />);

      fireEvent.mouseEnter(getByTestId('trigger'));
      jest.runOnlyPendingTimers();
      fireEvent.blur(getByTestId('trigger'));
      fireEvent.focus(getByTestId('tooltip'));
      jest.runOnlyPendingTimers();

      fireEvent.blur(getByTestId('tooltip'));
      jest.runOnlyPendingTimers();

      expect(queryByTestId('tooltip')).not.toBeInTheDocument();
    });

    it('should render tooltip within portal if appendToBody is provided', () => {
      const { getByTestId } = render(<BasicExample appendToBody />);

      fireEvent.focus(getByTestId('trigger'));

      jest.runOnlyPendingTimers();
      expect(getByTestId('tooltip').parentElement.parentElement).toEqual(document.body);
    });
  });

  describe('zIndex', () => {
    it('should not apply zIndex if none is provided', () => {
      const { getByTestId } = render(<BasicExample isVisible />);
      const tooltipWrapper = getByTestId('tooltip').parentElement;

      expect(tooltipWrapper).not.toHaveStyleRule('z-index');
    });

    it('should apply zIndex if provided', () => {
      const { getByTestId } = render(<BasicExample zIndex={3000} isVisible />);
      const tooltipWrapper = getByTestId('tooltip').parentElement;

      expect(tooltipWrapper).toHaveStyleRule('z-index', '3000');
    });
  });
});
