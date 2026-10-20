/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createRef } from 'react';
import { styled } from 'styled-components';

import { RTL_THEME, render } from '../../test/render';
import DEFAULT_THEME from '../../theming/elements/theme';
import { COMPONENT_IDS } from '../utils';
import { Col } from './Col';
import { Grid } from './Grid';
import { Row } from './Row';

describe('Col', () => {
  it('is rendered as a div', () => {
    const { container } = render(<Col />);

    expect(container.firstChild!.nodeName).toBe('DIV');
  });

  it('renders a numeric breakpoint size without a containing Grid', () => {
    const { getByTestId } = render(<Col data-test-id="test" sm={12} />);

    expect(getByTestId('test')).toHaveStyleRule('max-width', '100%', {
      media: `(min-width: ${DEFAULT_THEME.breakpoints.sm})`
    });
  });

  it('renders a numeric size without a containing Grid', () => {
    const { getByTestId } = render(<Col data-test-id="test" size={6} />);

    expect(getByTestId('test')).toHaveStyleRule('max-width', '50%');
  });

  it('renders when wrapped with styled() without a containing Grid', () => {
    const StyledCol = styled(Col)``;
    const { getByTestId } = render(
      <StyledCol
        data-test-id="test"
        md={4}
        data-garden-id={COMPONENT_IDS['grid.col']}
        data-garden-version={PACKAGE_VERSION}
      />
    );

    expect(getByTestId('test')).toHaveStyleRule('max-width', `${(4 / 12) * 100}%`, {
      media: `(min-width: ${DEFAULT_THEME.breakpoints.md})`
    });
  });

  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLDivElement>();
    const { container } = render(<Col ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  it('renders columns provided by the containing Grid', () => {
    const { getByTestId } = render(
      <Grid columns={100}>
        <Row>
          <Col data-test-id="test" size={1} />
        </Row>
      </Grid>
    );

    expect(getByTestId('test')).toHaveStyleRule('max-width', '1%');
  });

  it('renders gutters provided by the containing Grid', () => {
    const { getByTestId } = render(
      <Grid gutters={false}>
        <Row>
          <Col data-test-id="test" />
        </Row>
      </Grid>
    );

    expect(getByTestId('test')).toHaveStyleRule('padding-left', '0');
  });

  it('renders debug styling when the containing Grid is in debug mode', () => {
    const { getByTestId } = render(
      <Grid debug>
        <Row>
          <Col data-test-id="test" />
        </Row>
      </Grid>
    );

    expect(getByTestId('test')).toHaveStyleRule('background-color', expect.any(String));
  });

  it('renders no debug styling by default', () => {
    const { getByTestId } = render(<Col data-test-id="test" />);

    expect(getByTestId('test')).not.toHaveStyleRule('background-color', expect.any(String));
  });

  it('renders an auto size', () => {
    const { getByTestId } = render(<Col data-test-id="test" size="auto" />);

    expect(getByTestId('test')).toHaveStyleRule('flex-basis', 'auto');
    expect(getByTestId('test')).toHaveStyleRule('flex-grow', '0');
    expect(getByTestId('test')).toHaveStyleRule('max-width', '100%');
    expect(getByTestId('test')).toHaveStyleRule('width', 'auto');
  });

  describe('text alignment', () => {
    it.each([
      ['start', 'left', 'right'],
      ['end', 'right', 'left'],
      ['center', 'center', 'center']
    ] as const)('renders %s alignment as %s (rtl: %s)', (textAlign, ltr, rtl) => {
      const { getByTestId, rerender } = render(<Col data-test-id="test" textAlign={textAlign} />);

      expect(getByTestId('test')).toHaveStyleRule('text-align', ltr);

      rerender(<Col data-test-id="test" textAlign={textAlign} />, { theme: RTL_THEME });

      expect(getByTestId('test')).toHaveStyleRule('text-align', rtl);
    });
  });

  describe('order', () => {
    it.each([
      ['first', '-1'],
      ['last', '13'],
      [3, '3']
    ] as const)('renders order %s as %s', (order, expected) => {
      const { getByTestId } = render(<Col data-test-id="test" order={order} />);

      expect(getByTestId('test')).toHaveStyleRule('order', expected);
    });
  });
});
