/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createRef } from 'react';
import TestIcon from 'svg-icons-legacy/src/16/gear-stroke.svg';

import { DARK_THEME, RTL_THEME, render } from '../../test/render';
import PALETTE from '../../theming/elements/palette';
import DEFAULT_THEME from '../../theming/elements/theme';
import { Span } from './Span';

describe('Span', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLSpanElement>();
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
    const cases = [
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
      'purple',
      'yellow'
    ].reduce<[string, 'light' | 'dark'][]>((arr, hue) => {
      arr.push([hue, 'light']);
      arr.push([hue, 'dark']);

      return arr;
    }, []);

    it.each(cases)('renders with a "%s" hue in "%s" mode', (hue, mode) => {
      const { container } = render(<Span hue={hue} />, {
        theme: mode === 'dark' ? DARK_THEME : undefined
      });

      expect(container.firstChild).toHaveStyleRule(
        'color',
        (PALETTE as any)[hue][mode === 'light' ? 700 : 600]
      );
    });

    it.each([['light'], ['dark']])('inherits the parent color in "%s" mode', mode => {
      const { container } = render(<Span />, {
        theme: mode === 'dark' ? DARK_THEME : undefined
      });

      expect(container.firstChild).toHaveStyleRule('color', undefined);
    });

    it.each([
      ['light', 'foreground.subtle'],
      ['dark', 'foreground.subtle']
    ])('handles variable hue in "%s" mode', (mode, variable) => {
      const { container } = render(<Span hue={variable} />, {
        theme: mode === 'dark' ? DARK_THEME : undefined
      });

      expect(container.firstChild).toHaveStyleRule(
        'color',
        PALETTE.grey[mode === 'light' ? 700 : 500]
      );
    });
  });

  it('applies expected styling with RTL locale', () => {
    const { container } = render(<Span />, {
      theme: RTL_THEME
    });

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
      const { getByTestId } = render(
        <Span>
          <Span.StartIcon>
            <TestIcon data-test-id="icon" />
          </Span.StartIcon>
        </Span>,
        {
          theme: RTL_THEME
        }
      );

      expect(getByTestId('icon')).toHaveStyleRule('margin-left', '8px');
    });
  });
});
