import expect from 'test/expect';
import React from 'react';
import { render } from 'react-dom';
import View from '.';
import sinon from 'sinon';

describe('View', () => {
  describe('tooltips', () => {
    it('Hides its own tooltip when unmounting', () => {
      const instance = render(
        <View title="Some tooltip" />,
        document.createElement('div')
      );

      const spy = sinon.spy();

      const tooltipManagerStub = {
        show: () => 42,
        hide: spy
      };

      instance.context = {
        tooltips: tooltipManagerStub
      };

      instance.render().props.onMouseOver();

      instance.componentWillUnmount();

      expect(spy, 'was called with exactly', 42);
    });
  });
});
