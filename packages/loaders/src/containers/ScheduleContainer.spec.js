/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { mount } from 'enzyme';
import ScheduleContainer from './ScheduleContainer';
import { LoadingPlaceholder } from '../styled-elements';

jest.useFakeTimers();

describe('ScheduleContainer', () => {
  let wrapper;
  let performAnimationFrameSpy;

  const basicExample = ({ delayMS } = {}) => (
    <ScheduleContainer delayMS={delayMS}>{() => <p>Hello</p>}</ScheduleContainer>
  );

  beforeEach(() => {
    performAnimationFrameSpy = jest.spyOn(ScheduleContainer.prototype, 'performAnimationFrame');
  });

  afterEach(() => {
    performAnimationFrameSpy.mockClear();
  });

  describe('componentDidMount()', () => {
    it('sets up requestAnimationFrame', () => {
      // performAnimationFrameSpy.mockReset();
      wrapper = mount(basicExample());
      jest.runOnlyPendingTimers();
      expect(performAnimationFrameSpy).toHaveBeenCalled();
    });
  });

  describe('Rendering delay', () => {
    it('renders LoadingPlacholder if delay has not been completed', () => {
      wrapper = mount(basicExample());

      expect(wrapper.find(LoadingPlaceholder)).toExist();
    });

    it('does not render LoadingPlacholder if delay has completed', () => {
      wrapper = mount(basicExample());

      jest.runOnlyPendingTimers();
      wrapper.update();
      expect(wrapper.find(LoadingPlaceholder)).not.toExist();
    });

    it('clears delay timeout as component is unmounted', () => {
      wrapper = mount(basicExample());

      wrapper.unmount();
      expect(clearTimeout).toHaveBeenCalledTimes(1);
    });

    it('does not render LoadingPlaceholder if delayMS is 0', () => {
      wrapper = mount(basicExample());
      jest.runOnlyPendingTimers();
      wrapper.update();

      expect(wrapper.find(LoadingPlaceholder)).not.toExist();
    });
  });
});
