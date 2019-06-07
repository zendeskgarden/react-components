/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';

import Tag from './Tag';

describe('Tag', () => {
  it('renders default styling', () => {
    const { container } = render(<Tag />);

    expect(container.firstChild).toHaveClass('c-tag');
  });

  it('renders RTL styling if provided', () => {
    const { container } = renderRtl(<Tag />);

    expect(container.firstChild).toHaveClass('is-rtl');
  });

  it('renders pill styling if provided', () => {
    const { container } = render(<Tag pill />);

    expect(container.firstChild).toHaveClass('c-tag--pill');
  });

  it('renders round styling if provided', () => {
    const { container } = render(<Tag round />);

    expect(container.firstChild).toHaveClass('c-tag--round');
  });

  describe('size', () => {
    it('renders small styling if provided', () => {
      const { container } = render(<Tag size="small" />);

      expect(container.firstChild).toHaveClass('c-tag--sm');
    });

    it('renders large styling if provided', () => {
      const { container } = render(<Tag size="large" />);

      expect(container.firstChild).toHaveClass('c-tag--lg');
    });
  });

  describe('state', () => {
    it('renders focused styling if provided', () => {
      const { container } = render(<Tag focused />);

      expect(container.firstChild).toHaveClass('is-focused');
    });

    it('renders hovered styling if provided', () => {
      const { container } = render(<Tag hovered />);

      expect(container.firstChild).toHaveClass('is-hovered');
    });
  });

  describe('visual types', () => {
    it('renders grey styling if provided', () => {
      const { container } = render(<Tag type="grey" />);

      expect(container.firstChild).toHaveClass('c-tag--grey');
    });

    it('renders blue styling if provided', () => {
      const { container } = render(<Tag type="blue" />);

      expect(container.firstChild).toHaveClass('c-tag--blue');
    });

    it('renders kale styling if provided', () => {
      const { container } = render(<Tag type="kale" />);

      expect(container.firstChild).toHaveClass('c-tag--kale');
    });

    it('renders red styling if provided', () => {
      const { container } = render(<Tag type="red" />);

      expect(container.firstChild).toHaveClass('c-tag--red');
    });

    it('renders green styling if provided', () => {
      const { container } = render(<Tag type="green" />);

      expect(container.firstChild).toHaveClass('c-tag--green');
    });

    it('renders yellow styling if provided', () => {
      const { container } = render(<Tag type="yellow" />);

      expect(container.firstChild).toHaveClass('c-tag--yellow');
    });

    it('renders fuschia styling if provided', () => {
      const { container } = render(<Tag type="fuschia" />);

      expect(container.firstChild).toHaveClass('c-tag--fuschia');
    });

    it('renders pink styling if provided', () => {
      const { container } = render(<Tag type="pink" />);

      expect(container.firstChild).toHaveClass('c-tag--pink');
    });

    it('renders crimson styling if provided', () => {
      const { container } = render(<Tag type="crimson" />);

      expect(container.firstChild).toHaveClass('c-tag--crimson');
    });

    it('renders orange styling if provided', () => {
      const { container } = render(<Tag type="orange" />);

      expect(container.firstChild).toHaveClass('c-tag--orange');
    });

    it('renders lemon styling if provided', () => {
      const { container } = render(<Tag type="lemon" />);

      expect(container.firstChild).toHaveClass('c-tag--lemon');
    });

    it('renders lime styling if provided', () => {
      const { container } = render(<Tag type="lime" />);

      expect(container.firstChild).toHaveClass('c-tag--lime');
    });

    it('renders mint styling if provided', () => {
      const { container } = render(<Tag type="mint" />);

      expect(container.firstChild).toHaveClass('c-tag--mint');
    });

    it('renders teal styling if provided', () => {
      const { container } = render(<Tag type="teal" />);

      expect(container.firstChild).toHaveClass('c-tag--teal');
    });

    it('renders azure styling if provided', () => {
      const { container } = render(<Tag type="azure" />);

      expect(container.firstChild).toHaveClass('c-tag--azure');
    });

    it('renders royal styling if provided', () => {
      const { container } = render(<Tag type="royal" />);

      expect(container.firstChild).toHaveClass('c-tag--royal');
    });

    it('renders purple styling if provided', () => {
      const { container } = render(<Tag type="purple" />);

      expect(container.firstChild).toHaveClass('c-tag--purple');
    });
  });
});
