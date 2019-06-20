/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { POPPER_PLACEMENT } from '../../utils/garden-placements';
import { StyledMenu } from './StyledMenu';

describe('StyledMenuView', () => {
  it('renders default styling correctly', () => {
    const { container } = render(<StyledMenu />);

    expect(container.querySelector('ul')).toHaveClass('c-menu');
  });

  it('renders RTL styling correctly', () => {
    const { container } = renderRtl(<StyledMenu />);

    expect(container.querySelector('ul')).toHaveClass('is-rtl');
  });

  it('renders small styling correctly', () => {
    const { container } = render(<StyledMenu small />);

    expect(container.querySelector('ul')).toHaveClass('c-menu--sm');
  });

  describe('Renders', () => {
    it('renders animation styling correctly', () => {
      const { container } = render(<StyledMenu animate />);

      expect(container.querySelector('ul')).toHaveClass('is-open');
    });
  });

  describe('Directional styling', () => {
    it('renders up styling if placement is provided', () => {
      [POPPER_PLACEMENT.TOP, POPPER_PLACEMENT.TOP_START, POPPER_PLACEMENT.TOP_END].forEach(
        placement => {
          const { container } = render(<StyledMenu placement={placement} />);

          expect(container.querySelector('ul')).toHaveClass('c-menu--up');
        }
      );
    });

    it('renders down styling if placement is provided', () => {
      [POPPER_PLACEMENT.BOTTOM, POPPER_PLACEMENT.BOTTOM_START, POPPER_PLACEMENT.BOTTOM_END].forEach(
        placement => {
          const { container } = render(<StyledMenu placement={placement} />);

          expect(container.querySelector('ul')).toHaveClass('c-menu--down');
        }
      );
    });

    it('renders left styling if placement is provided', () => {
      [POPPER_PLACEMENT.LEFT, POPPER_PLACEMENT.LEFT_START, POPPER_PLACEMENT.LEFT_END].forEach(
        placement => {
          const { container } = render(<StyledMenu placement={placement} />);

          expect(container.querySelector('ul')).toHaveClass('c-menu--left');
        }
      );
    });

    it('renders right styling if placement is provided', () => {
      [POPPER_PLACEMENT.RIGHT, POPPER_PLACEMENT.RIGHT_START, POPPER_PLACEMENT.RIGHT_END].forEach(
        placement => {
          const { container } = render(<StyledMenu placement={placement} />);

          expect(container.querySelector('ul')).toHaveClass('c-menu--right');
        }
      );
    });
  });

  it('renders hidden styling if provided', () => {
    const { container } = render(<StyledMenu hidden />);

    expect(container.querySelector('ul')).toHaveClass('is-hidden');
  });

  describe('Arrow', () => {
    it('does not render if arrow prop is not provided', () => {
      const { container } = render(<StyledMenu />);

      expect(container.querySelector('ul')).not.toHaveClass('c-arrow');
    });

    it('renders otherwise', () => {
      const { container } = render(<StyledMenu arrow placement={POPPER_PLACEMENT.RIGHT} />);

      expect(container.querySelector('ul')).toHaveClass('c-arrow');
    });
  });

  describe('Arrow placement', () => {
    const arrowClasses = {
      [POPPER_PLACEMENT.LEFT]: 'c-arrow--r',
      [POPPER_PLACEMENT.LEFT_START]: 'c-arrow--rt',
      [POPPER_PLACEMENT.LEFT_END]: 'c-arrow--rb',
      [POPPER_PLACEMENT.TOP]: 'c-arrow--b',
      [POPPER_PLACEMENT.TOP_START]: 'c-arrow--bl',
      [POPPER_PLACEMENT.TOP_END]: 'c-arrow--br',
      [POPPER_PLACEMENT.RIGHT]: 'c-arrow--l',
      [POPPER_PLACEMENT.RIGHT_START]: 'c-arrow--lt',
      [POPPER_PLACEMENT.RIGHT_END]: 'c-arrow--lb',
      [POPPER_PLACEMENT.BOTTOM]: 'c-arrow--t',
      [POPPER_PLACEMENT.BOTTOM_START]: 'c-arrow--tl',
      [POPPER_PLACEMENT.BOTTOM_END]: 'c-arrow--tr'
    };

    it('renders correct arrow placement if provided', () => {
      Object.keys(arrowClasses).forEach((placement: any) => {
        const { container } = render(<StyledMenu arrow placement={placement} />);

        // @ts-ignore
        expect(container.querySelector('ul')).toHaveClass(arrowClasses[placement]);
      });
    });
  });

  describe('Animation', () => {
    it('should be enabled if animation is provided', () => {
      const { container } = render(<StyledMenu animate />);

      expect(container.querySelector('ul')).toHaveClass('is-open');
    });

    it('should be disabled in animation is disabled', () => {
      const { container } = render(<StyledMenu animate={false} />);

      expect(container.querySelector('ul')).not.toHaveClass('is-open');
    });
  });
});
