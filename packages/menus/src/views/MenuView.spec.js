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

    expect(wrapper).toMatchSnapshot();
  });

  it('renders RTL styling correctly', () => {
    const wrapper = mountWithTheme(<MenuView />, { rtl: true });

    expect(wrapper).toMatchSnapshot();
  });

  it('renders small styling correctly', () => {
    const wrapper = mountWithTheme(<MenuView small />);

    expect(wrapper).toMatchSnapshot();
  });

  describe('Renders', () => {
    it('renders animation styling correctly', () => {
      const wrapper = mountWithTheme(<MenuView animate />);

      expect(wrapper).toMatchSnapshot();
    });

    it('renders custom top animation correctly', () => {
      const wrapper = mountWithTheme(<MenuView animate placement="top" />);

      expect(wrapper).toMatchSnapshot();
    });

    it('renders custom left animation correctly', () => {
      const wrapper = mountWithTheme(<MenuView animate placement="left" />);

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Directional styling', () => {
    it('renders up styling if placement is provided', () => {
      [POPPER_PLACEMENTS.TOP, POPPER_PLACEMENTS.TOP_START, POPPER_PLACEMENTS.TOP_END].forEach(
        placement => {
          const wrapper = mountWithTheme(<MenuView placement={placement} />);

          expect(wrapper).toMatchSnapshot();
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

        expect(wrapper).toMatchSnapshot();
      });
    });

    it('renders left styling if placement is provided', () => {
      [POPPER_PLACEMENTS.LEFT, POPPER_PLACEMENTS.LEFT_START, POPPER_PLACEMENTS.LEFT_END].forEach(
        placement => {
          const wrapper = mountWithTheme(<MenuView placement={placement} />);

          expect(wrapper).toMatchSnapshot();
        }
      );
    });

    it('renders right styling if placement is provided', () => {
      [POPPER_PLACEMENTS.RIGHT, POPPER_PLACEMENTS.RIGHT_START, POPPER_PLACEMENTS.RIGHT_END].forEach(
        placement => {
          const wrapper = mountWithTheme(<MenuView placement={placement} />);

          expect(wrapper).toMatchSnapshot();
        }
      );
    });
  });

  it('renders hidden styling if provided', () => {
    const wrapper = mountWithTheme(<MenuView hidden />);

    expect(wrapper).toMatchSnapshot();
  });

  describe('Arrow', () => {
    it('does not render if arrow prop is not provided', () => {
      const wrapper = mountWithTheme(<MenuView />);

      expect(wrapper).toMatchSnapshot();
    });

    it('does not render if placement is not supported', () => {
      const wrapper = mountWithTheme(<MenuView arrow placement={POPPER_PLACEMENTS.RIGHT_START} />);

      expect(wrapper).toMatchSnapshot();
    });

    it('renders otherwise', () => {
      const wrapper = mountWithTheme(<MenuView arrow placement={POPPER_PLACEMENTS.RIGHT} />);

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Arrow placement', () => {
    it('renders correct arrow placement if provided', () => {
      [
        POPPER_PLACEMENTS.LEFT,
        POPPER_PLACEMENTS.TOP,
        POPPER_PLACEMENTS.TOP_START,
        POPPER_PLACEMENTS.TOP_END,
        POPPER_PLACEMENTS.RIGHT,
        POPPER_PLACEMENTS.BOTTOM,
        POPPER_PLACEMENTS.BOTTOM_START,
        POPPER_PLACEMENTS.BOTTOM_END
      ].forEach(placement => {
        const wrapper = mountWithTheme(<MenuView arrow placement={placement} />);

        expect(wrapper).toMatchSnapshot();
      });
    });
  });

  describe('Animation', () => {
    it('should be enabled if animation is provided', () => {
      const wrapper = mountWithTheme(<MenuView animate />);

      expect(wrapper).toMatchSnapshot();
    });

    it('should be disabled in animation is disabled', () => {
      const wrapper = mountWithTheme(<MenuView animate={false} />);

      expect(wrapper).toMatchSnapshot();
    });

    it('should be disabled if any top placement is provided', () => {
      [POPPER_PLACEMENTS.TOP, POPPER_PLACEMENTS.TOP_START, POPPER_PLACEMENTS.TOP_END].forEach(
        placement => {
          const wrapper = mountWithTheme(<MenuView placement={placement} />);

          expect(wrapper).toMatchSnapshot();
        }
      );
    });
  });
});
