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
    it('renders an SVG icon', () => {
      const { container } = render(<Anchor isExternal />);

      expect(container.querySelector('svg')).not.toBeNull();
    });

    it('renders an SVG icon with custom/translated alt text, when custom/translated alt text is provided', () => {
      const { getByText } = render(
        <Anchor isExternal externalIconTextLabel="label">
          link
        </Anchor>
      );

      const anchor = getByText('link');

      expect(anchor.querySelector('svg')).toHaveAttribute('aria-label', 'label');
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
