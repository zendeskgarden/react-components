import React from 'react';
import { shallow } from 'enzyme';
import { shallowWithTheme } from 'utils';
import TooltipView from './TooltipView';

describe('TooltipView', () => {
  it('renders default styling correctly', () => {
    const wrapper = shallow(<TooltipView />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders RTL styling correctly', () => {
    const wrapper = shallowWithTheme(<TooltipView />, { rtl: true });

    expect(wrapper).toMatchSnapshot();
  });

  describe('Sizing', () => {
    ['medium', 'large', 'extra-large'].forEach(size => {
      it(`renders ${size} size correctly`, () => {
        const wrapper = shallow(<TooltipView size={size} />);

        expect(wrapper).toMatchSnapshot();
      });
    });
  });

  describe('Placement', () => {
    ['top', 'right', 'bottom', 'left'].forEach(placement => {
      it(`renders ${placement} placement correctly`, () => {
        const wrapper = shallow(<TooltipView placement={placement} />);

        expect(wrapper).toMatchSnapshot();
      });
    });

    it('does not render arrow styling if disabled', () => {
      const wrapper = shallow(<TooltipView arrow={false} placement="top" />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
