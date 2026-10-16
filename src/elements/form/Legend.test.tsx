/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { screen } from '@testing-library/react';
import { createRef } from 'react';

import { render } from '../../test/render';
import { Fieldset } from './Fieldset';

describe('Fieldset.Legend', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLLegendElement>();

    render(
      <Fieldset>
        <Fieldset.Legend ref={ref}>Example Legend Text</Fieldset.Legend>
      </Fieldset>
    );

    const legend = screen.getByText('Example Legend Text');

    expect(legend).toBe(ref.current);
  });

  it('renders a legend and does not let props override the garden attributes', () => {
    render(
      <Fieldset>
        <Fieldset.Legend data-garden-id="custom" data-garden-version="0.0.0">
          Example Legend Text
        </Fieldset.Legend>
      </Fieldset>
    );

    const legend = screen.getByText('Example Legend Text');

    expect(legend.nodeName).toBe('LEGEND');
    expect(legend).toHaveAttribute('data-garden-id', 'forms.fieldset_legend');
    expect(legend).toHaveAttribute('data-garden-version', PACKAGE_VERSION);
  });
});
