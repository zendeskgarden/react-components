/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { StyledIcon } from './StyledIcon';
import TestIcon from '@zendeskgarden/svg-icons/src/16/gear-stroke.svg';

describe('StyledIcon', () => {
  it('renders the expected element', () => {
    const { container } = render(
      <StyledIcon>
        <img alt="" />
      </StyledIcon>
    );

    expect(container.firstChild!.nodeName).toBe('IMG');
  });

  it('successfully renders child icon', () => {
    const { getByTestId } = render(
      <StyledIcon>
        <TestIcon data-test-id="icon" />
      </StyledIcon>
    );

    expect(getByTestId('icon')).not.toBeNull();
  });

  it('renders rotated styling if provided', () => {
    const { container } = render(
      <StyledIcon $isRotated>
        <TestIcon />
      </StyledIcon>
    );

    expect(container.firstChild).toHaveStyleRule('transform', 'rotate(+180deg)');
  });

  it('renders expected RTL styling', () => {
    const { container } = renderRtl(
      <StyledIcon $isRotated>
        <TestIcon />
      </StyledIcon>
    );

    expect(container.firstChild).toHaveStyleRule('transform', 'rotate(-180deg)');
  });

  describe('Invalid', () => {
    const consoleError = console.error;

    beforeEach(() => {
      console.error = jest.fn();
    });

    afterEach(() => {
      console.error = consoleError;
    });

    it('throws if rendered with no child', () => {
      expect(() => {
        render(<StyledIcon />);
      }).toThrow();
    });

    it('throws if rendered with more than one child', () => {
      expect(() => {
        render(
          <StyledIcon>
            <TestIcon />
            <TestIcon />
          </StyledIcon>
        );
      }).toThrow();
    });
  });
});
