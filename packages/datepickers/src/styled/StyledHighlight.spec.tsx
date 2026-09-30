/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { render, renderRtl } from 'garden-test-utils';
import { StyledHighlight } from './StyledHighlight';

const TINT = 'rgba(31,115,183,0.08)';

describe('StyledHighlight', () => {
  it('fills its cell, behind the day number', () => {
    const { container } = render(<StyledHighlight />);

    expect(container.firstChild).toHaveStyleRule('position', 'absolute');
    expect(container.firstChild).toHaveStyleRule('inset', '0');
  });

  it('paints a flat tint for a highlighted middle day', () => {
    const { container } = render(<StyledHighlight $isHighlighted />);

    expect(container.firstChild).toHaveStyleRule('background-color', TINT);
  });

  it('does not round a highlighted middle day', () => {
    const { container } = render(<StyledHighlight $isHighlighted />);

    expect(container.firstChild).not.toHaveStyleRule('border-radius', expect.anything());
    expect(container.firstChild).not.toHaveStyleRule('border-top-left-radius', expect.anything());
    expect(container.firstChild).not.toHaveStyleRule('border-top-right-radius', expect.anything());
  });

  describe.each([
    { position: 'start', props: { $isHighlightStart: true }, ltrSide: 'left', rtlSide: 'right' },
    { position: 'end', props: { $isHighlightEnd: true }, ltrSide: 'right', rtlSide: 'left' }
  ])('for the highlighted range $position', ({ props, ltrSide, rtlSide }) => {
    it('fills the whole cell, rather than only its inner half', () => {
      const { container } = render(<StyledHighlight $isHighlighted {...props} />);

      expect(container.firstChild).toHaveStyleRule('background-color', TINT);
      expect(container.firstChild).not.toHaveStyleRule('background-image', expect.anything());
    });

    it(`rounds its outer (${ltrSide}) side into a cap, in LTR`, () => {
      const { container } = render(<StyledHighlight $isHighlighted {...props} />);

      expect(container.firstChild).toHaveStyleRule(`border-top-${ltrSide}-radius`, '50%');
      expect(container.firstChild).toHaveStyleRule(`border-bottom-${ltrSide}-radius`, '50%');
      expect(container.firstChild).not.toHaveStyleRule(
        `border-top-${rtlSide}-radius`,
        expect.anything()
      );
    });

    it(`rounds its outer (${rtlSide}) side instead, in RTL`, () => {
      const { container } = renderRtl(<StyledHighlight $isHighlighted {...props} />);

      expect(container.firstChild).toHaveStyleRule(`border-top-${rtlSide}-radius`, '50%');
      expect(container.firstChild).toHaveStyleRule(`border-bottom-${rtlSide}-radius`, '50%');
      expect(container.firstChild).not.toHaveStyleRule(
        `border-top-${ltrSide}-radius`,
        expect.anything()
      );
    });
  });

  it('paints nothing when not highlighted', () => {
    const { container } = render(<StyledHighlight />);

    expect(container.firstChild).not.toHaveStyleRule('background-color', TINT);
    expect(container.firstChild).not.toHaveStyleRule('background-image', expect.anything());
  });

  describe('`data-garden-id` attribute', () => {
    it('has the correct `data-garden-id`', () => {
      const { container } = render(<StyledHighlight />);

      expect(container.firstChild).toHaveAttribute('data-garden-id', 'datepickers.highlight');
    });

    it('applies a theme override for `datepickers.highlight`', () => {
      const { container } = render(
        <ThemeProvider
          theme={{
            ...DEFAULT_THEME,
            components: { 'datepickers.highlight': 'outline: 1px solid red;' }
          }}
        >
          <StyledHighlight />
        </ThemeProvider>
      );

      expect(container.firstChild).toHaveStyleRule('outline', '1px solid red');
    });
  });
});
