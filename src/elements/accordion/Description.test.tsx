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
import { Accordion } from './Accordion';

const DESCRIPTION = '[data-garden-id="accordions.description"]';

const renderDescription = (props: Record<string, unknown> = {}) =>
  render(
    <Accordion level={3}>
      <Accordion.Section>
        <Accordion.Header>
          <Accordion.Label>
            Ticket details
            <Accordion.Description {...props}>Last updated 2 hours ago</Accordion.Description>
          </Accordion.Label>
        </Accordion.Header>
      </Accordion.Section>
    </Accordion>
  );

describe('Description', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLSpanElement>();
    const { container } = renderDescription({ ref });

    expect(container.querySelector(DESCRIPTION)).toBe(ref.current);
  });

  it('renders a span', () => {
    const { container } = renderDescription();

    expect(container.querySelector(DESCRIPTION)?.tagName).toBe('SPAN');
  });

  it('does not let props override the garden attributes', () => {
    const { container } = renderDescription({
      'data-garden-id': 'custom',
      'data-garden-version': '0.0.0'
    });
    const description = container.querySelector(DESCRIPTION);

    expect(description).toHaveAttribute('data-garden-version', PACKAGE_VERSION);
  });

  it('sets aria-hidden', () => {
    const { container } = renderDescription({ 'aria-hidden': false });

    expect(container.querySelector(DESCRIPTION)).toHaveAttribute('aria-hidden', 'true');
  });

  it('honors a consumer id', () => {
    const { container, getByRole } = renderDescription({ id: 'consumer-id' });

    expect(container.querySelector(DESCRIPTION)).toHaveAttribute('id', 'consumer-id');
    expect(getByRole('button')).toHaveAttribute('aria-describedby', 'consumer-id');
  });

  it('applies its styles', () => {
    const { container } = renderDescription();
    const description = container.querySelector(DESCRIPTION);

    expect(description).toHaveStyleRule('display', 'block');
    expect(description).toHaveStyleRule(
      'color',
      getColor({ theme: DEFAULT_THEME, variable: 'foreground.subtle' })
    );
    expect(description).toHaveStyleRule('font-weight', `${DEFAULT_THEME.fontWeights.regular}`);
  });
});
