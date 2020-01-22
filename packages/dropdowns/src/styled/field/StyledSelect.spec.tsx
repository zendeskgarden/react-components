/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { VALIDATION } from '../';
import { StyledSelect } from './StyledSelect';

describe('StyledSelect', () => {
  it('renders default styling', () => {
    const { container } = render(<StyledSelect />);

    expect(container.firstChild).toHaveClass('c-txt__input');
    expect(container.firstChild).toHaveClass('c-txt__input--select');
  });

  it('renders RTL styling', () => {
    const { container } = renderRtl(<StyledSelect />);

    expect(container.firstChild).toHaveClass('is-rtl');
  });

  it('renders small styling', () => {
    const { container } = render(<StyledSelect isCompact />);

    expect(container.firstChild).toHaveClass('c-txt__input--sm');
  });

  it('renders tag styling', () => {
    const { container } = render(<StyledSelect tagLayout />);

    expect(container.firstChild).toHaveClass('c-txt__input--tag');
  });

  it('renders media layout styling', () => {
    const { container } = render(<StyledSelect mediaLayout />);

    expect(container.firstChild).toHaveClass('c-txt__input--media');
  });

  it('renders bare styling', () => {
    const { container } = render(<StyledSelect isBare />);

    expect(container.firstChild).toHaveClass('c-txt__input--bare');
  });

  it('renders focus inset styling', () => {
    const { container } = render(<StyledSelect focusInset />);

    expect(container.firstChild).toHaveClass('c-txt__input--focus-inset');
  });

  describe('Interaction states', () => {
    it('renders disabled inset styling', () => {
      const { container } = render(<StyledSelect disabled />);

      expect(container.firstChild).toHaveClass('is-disabled');
    });

    it('renders focused inset styling', () => {
      const { container } = render(<StyledSelect isFocused />);

      expect(container.firstChild).toHaveClass('is-focused');
    });

    it('renders hovered inset styling', () => {
      const { container } = render(<StyledSelect isHovered />);

      expect(container.firstChild).toHaveClass('is-hovered');
    });

    it('renders open inset styling', () => {
      const { container } = render(<StyledSelect isOpen />);

      expect(container.firstChild).toHaveClass('is-open');
    });
  });

  describe('Aria roles', () => {
    it('applies aria-invalid role if warning validation is provided', () => {
      const { container } = render(<StyledSelect validation={VALIDATION.WARNING} />);

      expect(container.firstChild).toHaveAttribute('aria-invalid', 'true');
    });

    it('applies aria-invalid role if error validation is provided', () => {
      const { container } = render(<StyledSelect validation={VALIDATION.ERROR} />);

      expect(container.firstChild).toHaveAttribute('aria-invalid', 'true');
    });

    it('does not apply aria-invalid role if success validation is provided', () => {
      const { container } = render(<StyledSelect validation={VALIDATION.SUCCESS} />);

      expect(container.firstChild).toHaveAttribute('aria-invalid', 'false');
    });
  });

  describe('Validaton states', () => {
    [VALIDATION.SUCCESS, VALIDATION.ERROR, VALIDATION.WARNING].forEach(validation => {
      it(`renders correct ${validation} validation styling`, () => {
        const { container } = render(<StyledSelect validation={validation} />);

        expect(container.firstChild).toHaveClass(`c-txt__input--${validation}`);
      });
    });
  });
});
