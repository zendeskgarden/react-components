/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { PALETTE } from '@zendeskgarden/react-theming';
import { render, renderRtl } from 'garden-test-utils';
import React from 'react';

import { StyledHint } from '../common/StyledHint';
import { StyledLabel } from '../common/StyledLabel';
import { StyledMessage } from '../common/StyledMessage';
import { StyledRangeInput } from './StyledRangeInput';

describe('StyledRangeInput', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledRangeInput />);

    expect(container.firstChild!.nodeName).toBe('INPUT');
    expect(container.firstChild).toHaveAttribute('type', 'range');
  });

  it('renders expected background-size styling', () => {
    const { container } = render(<StyledRangeInput $backgroundSize="50%" />);

    expect((container.firstChild as any).style.backgroundSize).toBe('50%');
  });

  it('renders disabled styling as expected', () => {
    const { container } = render(<StyledRangeInput disabled />);

    expect(container.firstChild).toHaveStyleRule('background-color', PALETTE.grey[600], {
      modifier: ':disabled::-webkit-slider-thumb'
    });
  });

  it('renders expected RTL styling', () => {
    const { container } = renderRtl(<StyledRangeInput />);

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
  });

  describe('Adjacency', () => {
    it('renders as expected after a label', () => {
      const { getByTestId } = render(
        <>
          <StyledLabel />
          <StyledRangeInput data-test-id="range" />
        </>
      );
      const range = getByTestId('range');

      expect(range).toHaveStyleRule('margin-top', '8px', {
        modifier: `${StyledLabel}:not([hidden])+&`
      });
    });

    it('renders as expected after a hint', () => {
      const { getByTestId } = render(
        <>
          <StyledHint />
          <StyledRangeInput data-test-id="range" />
        </>
      );
      const range = getByTestId('range');

      expect(range).toHaveStyleRule('margin-top', '8px', {
        modifier: `${StyledLabel}:not([hidden])+&`
      });
    });

    it('renders as expected after a message', () => {
      const { getByTestId } = render(
        <>
          <StyledMessage />
          <StyledRangeInput data-test-id="range" />
        </>
      );
      const range = getByTestId('range');

      expect(range).toHaveStyleRule('margin-top', '8px', {
        modifier: `${StyledLabel}:not([hidden])+&`
      });
    });
  });
});
