/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { render } from 'garden-test-utils';
import React from 'react';
import styled from 'styled-components';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';

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
      media: `(min-width:  ${DEFAULT_THEME.breakpoints.sm})`
    });
  });

  it('renders a numeric size without a containing Grid', () => {
    const { getByTestId } = render(<Col data-test-id="test" size={6} />);

    expect(getByTestId('test')).toHaveStyleRule('max-width', '50%');
  });

  it('renders when wrapped with styled() without a containing Grid', () => {
    const StyledCol = styled(Col)``;
    const { getByTestId } = render(<StyledCol data-test-id="test" md={4} />);

    expect(getByTestId('test')).toHaveStyleRule('max-width', `${(4 / 12) * 100}%`, {
      media: `(min-width:  ${DEFAULT_THEME.breakpoints.md})`
    });
  });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
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
});
