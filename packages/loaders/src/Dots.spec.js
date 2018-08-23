/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallow } from 'enzyme';
import Dots from './Dots';
import { LoadingPlaceholder } from './styled-elements';

jest.useFakeTimers();

describe('Dots', () => {
  beforeEach(() => {
    clearTimeout.mockClear();
  });

  describe('Rendering delay', () => {
    it('renders LoadingPlacholder if delay has not been completed', () => {
      const wrapper = shallow(<Dots />);

      expect(wrapper.find(LoadingPlaceholder)).toExist();
    });

    it('does not render LoadingPlacholder if delay has completed', () => {
      const wrapper = shallow(<Dots />);

      jest.runOnlyPendingTimers();
      expect(wrapper.find(LoadingPlaceholder)).not.toExist();
    });

    it('clears delay timeout as component is unmounted', () => {
      const wrapper = shallow(<Dots />);

      wrapper.unmount();
      expect(clearTimeout).toHaveBeenCalledTimes(1);
    });

    it('does not render LoadingPlaceholder if delayMS is 0', () => {
      const wrapper = shallow(<Dots delayMS={0} />);

      expect(wrapper.find(LoadingPlaceholder)).not.toExist();
    });
  });
});
