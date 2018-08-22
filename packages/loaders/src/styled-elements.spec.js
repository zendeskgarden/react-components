/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { StyledCircle, StyledSVG, LoadingPlaceholder } from './styled-elements';

describe('styled-elements', () => {
  describe('StyledCircle', () => {
    it('renders correctly by default', () => {
      const wrapper = shallow(<StyledCircle transform="transform(2 3)" />);

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('StyledSVG', () => {
    it('renders correctly by default', () => {
      const wrapper = mount(<StyledSVG />);

      expect(wrapper).toMatchSnapshot();
    });

    it('renders color correctly if provided', () => {
      const wrapper = mount(<StyledSVG color="red" />);

      expect(wrapper).toMatchSnapshot();
    });

    it('renders font-size correctly if provided', () => {
      const wrapper = mount(<StyledSVG fontSize="15px" />);

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('LoadingPlaceholder', () => {
    it('renders correctly by default', () => {
      const wrapper = shallow(<LoadingPlaceholder />);

      expect(wrapper).toMatchSnapshot();
    });

    it('renders font-size correctly if provided', () => {
      const wrapper = shallow(<LoadingPlaceholder fontSize="15px" />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
