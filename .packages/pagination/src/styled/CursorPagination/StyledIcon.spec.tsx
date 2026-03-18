/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import ChevronLeft from '@zendeskgarden/svg-icons/src/16/chevron-left-stroke.svg';
import { render, renderRtl } from 'garden-test-utils';
import React from 'react';

import { StyledIcon } from './StyledIcon';

describe('StyledIcon', () => {
  it('does not render styling to rotate icon', () => {
    const { container } = render(
      <StyledIcon $type="first">
        <ChevronLeft />
      </StyledIcon>
    );

    expect(container.firstChild).not.toHaveStyleRule('transform');
  });

  it('render styling to rotate icon in RTL', () => {
    const { container } = renderRtl(
      <StyledIcon $type="first">
        <ChevronLeft />
      </StyledIcon>
    );

    expect(container.firstChild).toHaveStyleRule('transform', 'rotate(180deg)');
  });

  it('renders icon types with the correct margin', () => {
    const types = ['first', 'previous', 'next', 'last'] as const;

    types.forEach(type => {
      const { container } = render(
        <StyledIcon $type={type}>
          <ChevronLeft />
        </StyledIcon>
      );

      if (type === 'first' || type === 'previous') {
        expect(container.firstChild).toHaveStyleRule('margin-right', '4px');
        expect(container.firstChild).not.toHaveStyleRule('margin-left');
      } else {
        expect(container.firstChild).toHaveStyleRule('margin-left', '4px');
        expect(container.firstChild).not.toHaveStyleRule('margin-right');
      }
    });
  });

  it('renders icon types with the correct margin in RTL', () => {
    const types = ['first', 'previous', 'next', 'last'] as const;

    types.forEach(type => {
      const { container } = renderRtl(
        <StyledIcon $type={type}>
          <ChevronLeft />
        </StyledIcon>
      );

      if (type === 'first' || type === 'previous') {
        expect(container.firstChild).toHaveStyleRule('margin-left', '4px');
        expect(container.firstChild).not.toHaveStyleRule('margin-right');
      } else {
        expect(container.firstChild).toHaveStyleRule('margin-right', '4px');
        expect(container.firstChild).not.toHaveStyleRule('margin-left');
      }
    });
  });
});
