/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { mountWithTheme } from '@zendeskgarden/react-testing';

import BreadcrumbContainer from './BreadcrumbContainer';

describe('BreadcrumbContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mountWithTheme(
      <BreadcrumbContainer>
        {({ getContainerProps }) => <div {...getContainerProps({ 'data-test-id': 'container' })} />}
      </BreadcrumbContainer>
    );
  });

  const findContainer = enzymeWrapper => enzymeWrapper.find('[data-test-id="container"]');

  describe('getContainerProps()', () => {
    it('applies correct accessibility attributes', () => {
      const container = findContainer(wrapper);

      expect(container).toHaveProp('role', 'navigation');
      expect(container).toHaveProp('aria-label', 'Breadcrumb navigation');
    });
  });
});
