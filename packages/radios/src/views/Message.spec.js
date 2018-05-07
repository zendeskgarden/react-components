import React from 'react';
import { shallow } from 'enzyme';
import { shallowWithTheme } from 'utils';

import Message from './Message';

describe('Message', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<Message />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders RTL styling', () => {
    const wrapper = shallowWithTheme(<Message />, { rtl: true });

    expect(wrapper).toMatchSnapshot();
  });

  describe('validation', () => {
    ['success', 'warning', 'error'].forEach(validation => {
      it(`renders ${validation} styling if provided`, () => {
        const wrapper = shallow(<Message validation={validation} />);

        expect(wrapper).toMatchSnapshot();
      });
    });
  });
});
