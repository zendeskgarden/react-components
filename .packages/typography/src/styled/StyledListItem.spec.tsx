/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { render } from 'garden-test-utils';
import React from 'react';

import { StyledOrderedListItem as StyledListItem } from './StyledListItem';

describe('StyledListItem', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledListItem />);

    expect(container.firstChild!.nodeName).toBe('LI');
  });

  describe('StyledListItemContent', () => {
    it('renders small spacing', () => {
      const { container } = render(<StyledListItem $space="small" />);

      expect(container.firstChild).not.toHaveStyleRule('padding-top');
    });

    it('renders medium spacing', () => {
      const { container } = render(<StyledListItem $space="medium" />);

      expect(container.firstChild).toHaveStyleRule('padding-top', '4px');
    });

    it('renders large spacing', () => {
      const { container } = render(<StyledListItem $space="large" />);

      expect(container.firstChild).toHaveStyleRule('padding-top', '8px');
    });
  });
});
