/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, act } from 'garden-test-utils';
import mockDate from 'mockdate';
import { Dots } from './Dots';

jest.useFakeTimers({ legacyFakeTimers: true });

const DEFAULT_DATE = new Date(2019, 1, 5, 1, 1, 1);

describe('Dots', () => {
  beforeEach(() => {
    (clearTimeout as jest.Mock).mockClear();
    (global as any).cancelAnimationFrame = jest.fn();
    (global as any).requestAnimationFrame = jest.fn();
    (global as any).document.elementFromPoint = jest.fn();
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
    it('relies on svg transition attribute if css svg animation is not supported', () => {
      const { container } = render(<Dots data-test-id="dots" />);

      act(() => {
        jest.runOnlyPendingTimers();
      });

      expect(container.querySelector('g')).toMatchInlineSnapshot(`
        .c0 {
          -webkit-animation: kVOdef 1250ms linear infinite;
          animation: kVOdef 1250ms linear infinite;
        }

        .c1 {
          -webkit-animation: idDvaf 1250ms linear infinite;
          animation: idDvaf 1250ms linear infinite;
        }

        .c2 {
          -webkit-animation: bDxIcz 1250ms linear infinite;
          animation: bDxIcz 1250ms linear infinite;
        }

        <g
          fill="currentColor"
        >
          <circle
            class=" c0"
            cx="9"
            cy="36"
            r="9"
            transform=""
          />
          <circle
            class=" c1"
            cx="40"
            cy="36"
            r="9"
            transform=""
          />
          <circle
            class=" c2"
            cx="71"
            cy="36"
            r="9"
            transform=""
          />
        </g>
      `);
    });

    it('updates animation after request animation frame', () => {
      const { container } = render(<Dots data-test-id="dots" />);

      act(() => {
        jest.runOnlyPendingTimers();
      });

      expect(container.querySelector('g')).toMatchInlineSnapshot(`
        .c0 {
          -webkit-animation: kVOdef 1250ms linear infinite;
          animation: kVOdef 1250ms linear infinite;
        }

        .c1 {
          -webkit-animation: idDvaf 1250ms linear infinite;
          animation: idDvaf 1250ms linear infinite;
        }

        .c2 {
          -webkit-animation: bDxIcz 1250ms linear infinite;
          animation: bDxIcz 1250ms linear infinite;
        }

        <g
          fill="currentColor"
        >
          <circle
            class=" c0"
            cx="9"
            cy="36"
            r="9"
            transform=""
          />
          <circle
            class=" c1"
            cx="40"
            cy="36"
            r="9"
            transform=""
          />
          <circle
            class=" c2"
            cx="71"
            cy="36"
            r="9"
            transform=""
          />
        </g>
      `);

      act(() => {
        // move time forward 1 second
        mockDate.set(DEFAULT_DATE.setSeconds(2));
        (requestAnimationFrame as jest.Mock).mock.calls[0][0]();
      });

      expect(container.querySelector('g')).toMatchInlineSnapshot(`
        .c0 {
          -webkit-animation: kVOdef 1250ms linear infinite;
          animation: kVOdef 1250ms linear infinite;
        }

        .c1 {
          -webkit-animation: idDvaf 1250ms linear infinite;
          animation: idDvaf 1250ms linear infinite;
        }

        .c2 {
          -webkit-animation: bDxIcz 1250ms linear infinite;
          animation: bDxIcz 1250ms linear infinite;
        }

        <g
          fill="currentColor"
        >
          <circle
            class=" c0"
            cx="9"
            cy="36"
            r="9"
            transform=""
          />
          <circle
            class=" c1"
            cx="40"
            cy="36"
            r="9"
            transform=""
          />
          <circle
            class=" c2"
            cx="71"
            cy="36"
            r="9"
            transform=""
          />
        </g>
      `);
    });

    it('updates animation after request animation frame with slower duration', () => {
      const { container } = render(<Dots duration={1125} />);

      act(() => {
        jest.runOnlyPendingTimers();
      });

      expect(container.querySelector('g')).toMatchInlineSnapshot(`
        .c0 {
          -webkit-animation: kVOdef 1125ms linear infinite;
          animation: kVOdef 1125ms linear infinite;
        }

        .c1 {
          -webkit-animation: idDvaf 1125ms linear infinite;
          animation: idDvaf 1125ms linear infinite;
        }

        .c2 {
          -webkit-animation: bDxIcz 1125ms linear infinite;
          animation: bDxIcz 1125ms linear infinite;
        }

        <g
          fill="currentColor"
        >
          <circle
            class=" c0"
            cx="9"
            cy="36"
            r="9"
            transform=""
          />
          <circle
            class=" c1"
            cx="40"
            cy="36"
            r="9"
            transform=""
          />
          <circle
            class=" c2"
            cx="71"
            cy="36"
            r="9"
            transform=""
          />
        </g>
      `);

      act(() => {
        // move time forward 1 second
        mockDate.set(DEFAULT_DATE.setSeconds(2));
        (requestAnimationFrame as jest.Mock).mock.calls[0][0]();
      });

      expect(container.querySelector('g')).toMatchInlineSnapshot(`
        .c0 {
          -webkit-animation: kVOdef 1125ms linear infinite;
          animation: kVOdef 1125ms linear infinite;
        }

        .c1 {
          -webkit-animation: idDvaf 1125ms linear infinite;
          animation: idDvaf 1125ms linear infinite;
        }

        .c2 {
          -webkit-animation: bDxIcz 1125ms linear infinite;
          animation: bDxIcz 1125ms linear infinite;
        }

        <g
          fill="currentColor"
        >
          <circle
            class=" c0"
            cx="9"
            cy="36"
            r="9"
            transform=""
          />
          <circle
            class=" c1"
            cx="40"
            cy="36"
            r="9"
            transform=""
          />
          <circle
            class=" c2"
            cx="71"
            cy="36"
            r="9"
            transform=""
          />
        </g>
      `);
    });

    it('updates animation after request animation frame with increased duration', () => {
      const { container } = render(<Dots duration={1375} />);

      act(() => {
        jest.runOnlyPendingTimers();
      });

      expect(container.querySelector('g')).toMatchInlineSnapshot(`
        .c0 {
          -webkit-animation: kVOdef 1375ms linear infinite;
          animation: kVOdef 1375ms linear infinite;
        }

        .c1 {
          -webkit-animation: idDvaf 1375ms linear infinite;
          animation: idDvaf 1375ms linear infinite;
        }

        .c2 {
          -webkit-animation: bDxIcz 1375ms linear infinite;
          animation: bDxIcz 1375ms linear infinite;
        }

        <g
          fill="currentColor"
        >
          <circle
            class=" c0"
            cx="9"
            cy="36"
            r="9"
            transform=""
          />
          <circle
            class=" c1"
            cx="40"
            cy="36"
            r="9"
            transform=""
          />
          <circle
            class=" c2"
            cx="71"
            cy="36"
            r="9"
            transform=""
          />
        </g>
      `);

      act(() => {
        // move time forward 1 second
        mockDate.set(DEFAULT_DATE.setSeconds(2));
        (requestAnimationFrame as jest.Mock).mock.calls[0][0]();
      });

      expect(container.querySelector('g')).toMatchInlineSnapshot(`
        .c0 {
          -webkit-animation: kVOdef 1375ms linear infinite;
          animation: kVOdef 1375ms linear infinite;
        }

        .c1 {
          -webkit-animation: idDvaf 1375ms linear infinite;
          animation: idDvaf 1375ms linear infinite;
        }

        .c2 {
          -webkit-animation: bDxIcz 1375ms linear infinite;
          animation: bDxIcz 1375ms linear infinite;
        }

        <g
          fill="currentColor"
        >
          <circle
            class=" c0"
            cx="9"
            cy="36"
            r="9"
            transform=""
          />
          <circle
            class=" c1"
            cx="40"
            cy="36"
            r="9"
            transform=""
          />
          <circle
            class=" c2"
            cx="71"
            cy="36"
            r="9"
            transform=""
          />
        </g>
      `);
    });
  });

  it('applies correct accessibility values', () => {
    const { getByTestId } = render(<Dots data-test-id="dots" />);

    act(() => {
      jest.runOnlyPendingTimers();
    });

    const dots = getByTestId('dots');

    expect(dots).toHaveAttribute('role', 'img');
  });
});
