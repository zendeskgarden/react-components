/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { StrictMode, createRef } from 'react';

import { RTL_THEME, render } from '../../test/render';
import DEFAULT_THEME from '../../theming/elements/theme';
import { StyledLine } from '../../views/accordion/StyledLine';
import { StyledContent } from '../../views/accordion/StyledStepperContent';
import { Stepper } from './Stepper';

describe('Step', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLLIElement>();
    const { getByTestId } = render(
      <Stepper>
        <Stepper.Step data-test-id="step" ref={ref} />
      </Stepper>
    );

    expect(getByTestId('step')).toBe(ref.current);
  });

  it('renders a step line before each step in a horizontal stepper', () => {
    const steps = [1, 2, 3];
    const { queryAllByTestId } = render(
      <Stepper isHorizontal>
        {steps.map(step => (
          <Stepper.Step key={step} />
        ))}
      </Stepper>
    );

    expect(queryAllByTestId('step-line')).toHaveLength(steps.length);
  });

  it('does not render a step line before each step in a vertical stepper', () => {
    const steps = [1, 2, 3];
    const { queryAllByTestId } = render(
      <Stepper activeIndex={0}>
        {steps.map(step => (
          <Stepper.Step key={step} />
        ))}
      </Stepper>
    );

    expect(queryAllByTestId('step-line')).toHaveLength(0);
  });

  it('does not change step number when running outside strict mode', async () => {
    const { findAllByText } = render(
      <Stepper>
        <Stepper.Step>
          <Stepper.Label />
        </Stepper.Step>
        <Stepper.Step>
          <Stepper.Label />
        </Stepper.Step>
      </Stepper>
    );

    const elements = await findAllByText(/1|2/u);

    expect(elements[0]).toContainHTML('1');
    expect(elements[1]).toContainHTML('2');
  });

  it('does not change step number when running in strict mode', async () => {
    const { findAllByText } = render(
      <StrictMode>
        <Stepper>
          <Stepper.Step>
            <Stepper.Label />
          </Stepper.Step>
          <Stepper.Step>
            <Stepper.Label />
          </Stepper.Step>
        </Stepper>
      </StrictMode>
    );

    const elements = await findAllByText(/1|2/u);

    expect(elements[0]).toContainHTML('1');
    expect(elements[1]).toContainHTML('2');
  });

  it('does not let props override the garden attributes', () => {
    const { getByTestId } = render(
      <Stepper isHorizontal>
        <Stepper.Step data-test-id="step" data-garden-id="custom" data-garden-version="0.0.0" />
      </Stepper>
    );

    expect(getByTestId('step')).toHaveAttribute('data-garden-id', 'accordions.step');
    expect(getByTestId('step')).toHaveAttribute('data-garden-version', PACKAGE_VERSION);
    expect(getByTestId('step-line')).toHaveAttribute('data-garden-id', 'accordions.step_line');
    expect(getByTestId('step-line')).toHaveAttribute('data-garden-version', PACKAGE_VERSION);
  });

  describe('Styling', () => {
    const { borders } = DEFAULT_THEME;
    const { base } = DEFAULT_THEME.space;
    const contentModifier = `&:not(:last-of-type) ${StyledContent}`;

    it('renders default styling', () => {
      const { getByTestId } = render(
        <Stepper>
          <Stepper.Step data-test-id="step" />
        </Stepper>
      );

      expect(getByTestId('step')).not.toHaveStyleRule('position');
      expect(getByTestId('step')).not.toHaveStyleRule('flex');
      expect(getByTestId('step')).not.toHaveStyleRule('min-width');
    });

    it('renders horizontal styling', () => {
      const { getByTestId } = render(
        <Stepper isHorizontal>
          <Stepper.Step data-test-id="step" />
        </Stepper>
      );

      expect(getByTestId('step')).toHaveStyleRule('position', 'relative');
      expect(getByTestId('step')).toHaveStyleRule('flex', '1');
      expect(getByTestId('step')).toHaveStyleRule('min-width', `${base * 15}px`);
    });

    it('renders a content border on the left', () => {
      const { getByTestId } = render(
        <Stepper>
          <Stepper.Step data-test-id="step" />
        </Stepper>
      );

      expect(getByTestId('step')).toHaveStyleRule('border-left', borders.sm, {
        modifier: contentModifier
      });
      expect(getByTestId('step')).not.toHaveStyleRule('border-right', borders.sm, {
        modifier: contentModifier
      });
    });

    it('renders a content border on the right in RTL', () => {
      const { getByTestId } = render(
        <Stepper>
          <Stepper.Step data-test-id="step" />
        </Stepper>,
        { theme: RTL_THEME }
      );

      expect(getByTestId('step')).toHaveStyleRule('border-right', borders.sm, {
        modifier: contentModifier
      });
      expect(getByTestId('step')).not.toHaveStyleRule('border-left', borders.sm, {
        modifier: contentModifier
      });
    });

    it('hides the first step line', () => {
      const { getByTestId } = render(
        <Stepper isHorizontal>
          <Stepper.Step data-test-id="step" />
        </Stepper>
      );

      expect(getByTestId('step')).toHaveStyleRule('display', 'none', {
        modifier: `&:first-of-type ${StyledLine}`
      });
      expect(getByTestId('step')).not.toHaveStyleRule('display', 'none', {
        modifier: `&:last-of-type ${StyledLine}`
      });
    });

    it('hides the last step line in RTL', () => {
      const { getByTestId } = render(
        <Stepper isHorizontal>
          <Stepper.Step data-test-id="step" />
        </Stepper>,
        { theme: RTL_THEME }
      );

      expect(getByTestId('step')).toHaveStyleRule('display', 'none', {
        modifier: `&:last-of-type ${StyledLine}`
      });
      expect(getByTestId('step')).not.toHaveStyleRule('display', 'none', {
        modifier: `&:first-of-type ${StyledLine}`
      });
    });
  });
});
