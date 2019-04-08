/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { mountWithTheme } from '@zendeskgarden/react-testing';
import { POPPER_PLACEMENTS } from '@zendeskgarden/react-tooltips';
import MenuView from './MenuView';

describe('MenuView', () => {
  it('renders default styling correctly', () => {
    const wrapper = mountWithTheme(<MenuView />);

    expect(wrapper.find('ul')).toHaveClassName('c-menu');
  });

  it('renders RTL styling correctly', () => {
    const wrapper = mountWithTheme(<MenuView />, { rtl: true });

    expect(wrapper.find('ul')).toHaveClassName('is-rtl');
  });

  it('renders small styling correctly', () => {
    const wrapper = mountWithTheme(<MenuView small />);

    expect(wrapper.find('ul')).toHaveClassName('c-menu--sm');
  });

  describe('Renders', () => {
    it('renders animation styling correctly', () => {
      const wrapper = mountWithTheme(<MenuView animate />);

      expect(wrapper.find('ul')).toHaveClassName('is-open');
    });
  });

  describe('Directional styling', () => {
    it('renders up styling if placement is provided', () => {
      [POPPER_PLACEMENTS.TOP, POPPER_PLACEMENTS.TOP_START, POPPER_PLACEMENTS.TOP_END].forEach(
        placement => {
          const wrapper = mountWithTheme(<MenuView placement={placement} />);

          expect(wrapper.find('ul')).toHaveClassName('c-menu--up');
        }
      );
    });

    it('renders down styling if placement is provided', () => {
      [
        POPPER_PLACEMENTS.BOTTOM,
        POPPER_PLACEMENTS.BOTTOM_START,
        POPPER_PLACEMENTS.BOTTOM_END
      ].forEach(placement => {
        const wrapper = mountWithTheme(<MenuView placement={placement} />);

        expect(wrapper.find('ul')).toHaveClassName('c-menu--down');
      });
    });

    it('renders left styling if placement is provided', () => {
      [POPPER_PLACEMENTS.LEFT, POPPER_PLACEMENTS.LEFT_START, POPPER_PLACEMENTS.LEFT_END].forEach(
        placement => {
          const wrapper = mountWithTheme(<MenuView placement={placement} />);

          expect(wrapper.find('ul')).toHaveClassName('c-menu--left');
        }
      );
    });

    it('renders right styling if placement is provided', () => {
      [POPPER_PLACEMENTS.RIGHT, POPPER_PLACEMENTS.RIGHT_START, POPPER_PLACEMENTS.RIGHT_END].forEach(
        placement => {
          const wrapper = mountWithTheme(<MenuView placement={placement} />);

          expect(wrapper.find('ul')).toHaveClassName('c-menu--right');
        }
      );
    });
  });

  it('renders hidden styling if provided', () => {
    const wrapper = mountWithTheme(<MenuView hidden />);

    expect(wrapper.find('ul')).toHaveClassName('is-hidden');
  });

  describe('Arrow', () => {
    it('does not render if arrow prop is not provided', () => {
      const wrapper = mountWithTheme(<MenuView />);

      expect(wrapper.find('ul')).not.toHaveClassName('c-arrow');
    });

    it('renders otherwise', () => {
      const wrapper = mountWithTheme(<MenuView arrow placement={POPPER_PLACEMENTS.RIGHT} />);

      expect(wrapper.find('ul')).toHaveClassName('c-arrow');
    });
  });

  describe('Arrow placement', () => {
    const arrowClasses = {
      [POPPER_PLACEMENTS.LEFT]: 'c-arrow--r',
      [POPPER_PLACEMENTS.LEFT_START]: 'c-arrow--rt',
      [POPPER_PLACEMENTS.LEFT_END]: 'c-arrow--rb',
      [POPPER_PLACEMENTS.TOP]: 'c-arrow--b',
      [POPPER_PLACEMENTS.TOP_START]: 'c-arrow--bl',
      [POPPER_PLACEMENTS.TOP_END]: 'c-arrow--br',
      [POPPER_PLACEMENTS.RIGHT]: 'c-arrow--l',
      [POPPER_PLACEMENTS.RIGHT_START]: 'c-arrow--lt',
      [POPPER_PLACEMENTS.RIGHT_END]: 'c-arrow--lb',
      [POPPER_PLACEMENTS.BOTTOM]: 'c-arrow--t',
      [POPPER_PLACEMENTS.BOTTOM_START]: 'c-arrow--tl',
      [POPPER_PLACEMENTS.BOTTOM_END]: 'c-arrow--tr'
    };

    it('renders correct arrow placement if provided', () => {
      Object.keys(arrowClasses).forEach(placement => {
        const wrapper = mountWithTheme(<MenuView arrow placement={placement} />);

        expect(wrapper.find('ul')).toHaveClassName(arrowClasses[placement]);
      });
    });
  });

  describe('Animation', () => {
    it('should be enabled if animation is provided', () => {
      const wrapper = mountWithTheme(<MenuView animate />);

      expect(wrapper.find('ul')).toHaveClassName('is-open');
    });

    it('should be disabled in animation is disabled', () => {
      const wrapper = mountWithTheme(<MenuView animate={false} />);

      expect(wrapper.find('ul')).not.toHaveClassName('is-open');
    });
  });
});
