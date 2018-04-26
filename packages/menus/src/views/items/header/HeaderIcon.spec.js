import React from 'react';
import { shallow } from 'enzyme';
import HeaderIcon from './HeaderIcon';

describe('HeaderIcon', () => {
  it('renders default styling', () => {
    const wrapper = shallow(
      <HeaderIcon>
        <svg />
      </HeaderIcon>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
