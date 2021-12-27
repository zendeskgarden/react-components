/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import {
  StyledDotsCircleOne,
  StyledDotsCircleTwo,
  StyledDotsCircleThree,
  StyledSpinnerCircle,
  StyledSVG
} from '.';

describe('Loader styled-elements', () => {
  describe('DotsCircles', () => {
    it('applies correct cx coordinates', () => {
      const cx = [9, 40, 71];

      [
        StyledDotsCircleOne as any,
        StyledDotsCircleTwo as any,
        StyledDotsCircleThree as any
      ].forEach((Circle, index) => {
        const { getByTestId } = render(
          <svg>
            <Circle data-test-id={`circle-${index}`} />
          </svg>
        );

        expect(getByTestId(`circle-${index}`)).toHaveAttribute('cx', `${cx[index]}`);
      });
    });
  });

  describe('SpinnerCircle', () => {
    it('applies transform correctly', () => {
      const { getByTestId } = render(
        <svg>
          <StyledSpinnerCircle
            strokeWidthValue={25}
            dasharrayValue={30}
            transform="2"
            data-test-id="circle"
          />
        </svg>
      );

      const circle = getByTestId('circle');

      expect(circle).toHaveAttribute('stroke-width', '25');
      expect(circle).toHaveAttribute('stroke-dasharray', '30 250');
      expect(circle).toHaveAttribute('transform', '2');
    });
  });

  describe('StyledSVG', () => {
    it('applies font-size if provided', () => {
      const { container } = render(
        <StyledSVG width="0" height="0" fontSize="12px" dataGardenId="StyledSVG" />
      );

      expect(container.firstChild).toHaveStyleRule('font-size', '12px');
    });

    it('defaults font-size to inherit if not provided', () => {
      const { container } = render(<StyledSVG width="0" height="0" dataGardenId="StyledSVG" />);

      expect(container.firstChild).toHaveStyleRule('font-size', 'inherit');
    });

    it('applies color if provided', () => {
      const { container } = render(
        <StyledSVG width="0" height="0" color="red" dataGardenId="StyledSVG" />
      );

      expect(container.firstChild).toHaveStyleRule('color', 'red');
    });

    it('defaults color to inherit if not provided', () => {
      const { container } = render(<StyledSVG width="0" height="0" dataGardenId="StyledSVG" />);

      expect(container.firstChild).toHaveStyleRule('color', 'inherit');
    });

    it('applies width and height if provided', () => {
      const width = '2em';
      const height = '4em';

      const { container } = render(
        <StyledSVG width={width} height={height} dataGardenId="StyledSVG" />
      );

      expect(container.firstChild).toHaveAttribute('width', width);
      expect(container.firstChild).toHaveAttribute('height', height);
      expect(container.firstChild).toHaveAttribute('viewBox', `0 0 ${width} ${height}`);
    });
  });
});
