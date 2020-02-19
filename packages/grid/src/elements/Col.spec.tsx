/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { Col } from './Col';
import { Row } from './Row';
import { Grid } from './Grid';

describe('Col', () => {
  it('is rendered as a div', () => {
    const { container } = render(<Col />);

    expect(container.firstChild!.nodeName).toBe('DIV');
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
