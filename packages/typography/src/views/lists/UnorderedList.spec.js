/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import UnorderedList from './UnorderedList';

describe('UnorderedList', () => {
  it('applies <ul> rendering by default', () => {
    const { container } = render(<UnorderedList />);

    expect(container.querySelector('ul')).not.toBe(null);
  });

  it('applies correct styling with RTL layout', () => {
    const { container } = renderRtl(<UnorderedList />);

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
  });

  describe('size', () => {
    it('renders small styling if provided', () => {
      const { container } = render(
        <UnorderedList size="small">
          <UnorderedList.Item>item</UnorderedList.Item>
        </UnorderedList>
      );

      expect(container.querySelector('div')).toHaveStyleRule('padding', '0');
    });

    it('renders medium styling if provided', () => {
      const { container } = render(
        <UnorderedList size="medium">
          <UnorderedList.Item>item</UnorderedList.Item>
        </UnorderedList>
      );

      expect(container.querySelector('div')).toHaveStyleRule('padding', '2px 0');
    });

    it('renders large styling if provided', () => {
      const { container } = render(
        <UnorderedList size="large">
          <UnorderedList.Item>item</UnorderedList.Item>
        </UnorderedList>
      );

      expect(container.querySelector('div')).toHaveStyleRule('padding', '4px 0');
    });
  });

  describe('type', () => {
    it('renders disc styling if provided', () => {
      const { container } = render(<UnorderedList type="disc" />);

      expect(container.firstChild).toHaveStyleRule('list-style-type', 'disc');
    });

    it('renders circle styling if provided', () => {
      const { container } = render(<UnorderedList type="circle" />);

      expect(container.firstChild).toHaveStyleRule('list-style-type', 'circle');
    });

    it('renders square styling if provided', () => {
      const { container } = render(<UnorderedList type="square" />);

      expect(container.firstChild).toHaveStyleRule('list-style-type', 'square');
    });
  });
});
