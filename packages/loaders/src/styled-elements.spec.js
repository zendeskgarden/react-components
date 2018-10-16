/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { DotsCircle, StyledSVG, LoadingPlaceholder, SpinnerCircle } from './styled-elements';

describe('styled-elements', () => {
  describe('DotsCircle', () => {
    it('renders correctly by default', () => {
      const wrapper = shallow(<DotsCircle transform="transform(2 3)" />);

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('SpinnerCircle', () => {
    it('renders correctly by default', () => {
      const wrapper = shallow(
        <SpinnerCircle transform="transform(2 3)" dasharrayValue="90" strokeWidthValue="90" />
      );

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('StyledSVG', () => {
    const COMPONENT_ID = 'loaders.foo';

    it('renders correctly by default', () => {
      const wrapper = mount(<StyledSVG dataGardenId={COMPONENT_ID} width="80" height="72" />);

      expect(wrapper).toMatchSnapshot();
    });

    it('renders color correctly if provided', () => {
      const wrapper = mount(
        <StyledSVG dataGardenId={COMPONENT_ID} width="80" height="72" color="red" />
      );

      expect(wrapper).toMatchSnapshot();
    });

    it('renders font-size correctly if provided', () => {
      const wrapper = mount(
        <StyledSVG dataGardenId={COMPONENT_ID} width="80" height="72" fontSize="15px" />
      );

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
