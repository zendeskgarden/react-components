/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { rgba } from 'polished';
import { render } from 'garden-test-utils';
import { PALETTE } from '@zendeskgarden/react-theming';
import { CodeBlock } from './CodeBlock';

describe('CodeBlock', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLPreElement>();
    const { container } = render(<CodeBlock ref={ref} />);

    expect(container.getElementsByTagName('pre')[0]).toBe(ref.current);
  });

  it('renders the expected element', () => {
    const { container } = render(<CodeBlock />);

    expect(container.firstChild!.nodeName).toBe('DIV');
    expect(container.firstChild!.firstChild!.nodeName).toBe('PRE');
  });

  it('applies container props', () => {
    const { container } = render(<CodeBlock containerProps={{ id: 'test' }} />);

    expect(container.firstChild).toHaveAttribute('id', 'test');
  });

  it('renders the expected language', () => {
    const { container } = render(<CodeBlock language="go" />);

    expect(container.getElementsByTagName('pre')[0]).toHaveClass('language-go');
  });

  it('renders as expected in light mode', () => {
    const { container } = render(<CodeBlock isLight />);

    expect(container.getElementsByTagName('pre')[0]).toHaveStyleRule(
      'background-color',
      PALETTE.grey[100]
    );
  });

  it('renders line numbers as expected', () => {
    const { container } = render(<CodeBlock isNumbered />);

    expect(container.getElementsByTagName('code')[0]).toHaveStyleRule(
      'content',
      'counter(linenumber)',
      {
        modifier: '&::before'
      }
    );
  });

  it('highlights lines as expected', () => {
    const code = `one
    two`;
    const { container } = render(<CodeBlock highlightLines={[1]}>{code}</CodeBlock>);
    const codeElements = container.getElementsByTagName('code');

    expect(codeElements[0]).toHaveStyleRule('background-color', rgba(PALETTE.white, 0.1));
    expect(codeElements[1]).not.toHaveStyleRule('background-color');
  });

  describe('size', () => {
    it('renders small size', () => {
      const { container } = render(<CodeBlock size="small" />);

      expect(container.getElementsByTagName('code')[0]).toHaveStyleRule('font-size', '11px');
    });

    it('renders medium size', () => {
      const { container } = render(<CodeBlock size="medium" />);

      expect(container.getElementsByTagName('code')[0]).toHaveStyleRule('font-size', '13px');
    });

    it('renders large size', () => {
      const { container } = render(<CodeBlock size="large" />);

      expect(container.getElementsByTagName('code')[0]).toHaveStyleRule('font-size', '17px');
    });
  });
});
