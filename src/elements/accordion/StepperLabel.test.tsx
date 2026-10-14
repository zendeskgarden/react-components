/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createRef } from 'react';

import { DARK_THEME, RTL_THEME, render } from '../../test/render';
import DEFAULT_THEME from '../../theming/elements/theme';
import { getColor } from '../../theming/utils/getColor';
import type { IStepperLabelProps } from '../../types/elements';
import { Stepper } from './Stepper';

const STEP_ICON = '[data-garden-id="accordions.step_icon"]';
const LABEL_TEXT = '[data-garden-id="accordions.step_label_text"]';

describe('Label', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLDivElement>();
    const { getByTestId } = render(
      <Stepper>
        <Stepper.Step>
          <Stepper.Label ref={ref} data-test-id="step-label" />
        </Stepper.Step>
      </Stepper>
    );

    expect(getByTestId('step-label')).toBe(ref.current);
  });

  it('does not let props override the garden attributes', () => {
    const { getByTestId } = render(
      <Stepper>
        <Stepper.Step>
          <Stepper.Label
            data-test-id="step-label"
            data-garden-id="custom"
            data-garden-version="0.0.0"
          />
        </Stepper.Step>
      </Stepper>
    );

    expect(getByTestId('step-label')).toHaveAttribute('data-garden-id', 'accordions.step_label');
    expect(getByTestId('step-label')).toHaveAttribute('data-garden-version', PACKAGE_VERSION);
  });

  describe('Icon', () => {
    it('renders the step number by default', () => {
      const { container } = render(
        <Stepper activeIndex={0}>
          <Stepper.Step>
            <Stepper.Label>First</Stepper.Label>
          </Stepper.Step>
          <Stepper.Step>
            <Stepper.Label>Second</Stepper.Label>
          </Stepper.Step>
        </Stepper>
      );
      const icons = container.querySelectorAll(STEP_ICON);

      expect(icons[0]).toHaveTextContent('1');
      expect(icons[1]).toHaveTextContent('2');
    });

    it('renders a custom icon', () => {
      const { container } = render(
        <Stepper>
          <Stepper.Step>
            <Stepper.Label icon={<span data-test-id="custom-icon" />}>First</Stepper.Label>
          </Stepper.Step>
        </Stepper>
      );

      expect(container.querySelector(STEP_ICON)!.firstChild).toHaveAttribute(
        'data-test-id',
        'custom-icon'
      );
    });

    it('renders a check icon with its props for a completed step', () => {
      const iconProps: IStepperLabelProps['iconProps'] = { 'aria-label': 'Completed' };
      const { container, getByLabelText } = render(
        <Stepper activeIndex={1}>
          <Stepper.Step>
            <Stepper.Label iconProps={iconProps}>First</Stepper.Label>
          </Stepper.Step>
          <Stepper.Step>
            <Stepper.Label>Second</Stepper.Label>
          </Stepper.Step>
        </Stepper>
      );

      expect(getByLabelText('Completed').nodeName).toBe('svg');
      expect(container.querySelectorAll(STEP_ICON)[0]).not.toHaveTextContent('1');
    });

    it('wraps the icon in a flex container in a horizontal stepper', () => {
      const { container } = render(
        <Stepper isHorizontal>
          <Stepper.Step>
            <Stepper.Label>First</Stepper.Label>
          </Stepper.Step>
        </Stepper>
      );

      expect(container.querySelector(STEP_ICON)!.parentElement).toHaveStyleRule(
        'justify-content',
        'center'
      );
    });

    describe('Styling', () => {
      const { base } = DEFAULT_THEME.space;

      const renderIcons = (theme = DEFAULT_THEME, isHorizontal = false) => {
        const { container } = render(
          <Stepper activeIndex={0} isHorizontal={isHorizontal}>
            <Stepper.Step>
              <Stepper.Label>First</Stepper.Label>
            </Stepper.Step>
            <Stepper.Step>
              <Stepper.Label>Second</Stepper.Label>
            </Stepper.Step>
          </Stepper>,
          { theme }
        );

        return container.querySelectorAll(STEP_ICON);
      };

      it.each([
        ['light', DEFAULT_THEME],
        ['dark', DARK_THEME]
      ] as const)('renders inactive styling in %s mode', (_, theme) => {
        const icon = renderIcons(theme)[1];

        expect(icon).toHaveStyleRule('color', getColor({ theme, variable: 'foreground.default' }));
        expect(icon).toHaveStyleRule(
          'background',
          getColor({
            theme,
            variable: 'background.subtle',
            dark: { offset: -200 },
            light: { offset: 100 }
          })
        );
        expect(icon).toHaveStyleRule('margin-right', `${base * 3}px`);
        expect(icon).not.toHaveStyleRule('margin-bottom');
      });

      it.each([
        ['light', DEFAULT_THEME],
        ['dark', DARK_THEME]
      ] as const)('renders active styling in %s mode', (_, theme) => {
        const icon = renderIcons(theme)[0];

        expect(icon).toHaveStyleRule(
          'color',
          getColor({ theme, variable: 'foreground.onEmphasis' })
        );
        expect(icon).toHaveStyleRule(
          'background',
          getColor({ theme, variable: 'background.emphasis', dark: { offset: -300 } })
        );
      });

      it('renders horizontal styling', () => {
        const icon = renderIcons(DEFAULT_THEME, true)[0];

        expect(icon).not.toHaveStyleRule('margin-right');
        expect(icon).toHaveStyleRule('margin-bottom', `${base * 2}px`);
      });

      it('renders RTL styling', () => {
        const icon = renderIcons(RTL_THEME)[0];

        expect(icon).toHaveStyleRule('margin-left', `${base * 3}px`);
        expect(icon).not.toHaveStyleRule('margin-right');
      });
    });
  });

  describe('Styling', () => {
    const renderLabel = (
      stepperProps: { activeIndex?: number; isHorizontal?: boolean } = {},
      theme = DEFAULT_THEME
    ) =>
      render(
        <Stepper {...stepperProps}>
          <Stepper.Step>
            <Stepper.Label data-test-id="step-label">First</Stepper.Label>
          </Stepper.Step>
          <Stepper.Step>
            <Stepper.Label data-test-id="step-label">Second</Stepper.Label>
          </Stepper.Step>
        </Stepper>,
        { theme }
      ).getAllByTestId('step-label');

    it.each([
      ['light', DEFAULT_THEME],
      ['dark', DARK_THEME]
    ] as const)('renders inactive styling in %s mode', (_, theme) => {
      const label = renderLabel({ activeIndex: 0 }, theme)[1];

      expect(label).not.toHaveStyleRule('font-weight');
      expect(label).not.toHaveStyleRule('text-align');
      expect(label).toHaveStyleRule('display', 'flex');
      expect(label).toHaveStyleRule('align-items', 'center');
      expect(label).toHaveStyleRule('color', getColor({ theme, variable: 'foreground.subtle' }));
    });

    it.each([
      ['light', DEFAULT_THEME],
      ['dark', DARK_THEME]
    ] as const)('renders active styling in %s mode', (_, theme) => {
      const label = renderLabel({ activeIndex: 0 }, theme)[0];

      expect(label).toHaveStyleRule('color', getColor({ theme, variable: 'foreground.default' }));
      expect(label).toHaveStyleRule('font-weight', '600');
    });

    it('renders horizontal styling', () => {
      const label = renderLabel({ isHorizontal: true })[0];

      expect(label).not.toHaveStyleRule('display');
      expect(label).not.toHaveStyleRule('align-items');
      expect(label).toHaveStyleRule('text-align', 'center');
    });
  });

  describe('Text', () => {
    const renderText = (labelProps: Partial<IStepperLabelProps>, isHorizontal = false) => {
      const { container } = render(
        <Stepper isHorizontal={isHorizontal}>
          <Stepper.Step>
            <Stepper.Label {...labelProps}>First</Stepper.Label>
          </Stepper.Step>
        </Stepper>
      );

      return container.querySelector(LABEL_TEXT)!;
    };

    it('renders default styling', () => {
      const text = renderText({});

      expect(text).toHaveAttribute('data-garden-version', PACKAGE_VERSION);
      expect(text).not.toHaveStyleRule('display');
      expect(text).not.toHaveStyleRule('padding');
      expect(text).not.toHaveStyleRule('word-wrap');
    });

    it('renders horizontal styling', () => {
      const text = renderText({}, true);

      expect(text).toHaveStyleRule('padding', `0 ${DEFAULT_THEME.space.base * 3}px`);
      expect(text).toHaveStyleRule('word-wrap', 'break-word');
    });

    it('is hidden if requested', () => {
      const text = renderText({ isHidden: true });

      expect(text).toHaveStyleRule('display', 'none');
    });
  });
});
