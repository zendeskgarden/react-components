import React from 'react';
import { shallow } from 'enzyme';
import Avatar from './Avatar';

describe('Avatar', () => {
  const defaultImage = <img src="test" />;

  it('applies default styling correctly', () => {
    const wrapper = shallow(<Avatar>{defaultImage}</Avatar>);

    expect(wrapper).toMatchSnapshot();
  });

  it('applies system styling correclty if provided', () => {
    const wrapper = shallow(<Avatar system>{defaultImage}</Avatar>);

    expect(wrapper).toMatchSnapshot();
  });

  describe('Sizes', () => {
    ['small', 'large'].forEach(size => {
      it(`applies ${size} correctly if provided`, () => {
        const wrapper = shallow(<Avatar size={size}>{defaultImage}</Avatar>);

        expect(wrapper).toMatchSnapshot();
      });
    });
  });

  describe('States', () => {
    it('applies active styling if provided', () => {
      const wrapper = shallow(<Avatar isActive>{defaultImage}</Avatar>);

      expect(wrapper).toMatchSnapshot();
    });

    it('applies in styling if provided', () => {
      const wrapper = shallow(<Avatar isIn>{defaultImage}</Avatar>);

      expect(wrapper).toMatchSnapshot();
    });

    it('applies out styling if provided', () => {
      const wrapper = shallow(<Avatar isOut>{defaultImage}</Avatar>);

      expect(wrapper).toMatchSnapshot();
    });

    it('applies borderless styling if provided', () => {
      const wrapper = shallow(<Avatar isBorderless>{defaultImage}</Avatar>);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
