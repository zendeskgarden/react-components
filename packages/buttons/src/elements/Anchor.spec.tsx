/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { Anchor } from './Anchor';

describe('Anchor', () => {
  describe('External', () => {
    it('renders an SVG icon with default alt text', () => {
      const { getByTestId } = render(<Anchor isExternal data-test-id="external-link" />);

      const anchor = getByTestId('external-link');
      const icon = anchor.querySelector('svg');

      expect(icon).not.toBeNull();
      expect(icon).toHaveAttribute('aria-label', '(opens in a new tab)');
    });

    it('renders an SVG icon with custom/translated alt text, when custom/translated alt text is provided', () => {
      const { getByTestId } = render(
        <Anchor isExternal externalIconLabel="label" data-test-id="external-link">
          link
        </Anchor>
      );

      const anchor = getByTestId('external-link');
      const icon = anchor.querySelector('svg');

      expect(icon).toHaveAttribute('aria-label', 'label');
    });

    it('renders link security attributes', () => {
      const { getByText } = render(<Anchor isExternal>link</Anchor>);

      const anchor = getByText('link');

      expect(anchor).toHaveAttribute('target', '_blank');
      expect(anchor).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('renders custom link attributes if provided', () => {
      const { getByText } = render(
        <Anchor isExternal rel="bookmark" target="_parent">
          link
        </Anchor>
      );

      const anchor = getByText('link');

      expect(anchor).toHaveAttribute('target', '_parent');
      expect(anchor).toHaveAttribute('rel', 'bookmark');
    });
  });
});
