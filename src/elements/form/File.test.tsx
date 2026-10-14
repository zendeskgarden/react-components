/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createRef } from 'react';

import { render } from '../../test/render';
import DEFAULT_THEME from '../../theming/elements/theme';
import { getColor } from '../../theming/utils/getColor';
import { File } from './File';

describe('File', () => {
  it('renders the expected HTML element', () => {
    const { container } = render(<File />);

    expect(container.firstChild!.nodeName).toBe('DIV');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLDivElement>();
    const { container } = render(<File ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  it('renders `type` as expected', () => {
    const { container } = render(<File type="generic" />);

    expect(container.firstChild!.firstChild).not.toBeNull();
  });

  describe('children', () => {
    it('wraps child text', () => {
      const { container } = render(<File>test</File>);

      expect(container.firstChild!.firstChild!.nodeName).toBe('SPAN');
      expect(container.firstChild!.firstChild).toHaveTextContent('test');
    });

    it('renders unwrapped child element', () => {
      const { container } = render(
        <File>
          <div>test</div>
        </File>
      );

      expect(container.firstChild!.firstChild!.nodeName).toBe('DIV');
      expect(container.firstChild!.firstChild).toHaveTextContent('test');
    });
  });

  describe('validation', () => {
    it('renders the default colors without validation', () => {
      const { container } = render(<File />);

      expect(container.firstChild).toHaveStyleRule(
        'border-color',
        getColor({ theme: DEFAULT_THEME, variable: 'border.default' })
      );
      expect(container.firstChild).toHaveStyleRule(
        'color',
        getColor({ theme: DEFAULT_THEME, variable: 'foreground.default' })
      );
    });

    it('renders success colors', () => {
      const { container } = render(<File validation="success" />);

      expect(container.firstChild).toHaveStyleRule(
        'border-color',
        getColor({ theme: DEFAULT_THEME, variable: 'border.successEmphasis' })
      );
      expect(container.firstChild).toHaveStyleRule(
        'color',
        getColor({ theme: DEFAULT_THEME, variable: 'foreground.success' })
      );
    });

    it('renders error colors', () => {
      const { container } = render(<File validation="error" />);

      expect(container.firstChild).toHaveStyleRule(
        'border-color',
        getColor({ theme: DEFAULT_THEME, variable: 'border.dangerEmphasis' })
      );
      expect(container.firstChild).toHaveStyleRule(
        'color',
        getColor({ theme: DEFAULT_THEME, variable: 'foreground.danger' })
      );
    });
  });
});
