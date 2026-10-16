/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { userEvent } from '@testing-library/user-event';
import { createRef } from 'react';
import TestIcon from 'svg-icons-legacy/src/16/gear-stroke.svg';

import { RTL_THEME, render } from '../../test/render';
import DEFAULT_THEME from '../../theming/elements/theme';
import { getColor } from '../../theming/utils/getColor';
import type { IFauxInputProps } from '../../types/elements';
import { StyledSelect } from '../../views/form/StyledSelect';
import { StyledTextMediaFigure } from '../../views/form/StyledTextMediaFigure';
import { FauxInput } from './FauxInput';

describe('FauxInput', () => {
  const user = userEvent.setup();

  it('renders the expected element', () => {
    const { container } = render(<FauxInput />);

    expect(container.firstElementChild!.nodeName).toBe('DIV');
    expect(container.firstElementChild!.getAttribute('tabIndex')).toBe('0');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLDivElement>();
    const { container } = render(<FauxInput ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  it('renders expected disabled tabindex', () => {
    const { container } = render(<FauxInput disabled />);

    expect(container.firstElementChild!.getAttribute('tabIndex')).toBeNull();
  });

  it('applies focused styling on focus event', async () => {
    const { container } = render(<FauxInput />);

    expect(container.firstElementChild).toHaveAttribute('data-test-is-focused', 'false');

    await user.click(container.firstElementChild!);

    expect(container.firstElementChild).toHaveAttribute('data-test-is-focused', 'true');
  });

  it('removes focused styling on blur event', async () => {
    const { container } = render(<FauxInput />);

    await user.click(container.firstElementChild!);

    expect(container.firstElementChild).toHaveAttribute('data-test-is-focused', 'true');

    await user.tab();

    expect(container.firstElementChild).toHaveAttribute('data-test-is-focused', 'false');
  });

  describe('Icons', () => {
    it('successfully renders start and default icons', () => {
      const { getByTestId } = render(
        <FauxInput>
          <FauxInput.StartIcon>
            <TestIcon data-test-id="start" />
          </FauxInput.StartIcon>
          <FauxInput.EndIcon>
            <TestIcon data-test-id="default" />
          </FauxInput.EndIcon>
        </FauxInput>
      );

      expect(getByTestId('start')).not.toBeNull();
      expect(getByTestId('default')).not.toBeNull();
    });

    it('renders start icon', () => {
      const { getByTestId } = render(
        <FauxInput>
          <FauxInput.StartIcon>
            <TestIcon data-test-id="icon" />
          </FauxInput.StartIcon>
        </FauxInput>
      );

      expect(getByTestId('icon')).toHaveStyleRule('margin', '1px 8px auto 0');
    });

    it('renders RTL start icon', () => {
      const { getByTestId } = render(
        <FauxInput>
          <FauxInput.StartIcon>
            <TestIcon data-test-id="icon" />
          </FauxInput.StartIcon>
        </FauxInput>,
        {
          theme: RTL_THEME
        }
      );

      expect(getByTestId('icon')).toHaveStyleRule('margin', '1px 0 auto 8px');
    });

    describe('figure row', () => {
      const mediaModifier = `& > ${StyledTextMediaFigure}`;
      const inlineModifier = `& > ${StyledTextMediaFigure}:not(${StyledSelect} + *)`;
      const Example = (props: IFauxInputProps) => (
        <FauxInput {...props}>
          <FauxInput.StartIcon>
            <TestIcon />
          </FauxInput.StartIcon>
          <FauxInput.EndIcon>
            <TestIcon />
          </FauxInput.EndIcon>
        </FauxInput>
      );
      const expectMediaRow = (wrapper: Element | null, margin = '-1px') => {
        expect(wrapper).toHaveStyleRule('align-self', 'center', { modifier: mediaModifier });
        expect(wrapper).toHaveStyleRule('margin-top', margin, { modifier: mediaModifier });
        expect(wrapper).toHaveStyleRule('margin-bottom', margin, { modifier: mediaModifier });
        expect(wrapper).not.toHaveStyleRule('vertical-align', expect.anything(), {
          modifier: mediaModifier
        });
        expect(wrapper).not.toHaveStyleRule('vertical-align', expect.anything(), {
          modifier: inlineModifier
        });
        expect(wrapper).not.toHaveStyleRule('margin-top', expect.anything(), {
          modifier: inlineModifier
        });
      };
      const expectInlineRow = (wrapper: Element | null, margin = '-1px') => {
        expect(wrapper).toHaveStyleRule('vertical-align', 'top', { modifier: inlineModifier });
        expect(wrapper).toHaveStyleRule('margin-top', margin, { modifier: inlineModifier });
        expect(wrapper).toHaveStyleRule('margin-bottom', margin, { modifier: inlineModifier });
        expect(wrapper).not.toHaveStyleRule('align-self', expect.anything(), {
          modifier: mediaModifier
        });
        expect(wrapper).not.toHaveStyleRule('margin-top', expect.anything(), {
          modifier: mediaModifier
        });
        expect(wrapper).not.toHaveStyleRule('margin-bottom', expect.anything(), {
          modifier: mediaModifier
        });
      };

      it.each([
        ['default', {}],
        ['compact', { isCompact: true }],
        ['bare', { isBare: true }]
      ])('sizes the figures to the 18px content row in both layouts (%s)', (_name, props) => {
        const { container: media } = render(<Example mediaLayout {...props} />);
        const { container: inline } = render(<Example {...props} />);

        expectMediaRow(media.firstElementChild);
        expectInlineRow(inline.firstElementChild);
      });

      it('is not affected by the layout direction', () => {
        const { container: media } = render(<Example mediaLayout />, { theme: RTL_THEME });
        const { container: inline } = render(<Example />, { theme: RTL_THEME });

        expectMediaRow(media.firstElementChild);
        expectInlineRow(inline.firstElementChild);
      });

      it('derives the margins from the icon render size', () => {
        const theme = { ...DEFAULT_THEME, space: { ...DEFAULT_THEME.space, md: '24px' } };
        const { container: media } = render(<Example mediaLayout />, { theme });
        const { container: inline } = render(<Example />, { theme });

        expectMediaRow(media.firstElementChild, '-3px');
        expectInlineRow(inline.firstElementChild, '-3px');
      });

      it('applies the row margins to the rendered icons', () => {
        const { container: media } = render(<Example mediaLayout />);
        const { container: inline } = render(<Example />);
        const mediaIcons = [...media.querySelectorAll('svg')];
        const inlineIcons = [...inline.querySelectorAll('svg')];

        expect(mediaIcons).toHaveLength(2);
        expect(inlineIcons).toHaveLength(2);

        mediaIcons.forEach(icon => {
          const { marginTop, marginBottom, alignSelf } = getComputedStyle(icon);

          expect([marginTop, marginBottom, alignSelf]).toEqual(['-1px', '-1px', 'center']);
        });

        inlineIcons.forEach(icon => {
          const { marginTop, marginBottom, verticalAlign } = getComputedStyle(icon);

          expect([marginTop, marginBottom, verticalAlign]).toEqual(['-1px', '-1px', 'top']);
        });
      });
    });

    it('renders start and end icons at the 20px render size', () => {
      const { getByTestId } = render(
        <FauxInput>
          <FauxInput.StartIcon>
            <TestIcon data-test-id="start" />
          </FauxInput.StartIcon>
          <FauxInput.EndIcon>
            <TestIcon data-test-id="end" />
          </FauxInput.EndIcon>
        </FauxInput>
      );

      ['start', 'end'].forEach(id => {
        expect(getByTestId(id)).toHaveStyleRule('width', DEFAULT_THEME.space.md);
        expect(getByTestId(id)).toHaveStyleRule('height', DEFAULT_THEME.space.md);
      });
    });
  });

  it('does not let props override the garden attributes', () => {
    const { container } = render(<FauxInput data-garden-id="custom" data-garden-version="0.0.0" />);

    expect(container.firstElementChild).toHaveAttribute('data-garden-id', 'forms.faux_input');
    expect(container.firstElementChild).toHaveAttribute('data-garden-version', PACKAGE_VERSION);
  });

  it('renders the state attributes', () => {
    const { container, rerender } = render(<FauxInput />);
    const faux = container.firstElementChild!;

    expect(faux).toHaveAttribute('aria-invalid', 'false');
    expect(faux).not.toHaveAttribute('aria-disabled');
    expect(faux).not.toHaveAttribute('aria-readonly');

    rerender(<FauxInput disabled readOnly validation="error" />);
    expect(faux).toHaveAttribute('aria-invalid', 'true');
    expect(faux).toHaveAttribute('aria-disabled', 'true');
    expect(faux).toHaveAttribute('aria-readonly', 'true');
  });

  describe('validation', () => {
    it.each([
      ['success', 'border.successEmphasis'],
      ['warning', 'border.warningEmphasis'],
      ['error', 'border.dangerEmphasis']
    ] as const)('renders %s border colors', (validation, variable) => {
      const { container } = render(<FauxInput validation={validation} />);
      const color = getColor({ theme: DEFAULT_THEME, variable });

      expect(container.firstChild).toHaveStyleRule('border-color', color);
      expect(container.firstChild).toHaveStyleRule('border-color', color, {
        modifier: '&:focus-within'
      });
    });
  });
});
