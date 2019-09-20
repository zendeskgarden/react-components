/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, act } from 'garden-test-utils';
import mockDate from 'mockdate';
import Dots from './Dots';

jest.useFakeTimers();

const DEFAULT_DATE = new Date(2019, 1, 5, 1, 1, 1);

describe('Dots', () => {
  beforeEach(() => {
    clearTimeout.mockClear();
    global.cancelAnimationFrame = jest.fn();
    global.requestAnimationFrame = jest.fn();
    global.document.elementFromPoint = jest.fn();
    mockDate.set(DEFAULT_DATE);
  });

  afterEach(() => {
    mockDate.reset();
  });

  describe('Loading delay', () => {
    it('hides loader for initial delay', () => {
      const { queryByTestId } = render(<Dots data-test-id="dots" />);

      expect(queryByTestId('dots')).toBeNull();
    });

    it('shows loader after initial delay', () => {
      const { queryByTestId } = render(<Dots data-test-id="dots" />);

      act(() => {
        jest.runOnlyPendingTimers();
      });

      expect(queryByTestId('dots')).not.toBeNull();
    });
  });

  describe('Animation', () => {
    it('updates animation after request animation frame', () => {
      const { container } = render(<Dots data-test-id="dots" />);

      act(() => {
        jest.runOnlyPendingTimers();
      });

      expect(container.querySelector('g')).toMatchInlineSnapshot(`
        .c0 {
          -webkit-animation: dMEWJg 1250ms linear infinite;
          animation: dMEWJg 1250ms linear infinite;
        }

        .c1 {
          -webkit-animation: hiIgQS 1250ms linear infinite;
          animation: hiIgQS 1250ms linear infinite;
        }

        .c2 {
          -webkit-animation: jfCXbz 1250ms linear infinite;
          animation: jfCXbz 1250ms linear infinite;
        }

        <g
          fill="currentColor"
        >
          <circle
            class="c0"
            cx="9"
            cy="36"
            r="9"
          />
          <circle
            class="c1"
            cx="40"
            cy="36"
            r="9"
          />
          <circle
            class="c2"
            cx="71"
            cy="36"
            r="9"
          />
        </g>
      `);

      act(() => {
        // move time forward 1 second
        mockDate.set(DEFAULT_DATE.setSeconds(2));
        requestAnimationFrame.mock.calls[0][0]();
      });

      expect(container.querySelector('g')).toMatchInlineSnapshot(`
        <g
          fill="currentColor"
        >
          <circle
            class="styled-elements__DotsCircle-sc-19dhio6-0 styled-elements__DotsOneCircle-sc-19dhio6-1 iNpQBP"
            cx="9"
            cy="36"
            r="9"
          />
          <circle
            class="styled-elements__DotsCircle-sc-19dhio6-0 styled-elements__DotsTwoCircle-sc-19dhio6-2 bbNrxJ"
            cx="40"
            cy="36"
            r="9"
          />
          <circle
            class="styled-elements__DotsCircle-sc-19dhio6-0 styled-elements__DotsThreeCircle-sc-19dhio6-3 jkSUgg"
            cx="71"
            cy="36"
            r="9"
          />
        </g>
      `);
    });

    it('updates animation after request animation frame with negative bound velocity', () => {
      const { container } = render(<Dots velocity={-1.1} />);

      act(() => {
        jest.runOnlyPendingTimers();
      });

      expect(container.querySelector('g')).toMatchInlineSnapshot(`
        .c0 {
          -webkit-animation: dMEWJg 1250ms linear infinite;
          animation: dMEWJg 1250ms linear infinite;
        }

        .c1 {
          -webkit-animation: hiIgQS 1250ms linear infinite;
          animation: hiIgQS 1250ms linear infinite;
        }

        .c2 {
          -webkit-animation: jfCXbz 1250ms linear infinite;
          animation: jfCXbz 1250ms linear infinite;
        }

        <g
          fill="currentColor"
        >
          <circle
            class="c0"
            cx="9"
            cy="36"
            r="9"
          />
          <circle
            class="c1"
            cx="40"
            cy="36"
            r="9"
          />
          <circle
            class="c2"
            cx="71"
            cy="36"
            r="9"
          />
        </g>
      `);

      act(() => {
        // move time forward 1 second
        mockDate.set(DEFAULT_DATE.setSeconds(2));
        requestAnimationFrame.mock.calls[0][0]();
      });

      expect(container.querySelector('g')).toMatchInlineSnapshot(`
        <g
          fill="currentColor"
        >
          <circle
            class="styled-elements__DotsCircle-sc-19dhio6-0 styled-elements__DotsOneCircle-sc-19dhio6-1 iNpQBP"
            cx="9"
            cy="36"
            r="9"
          />
          <circle
            class="styled-elements__DotsCircle-sc-19dhio6-0 styled-elements__DotsTwoCircle-sc-19dhio6-2 bbNrxJ"
            cx="40"
            cy="36"
            r="9"
          />
          <circle
            class="styled-elements__DotsCircle-sc-19dhio6-0 styled-elements__DotsThreeCircle-sc-19dhio6-3 jkSUgg"
            cx="71"
            cy="36"
            r="9"
          />
        </g>
      `);
    });

    it('updates animation after request animation frame with positive bound velocity', () => {
      const { container } = render(<Dots velocity={1.1} />);

      act(() => {
        jest.runOnlyPendingTimers();
      });

      expect(container.querySelector('g')).toMatchInlineSnapshot(`
        .c0 {
          -webkit-animation: dMEWJg 1250ms linear infinite;
          animation: dMEWJg 1250ms linear infinite;
        }

        .c1 {
          -webkit-animation: hiIgQS 1250ms linear infinite;
          animation: hiIgQS 1250ms linear infinite;
        }

        .c2 {
          -webkit-animation: jfCXbz 1250ms linear infinite;
          animation: jfCXbz 1250ms linear infinite;
        }

        <g
          fill="currentColor"
        >
          <circle
            class="c0"
            cx="9"
            cy="36"
            r="9"
          />
          <circle
            class="c1"
            cx="40"
            cy="36"
            r="9"
          />
          <circle
            class="c2"
            cx="71"
            cy="36"
            r="9"
          />
        </g>
      `);

      act(() => {
        // move time forward 1 second
        mockDate.set(DEFAULT_DATE.setSeconds(2));
        requestAnimationFrame.mock.calls[0][0]();
      });

      expect(container.querySelector('g')).toMatchInlineSnapshot(`
        <g
          fill="currentColor"
        >
          <circle
            class="styled-elements__DotsCircle-sc-19dhio6-0 styled-elements__DotsOneCircle-sc-19dhio6-1 iNpQBP"
            cx="9"
            cy="36"
            r="9"
          />
          <circle
            class="styled-elements__DotsCircle-sc-19dhio6-0 styled-elements__DotsTwoCircle-sc-19dhio6-2 bbNrxJ"
            cx="40"
            cy="36"
            r="9"
          />
          <circle
            class="styled-elements__DotsCircle-sc-19dhio6-0 styled-elements__DotsThreeCircle-sc-19dhio6-3 jkSUgg"
            cx="71"
            cy="36"
            r="9"
          />
        </g>
      `);
    });
  });
});
