import React from 'react';
import { shallow } from 'enzyme';
import { shallowWithTheme } from 'utils';
import ModalView from './ModalView';

describe('ModalView', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<ModalView />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders RTL styling if provided', () => {
    const wrapper = shallowWithTheme(<ModalView />, { rtl: true });

    expect(wrapper).toMatchSnapshot();
  });

  it('renders large styling if provided', () => {
    const wrapper = shallow(<ModalView large />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders animate styling if provided', () => {
    const wrapper = shallow(<ModalView animate />);

    expect(wrapper).toMatchSnapshot();
  });
});
