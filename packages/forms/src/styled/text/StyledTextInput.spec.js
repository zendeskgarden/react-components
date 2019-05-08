/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import StyledTextInput from './StyledTextInput';

describe('StyledTextInput', () => {
  it('renders default styling correctly', () => {
    const { container } = render(<StyledTextInput />);

    expect(container.firstChild).toHaveClass('c-txt__input');
  });

  it('renders small styling correctly', () => {
    const { container } = render(<StyledTextInput small />);

    expect(container.firstChild).toHaveClass('c-txt__input--sm');
  });

  it('renders tag layout styling correctly', () => {
    const { container } = render(<StyledTextInput tagLayout />);

    expect(container.firstChild).toHaveClass('c-txt__input--tag');
  });

  it('renders select layout styling correctly', () => {
    const { container } = render(<StyledTextInput select />);

    expect(container.firstChild).toHaveClass('c-txt__input--select');
  });

  it('renders media layout styling correctly', () => {
    const { container } = render(<StyledTextInput mediaLayout />);

    expect(container.firstChild).toHaveClass('c-txt__input--media');
  });

  it('renders bare styling correctly', () => {
    const { container } = render(<StyledTextInput bare />);

    expect(container.firstChild).toHaveClass('c-txt__input--bare');
  });

  it('renders focus inset styling correctly', () => {
    const { container } = render(<StyledTextInput focusInset />);

    expect(container.firstChild).toHaveClass('c-txt__input--focus-inset');
  });

  it('renders disabled styling correctly', () => {
    const { container } = render(<StyledTextInput disabled />);

    expect(container.firstChild).toHaveClass('is-disabled');
  });

  it('renders focused styling correctly', () => {
    const { container } = render(<StyledTextInput focused />);

    expect(container.firstChild).toHaveClass('is-focused');
  });

  it('renders hovered styling correctly', () => {
    const { container } = render(<StyledTextInput hovered />);

    expect(container.firstChild).toHaveClass('is-hovered');
  });

  it('renders open styling correctly', () => {
    const { container } = render(<StyledTextInput open />);

    expect(container.firstChild).toHaveClass('is-open');
  });

  ['success', 'warning', 'error'].forEach(validation => {
    it(`renders ${validation} validation styling correctly`, () => {
      const { container } = render(<StyledTextInput validation={validation} />);

      expect(container.firstChild).toHaveClass(`c-txt__input--${validation}`);
    });
  });

  it('renders RTL styling correctly', () => {
    const { container } = renderRtl(<StyledTextInput />);

    expect(container.firstChild).toHaveClass('is-rtl');
  });
});
