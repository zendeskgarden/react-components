import React from 'react';
import { shallow } from 'enzyme';
import Alert from './Alert';

describe('Alert', () => {
  describe('validation', () => {
    it('should render success styling correctly', () => {
      const wrapper = shallow(<Alert type="success" />);

      expect(wrapper).toMatchSnapshot();
    });

    it('should render warning styling correctly', () => {
      const wrapper = shallow(<Alert type="warning" />);

      expect(wrapper).toMatchSnapshot();
    });

    it('should render error styling correctly', () => {
      const wrapper = shallow(<Alert type="error" />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
