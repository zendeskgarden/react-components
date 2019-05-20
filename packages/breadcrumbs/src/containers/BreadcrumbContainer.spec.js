/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';

import BreadcrumbContainer from './BreadcrumbContainer';

const BasicExample = () => (
  <BreadcrumbContainer>
    {({ getContainerProps, getCurrentPageProps }) => (
      <div {...getContainerProps({ 'data-test-id': 'container' })}>
        <a {...getCurrentPageProps({ 'data-test-id': 'anchor' })}>Test</a>
      </div>
    )}
  </BreadcrumbContainer>
);

describe('BreadcrumbContainer', () => {
  describe('getContainerProps()', () => {
    it('applies correct accessibility attributes', () => {
      const { getByTestId } = render(<BasicExample />);
      const container = getByTestId('container');

      expect(container).toHaveAttribute('role', 'navigation');
      expect(container).toHaveAttribute('aria-label', 'Breadcrumb navigation');
    });
  });

  describe('getCurrentPageProps()', () => {
    it('applies correct accessibility attributes', () => {
      const { getByTestId } = render(<BasicExample />);

      expect(getByTestId('anchor')).toHaveAttribute('aria-current', 'page');
    });
  });
});
