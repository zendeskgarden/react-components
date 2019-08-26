/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { POPPER_PLACEMENT } from '../Datepicker/utils/garden-placements';
import { StyledMenu } from './styled-menu';

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
      const placements: POPPER_PLACEMENT[] = ['top', 'top-start', 'top-end'];

      placements.forEach(placement => {
        const { container } = render(<StyledMenu placement={placement} />);

        expect(container.querySelector('ul')).toHaveClass('c-menu--up');
      });
    });

    it('renders down styling if placement is provided', () => {
      const placements: POPPER_PLACEMENT[] = ['bottom', 'bottom-start', 'bottom-end'];

      placements.forEach(placement => {
        const { container } = render(<StyledMenu placement={placement} />);

        expect(container.querySelector('ul')).toHaveClass('c-menu--down');
      });
    });

    it('renders left styling if placement is provided', () => {
      const placements: POPPER_PLACEMENT[] = ['left', 'left-start', 'left-end'];

      placements.forEach(placement => {
        const { container } = render(<StyledMenu placement={placement} />);

        expect(container.querySelector('ul')).toHaveClass('c-menu--left');
      });
    });

    it('renders right styling if placement is provided', () => {
      const placements: POPPER_PLACEMENT[] = ['right', 'right-start', 'right-end'];

      placements.forEach(placement => {
        const { container } = render(<StyledMenu placement={placement} />);

        expect(container.querySelector('ul')).toHaveClass('c-menu--right');
      });
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
      const { container } = render(<StyledMenu arrow placement="right" />);

      expect(container.querySelector('ul')).toHaveClass('c-arrow');
    });
  });

  describe('Arrow placement', () => {
    const arrowClasses: Record<string, string> = {
      left: 'c-arrow--r',
      'left-start': 'c-arrow--rt',
      'left-end': 'c-arrow--rb',
      top: 'c-arrow--b',
      'top-start': 'c-arrow--bl',
      'top-end': 'c-arrow--br',
      right: 'c-arrow--l',
      'right-start': 'c-arrow--lt',
      'right-end': 'c-arrow--lb',
      bottom: 'c-arrow--t',
      'bottom-start': 'c-arrow--tl',
      'bottom-end': 'c-arrow--tr'
    };

    it('renders correct arrow placement if provided', () => {
      Object.keys(arrowClasses).forEach((placement: any) => {
        const { container } = render(<StyledMenu arrow placement={placement} />);

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
