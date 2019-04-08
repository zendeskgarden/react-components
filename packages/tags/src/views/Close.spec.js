/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallow } from 'enzyme';
import Close from './Close';

describe('Close', () => {
  it('renders default close styling', () => {
    const wrapper = shallow(<Close />);

    expect(wrapper).toHaveClassName('c-tag__remove');
  });

  it('renders hovered styling correctly', () => {
    const wrapper = shallow(<Close hovered />);

    expect(wrapper).toHaveClassName('is-hovered');
  });
});
