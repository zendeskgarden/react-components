/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { DEFAULT_THEME, PALETTE_V8 } from '@zendeskgarden/react-theming';
import { render, renderRtl } from 'garden-test-utils';
import { Span } from './Span';
import TestIcon from '@zendeskgarden/svg-icons/src/16/gear-stroke.svg';

describe('Span', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLSpanElement>();
    const { container } = render(<Span ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  it('renders the expected element', () => {
    const { container } = render(<Span />);

    expect(container.firstChild!.nodeName).toBe('SPAN');
  });

  it('applies bold styling if provided', () => {
    const { container } = render(<Span isBold />);

    expect(container.firstChild).toHaveStyleRule(
      'font-weight',
      DEFAULT_THEME.fontWeights.semibold.toString()
    );
  });

  it('applies monospace styling if provided', () => {
    const { container } = render(<Span isMonospace />);

    expect(container.firstChild).toHaveStyleRule('font-family', DEFAULT_THEME.fonts.mono);
  });

  it('applies hidden styling if provided', () => {
    const { container } = render(<Span hidden />);

    expect(container.firstChild).toHaveStyleRule('clip', 'rect(0 0 0 0)', { modifier: '[hidden]' });
  });

  describe('hue', () => {
    it('renders the hue provided', () => {
      [
        'grey',
        'blue',
        'kale',
        'red',
        'green',
        'fuschia',
        'pink',
        'crimson',
        'orange',
        'lemon',
        'lime',
        'mint',
        'teal',
        'azure',
        'royal',
        'purple'
      ].forEach(color => {
        const { container } = render(<Span hue={color as any} />);

        expect(container.firstChild).toHaveStyleRule('color', (PALETTE_V8 as any)[color][600]);
      });
    });

    it('handles yellow hue with specialized shading', () => {
      const { container } = render(<Span hue="yellow" />);

      expect(container.firstChild).toHaveStyleRule('color', PALETTE_V8.yellow[700]);
    });
  });

  it('applies expected styling with RTL locale', () => {
    const { container } = renderRtl(<Span />);

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
  });

  describe('Icons', () => {
    it('successfully renders start and default icons', () => {
      const { getByTestId } = render(
        <Span>
          <Span.StartIcon>
            <TestIcon data-test-id="start" />
          </Span.StartIcon>
          <Span.Icon>
            <TestIcon data-test-id="default" />
          </Span.Icon>
        </Span>
      );

      expect(getByTestId('start')).not.toBeNull();
      expect(getByTestId('default')).not.toBeNull();
    });

    it('renders start icon', () => {
      const { getByTestId } = render(
        <Span>
          <Span.StartIcon>
            <TestIcon data-test-id="icon" />
          </Span.StartIcon>
        </Span>
      );

      expect(getByTestId('icon')).toHaveStyleRule('margin-right', '8px');
    });

    it('renders RTL start icon', () => {
      const { getByTestId } = renderRtl(
        <Span>
          <Span.StartIcon>
            <TestIcon data-test-id="icon" />
          </Span.StartIcon>
        </Span>
      );

      expect(getByTestId('icon')).toHaveStyleRule('margin-left', '8px');
    });
  });
});
