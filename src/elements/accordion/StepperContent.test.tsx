/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createRef } from 'react';

import { RTL_THEME, render } from '../../test/render';
import DEFAULT_THEME from '../../theming/elements/theme';
import { Stepper } from './Stepper';

describe('Content', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLDivElement>();
    const { getByTestId } = render(
      <Stepper>
        <Stepper.Step>
          <Stepper.Content ref={ref} data-test-id="step-content" />
        </Stepper.Step>
      </Stepper>
    );

    expect(getByTestId('step-content')).toBe(ref.current);
  });

  it('renders null for a horizontal Stepper', () => {
    const { queryByText } = render(
      <Stepper isHorizontal>
        <Stepper.Step>
          <Stepper.Content>Some content</Stepper.Content>
        </Stepper.Step>
      </Stepper>
    );

    expect(queryByText('Some content')).toBeNull();
  });

  it('renders Content for a vertical Stepper', () => {
    const { queryByText } = render(
      <Stepper>
        <Stepper.Step>
          <Stepper.Content>Some content</Stepper.Content>
        </Stepper.Step>
      </Stepper>
    );

    expect(queryByText('Some content')).not.toBeNull();
  });

  it('hides step content from assistive devices when the step is inactive', () => {
    const { queryByText } = render(
      <Stepper activeIndex={0}>
        <Stepper.Step>
          <Stepper.Content>Blueberry</Stepper.Content>
        </Stepper.Step>
        <Stepper.Step>
          <Stepper.Content>Strawberry</Stepper.Content>
        </Stepper.Step>
      </Stepper>
    );
    const visibleElement = queryByText('Blueberry');
    const hiddenElement = queryByText('Strawberry');

    expect(visibleElement).toHaveAttribute('aria-hidden', 'false');
    expect(visibleElement).not.toHaveAttribute('inert');
    expect(hiddenElement).toHaveAttribute('aria-hidden', 'true');
    expect(hiddenElement).toHaveAttribute('inert');
  });

  it('does not let props override the garden attributes', () => {
    const { getByTestId } = render(
      <Stepper>
        <Stepper.Step>
          <Stepper.Content
            data-test-id="step-content"
            data-garden-id="custom"
            data-garden-version="0.0.0"
          >
            Content
          </Stepper.Content>
        </Stepper.Step>
      </Stepper>
    );

    expect(getByTestId('step-content')).toHaveAttribute(
      'data-garden-id',
      'accordions.step_content'
    );
    expect(getByTestId('step-content')).toHaveAttribute('data-garden-version', PACKAGE_VERSION);
    expect(getByTestId('step-content').firstChild).toHaveAttribute(
      'data-garden-id',
      'accordions.step_inner_content'
    );
  });

  describe('Styling', () => {
    const { base } = DEFAULT_THEME.space;

    const renderContent = (theme = DEFAULT_THEME) =>
      render(
        <Stepper activeIndex={0}>
          <Stepper.Step>
            <Stepper.Content data-test-id="step-content">Blueberry</Stepper.Content>
          </Stepper.Step>
          <Stepper.Step>
            <Stepper.Content data-test-id="step-content">Strawberry</Stepper.Content>
          </Stepper.Step>
        </Stepper>,
        { theme }
      ).getAllByTestId('step-content');

    it('renders inactive styling', () => {
      const content = renderContent()[1];

      expect(content).toHaveStyleRule('grid-template-rows', '0fr');
      expect(content).toHaveStyleRule('margin', `${base * 3}px 0px ${base * 3}px ${base * 3}px`);
      expect(content).toHaveStyleRule('padding', `0 ${base * 5}px ${base * 6}px ${base * 6}px`);
    });

    it('renders active styling', () => {
      const content = renderContent()[0];

      expect(content).toHaveStyleRule('grid-template-rows', '1fr');
      expect(content).toHaveStyleRule('padding', `0 ${base * 5}px ${base * 8}px ${base * 6}px`);
    });

    it('renders RTL styling', () => {
      const content = renderContent(RTL_THEME)[1];

      expect(content).toHaveStyleRule('margin', `${base * 3}px ${base * 3}px ${base * 3}px 0px`);
      expect(content).toHaveStyleRule('padding', `0 ${base * 6}px ${base * 6}px ${base * 5}px`);
    });
  });
});
