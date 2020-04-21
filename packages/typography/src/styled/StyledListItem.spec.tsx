/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import {
  StyledOrderedListItem as StyledListItem,
  StyledOrderedListItemContent as StyledListItemContent
} from './StyledListItem';

describe('StyledListItem', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledListItem />);

    expect(container.firstChild!.nodeName).toBe('LI');
  });

  describe('StyledListItemContent', () => {
    it('renders small spacing', () => {
      const { container } = render(<StyledListItemContent space="small" />);

      expect(container.firstChild).toHaveStyleRule('padding', '0');
    });

    it('renders medium spacing', () => {
      const { container } = render(<StyledListItemContent space="medium" />);

      expect(container.firstChild).toHaveStyleRule('padding', '2px 0');
    });

    it('renders large spacing', () => {
      const { container } = render(<StyledListItemContent space="large" />);

      expect(container.firstChild).toHaveStyleRule('padding', '4px 0');
    });
  });
});
