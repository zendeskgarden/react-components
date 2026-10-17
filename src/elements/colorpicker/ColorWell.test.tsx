/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { act, fireEvent, screen } from '@testing-library/react';
import { vi } from 'vitest';

import { RTL_THEME, render } from '../../test/render';
import { ColorWell } from './ColorWell';

describe('Saturation', () => {
  it('initializes thumb on position respective to the current saturation and lightness', () => {
    render(
      <ColorWell
        hue={184.44444444444443}
        saturation={53.99999999999999}
        lightness={19.607843137254903}
      />
    );

    const thumb = screen.getByTestId('colorwell-thumb');

    expect(thumb.style.top).toBe('69.80392156862746%');
    expect(thumb.style.left).toBe('70.12987012987013%');
  });

  it('initializes thumb on position respective to the current saturation and lightness in RTL', () => {
    render(
      <ColorWell
        hue={184.44444444444443}
        saturation={53.99999999999999}
        lightness={19.607843137254903}
      />,
      {
        theme: RTL_THEME
      }
    );

    const thumb = screen.getByTestId('colorwell-thumb');

    expect(thumb.style.top).toBe('69.80392156862746%');
    expect(thumb.style.left).toBe('29.870129870129873%');
  });

  describe('mouse interaction', () => {
    let originalGetBoundingClientRect: any;

    beforeEach(() => {
      originalGetBoundingClientRect = Element.prototype.getBoundingClientRect;
      Element.prototype.getBoundingClientRect = vi.fn(() => {
        return {
          bottom: 510,
          height: 234,
          left: 384.5,
          right: 696.5,
          top: 276,
          width: 312,
          x: 384.5,
          y: 276,
          toJSON: () => {
            return undefined;
          }
        };
      });
    });

    afterEach(() => {
      Element.prototype.getBoundingClientRect = originalGetBoundingClientRect;
    });

    it('updates the color on mouse drag and stops listening on mouse up', () => {
      vi.useFakeTimers();

      const onChange = vi.fn();

      render(<ColorWell hue={184} saturation={54} lightness={20} onChange={onChange} />);

      const well = screen.getByTestId('colorwell');
      const thumb = screen.getByTestId('colorwell-thumb');

      fireEvent.mouseDown(well, { clientX: 500, clientY: 300 });

      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange.mock.lastCall![0].s).toBeCloseTo(0.3702, 3);
      expect(onChange.mock.lastCall![0].v).toBeCloseTo(0.8974, 3);

      fireEvent.mouseMove(window, { clientX: 600, clientY: 400 });
      act(() => {
        vi.advanceTimersByTime(60);
      });

      expect(onChange).toHaveBeenCalledTimes(2);
      expect(onChange.mock.lastCall![0].s).toBeCloseTo(0.6907, 3);
      expect(onChange.mock.lastCall![0].v).toBeCloseTo(0.4701, 3);
      expect(parseFloat(thumb.style.left)).toBeCloseTo(69.07, 1);
      expect(parseFloat(thumb.style.top)).toBeCloseTo(52.99, 1);

      fireEvent.mouseUp(window);
      fireEvent.mouseMove(window, { clientX: 650, clientY: 450 });
      act(() => {
        vi.advanceTimersByTime(60);
      });

      expect(onChange).toHaveBeenCalledTimes(2);

      vi.useRealTimers();
    });
  });
});
