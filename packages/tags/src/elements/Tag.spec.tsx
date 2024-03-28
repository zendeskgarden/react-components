/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { PALETTE_V8 } from '@zendeskgarden/react-theming';
import { Tag } from './Tag';

describe('Tag', () => {
  it('applies correct styling with RTL locale', () => {
    const { container } = renderRtl(<Tag />);

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(<Tag ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
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
        const { container } = render(<Tag hue={color as any} />);

        expect(container.firstChild).toHaveStyleRule(
          'background-color',
          (PALETTE_V8 as any)[color][600]
        );
      });
    });

    it('handles yellow hue with specialized shading', () => {
      const { container } = render(<Tag hue="yellow" />);

      expect(container.firstChild).toHaveStyleRule('background-color', PALETTE_V8.yellow[400]);
    });
  });
});
