/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { rgba } from 'polished';
import { render, waitFor } from 'garden-test-utils';
import { DEFAULT_THEME, PALETTE } from '@zendeskgarden/react-theming';
import { CodeBlock } from './CodeBlock';

describe('CodeBlock', () => {
  it('passes ref to underlying DOM element', async () => {
    const ref = React.createRef<HTMLPreElement>();
    const { container } = render(<CodeBlock ref={ref} />);

    await waitFor(() => {
      expect(container.getElementsByTagName('pre')[0]).toBe(ref.current);
    });
  });

  it('renders the expected element', async () => {
    const { container } = render(<CodeBlock />);

    await waitFor(() => {
      expect(container.firstChild!.nodeName).toBe('DIV');
      expect(container.firstChild!.firstChild!.nodeName).toBe('PRE');
    });
  });

  it('applies container props', async () => {
    const { container } = render(<CodeBlock containerProps={{ id: 'test' }} />);

    await waitFor(() => {
      expect(container.firstChild).toHaveAttribute('id', 'test');
    });
  });

  it('renders the expected language', async () => {
    const { container } = render(<CodeBlock language="graphql" />);

    await waitFor(() => {
      expect(container.getElementsByTagName('pre')[0]).toHaveClass('language-graphql');
    });
  });

  it('renders the expected fallback for an invalid language', async () => {
    const { container } = render(<CodeBlock language={'swift' as any} />);

    await waitFor(() => {
      expect(container.getElementsByTagName('pre')[0]).toHaveClass('language-tsx');
    });
  });

  it('renders as expected in light mode', async () => {
    const { container } = render(<CodeBlock isLight />);

    await waitFor(() => {
      expect(container.getElementsByTagName('pre')[0]).toHaveStyleRule(
        'background-color',
        PALETTE.grey[100]
      );
    });
  });

  it('renders line numbers as expected', async () => {
    const { container } = render(<CodeBlock isNumbered />);

    await waitFor(() => {
      expect(container.getElementsByTagName('code')[0]).toHaveStyleRule(
        'content',
        'counter(linenumber)',
        {
          modifier: '&::before'
        }
      );
    });
  });

  it('renders diff lines as expected', async () => {
    const code = `@@ -1,3 +1,9 @@
+added line
-deleted line
!changed line
 unchanged line`;
    const { container } = render(<CodeBlock language="diff">{code}</CodeBlock>);
    const codeElements = container.getElementsByTagName('code');

    await waitFor(() => {
      expect(codeElements[0]).toHaveStyleRule(
        'background-color',
        rgba(PALETTE.royal[600], DEFAULT_THEME.opacity[200])
      );
      expect(codeElements[1]).toHaveStyleRule(
        'background-color',
        rgba(PALETTE.lime[500], DEFAULT_THEME.opacity[200])
      );
      expect(codeElements[2]).toHaveStyleRule(
        'background-color',
        rgba(PALETTE.crimson[700], DEFAULT_THEME.opacity[200])
      );
      expect(codeElements[3]).toHaveStyleRule(
        'background-color',
        rgba(PALETTE.lemon[300], DEFAULT_THEME.opacity[200])
      );
      expect(codeElements[4]).not.toHaveStyleRule('background-color');
    });
  });

  it('highlights lines as expected', async () => {
    const code = `one
    two`;
    const { container } = render(<CodeBlock highlightLines={[1]}>{code}</CodeBlock>);
    const codeElements = container.getElementsByTagName('code');

    await waitFor(() => {
      expect(codeElements[0]).toHaveStyleRule(
        'background-color',
        rgba(PALETTE.white, DEFAULT_THEME.opacity[100])
      );
      expect(codeElements[1]).not.toHaveStyleRule('background-color');
    });
  });

  describe('size', () => {
    it('renders small size', async () => {
      const { container } = render(<CodeBlock size="small" />);

      await waitFor(() => {
        expect(container.getElementsByTagName('code')[0]).toHaveStyleRule('font-size', '11px');
      });
    });

    it('renders medium size', async () => {
      const { container } = render(<CodeBlock size="medium" />);

      await waitFor(() => {
        expect(container.getElementsByTagName('code')[0]).toHaveStyleRule('font-size', '13px');
      });
    });

    it('renders large size', async () => {
      const { container } = render(<CodeBlock size="large" />);

      await waitFor(() => {
        expect(container.getElementsByTagName('code')[0]).toHaveStyleRule('font-size', '17px');
      });
    });
  });
});
