/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { SkipNav } from './SkipNav';
import { Content } from './body/Content';
import Chrome from './Chrome';

describe('SkipNav', () => {
  it('renders the expected element', () => {
    const { container } = render(<SkipNav />);

    expect(container.firstChild!.nodeName).toBe('A');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLAnchorElement>();
    const { container } = render(<SkipNav ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  it('renders RTL styling if provided', () => {
    const { container } = renderRtl(<SkipNav />);

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
  });

  it('styles z-index if specified', () => {
    const { container } = render(<SkipNav zIndex={100} />);

    expect(container.firstChild).toHaveStyleRule('z-index', '100');
  });

  describe('linkId', () => {
    it('links to Content by default', () => {
      const { getByTestId } = render(
        <Chrome>
          <SkipNav data-test-id="skipnav" />
          <Content data-test-id="content" />
        </Chrome>
      );

      const contentId = getByTestId('content').getAttribute('id');
      const skipNavHref = getByTestId('skipnav').getAttribute('href');

      expect(`#${contentId}`).toStrictEqual(skipNavHref);
    });

    it('uses context to get the Content ID', () => {
      const { getByTestId } = render(
        <Chrome>
          <SkipNav data-test-id="skipnav" />
          <Content id="test" />
        </Chrome>
      );

      expect(getByTestId('skipnav').getAttribute('href')).toStrictEqual('#test');
    });

    it('can override to link to any element', () => {
      const { getByTestId } = render(
        <Chrome>
          <SkipNav data-test-id="skipnav" linkId="test" />
          <Content>
            <div id="test" />
          </Content>
        </Chrome>
      );

      expect(getByTestId('skipnav').getAttribute('href')).toStrictEqual('#test');
    });
  });
});
