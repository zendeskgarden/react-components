/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { StyledOrderedList, StyledUnorderedList } from './StyledList';

describe('StyledOrderedList', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledOrderedList />);

    expect(container.firstChild!.nodeName).toBe('OL');
  });

  it('renders expected RTL direction', () => {
    const { container } = renderRtl(<StyledOrderedList />);

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
  });

  describe('type', () => {
    it('renders a decimal list style', () => {
      const { container } = render(<StyledOrderedList $listType="decimal" />);

      expect(container.firstChild).toHaveStyleRule('list-style-type', 'decimal');
    });

    it('renders a decimal (leading zero) list style', () => {
      const { container } = render(<StyledOrderedList $listType="decimal-leading-zero" />);

      expect(container.firstChild).toHaveStyleRule('list-style-type', 'decimal-leading-zero');
    });

    it('renders a lowercase alpha list style', () => {
      const { container } = render(<StyledOrderedList $listType="lower-alpha" />);

      expect(container.firstChild).toHaveStyleRule('list-style-type', 'lower-alpha');
    });

    it('renders a lowercase roman list style', () => {
      const { container } = render(<StyledOrderedList $listType="lower-roman" />);

      expect(container.firstChild).toHaveStyleRule('list-style-type', 'lower-roman');
    });

    it('renders a uppercase alpha list style', () => {
      const { container } = render(<StyledOrderedList $listType="upper-alpha" />);

      expect(container.firstChild).toHaveStyleRule('list-style-type', 'upper-alpha');
    });

    it('renders a uppercase roman list style', () => {
      const { container } = render(<StyledOrderedList $listType="upper-roman" />);

      expect(container.firstChild).toHaveStyleRule('list-style-type', 'upper-roman');
    });
  });
});

describe('StyledUnorderedList', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledUnorderedList />);

    expect(container.firstChild!.nodeName).toBe('UL');
  });

  it('renders expected RTL direction', () => {
    const { container } = renderRtl(<StyledUnorderedList />);

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
  });

  describe('type', () => {
    it('renders a circle list style', () => {
      const { container } = render(<StyledUnorderedList $listType="circle" />);

      expect(container.firstChild).toHaveStyleRule('list-style-type', 'circle');
    });

    it('renders a disc list style', () => {
      const { container } = render(<StyledUnorderedList $listType="disc" />);

      expect(container.firstChild).toHaveStyleRule('list-style-type', 'disc');
    });

    it('renders a square list style', () => {
      const { container } = render(<StyledUnorderedList $listType="square" />);

      expect(container.firstChild).toHaveStyleRule('list-style-type', 'square');
    });
  });
});
