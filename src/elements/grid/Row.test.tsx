/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createRef } from 'react';

import { render } from '../../test/render';
import { Grid } from './Grid';
import { Row } from './Row';

describe('Row', () => {
  it('is rendered as a div', () => {
    const { container } = render(<Row />);

    expect(container.firstChild!.nodeName).toBe('DIV');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLDivElement>();
    const { container } = render(<Row ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  it('wraps by default', () => {
    const { container } = render(<Row />);

    expect(container.firstChild).toHaveStyleRule('flex-wrap', 'wrap');
  });

  it('renders gutters provided by the containing Grid', () => {
    const { getByTestId } = render(
      <Grid gutters={false}>
        <Row data-test-id="test" />
      </Grid>
    );

    expect(getByTestId('test')).toHaveStyleRule('margin-left', '-0');
  });

  it('renders debug styling when the containing Grid is in debug mode', () => {
    const { getByTestId } = render(
      <Grid debug>
        <Row data-test-id="test" />
      </Grid>
    );

    expect(getByTestId('test')).toHaveStyleRule('box-shadow', expect.any(String));
  });

  it('renders no debug styling by default', () => {
    const { getByTestId } = render(<Row data-test-id="test" />);

    expect(getByTestId('test')).not.toHaveStyleRule('box-shadow', expect.any(String));
  });

  it.each([
    ['start', 'flex-start'],
    ['end', 'flex-end'],
    ['center', 'center']
  ] as const)('renders align items %s as %s', (alignItems, expected) => {
    const { getByTestId } = render(<Row data-test-id="test" alignItems={alignItems} />);

    expect(getByTestId('test')).toHaveStyleRule('align-items', expected);
  });

  it.each([
    ['start', 'flex-start'],
    ['end', 'flex-end'],
    ['between', 'space-between'],
    ['around', 'space-around'],
    ['center', 'center']
  ] as const)('renders justify content %s as %s', (justifyContent, expected) => {
    const { getByTestId } = render(<Row data-test-id="test" justifyContent={justifyContent} />);

    expect(getByTestId('test')).toHaveStyleRule('justify-content', expected);
  });
});
