/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { rgba } from 'polished';
import { render } from 'garden-test-utils';
import { Dropzone } from './Dropzone';
import { DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';

describe('Dropzone', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(<Dropzone ref={ref} />);

    expect(container.firstChild!).toBe(ref.current);
  });

  it('renders the expected element', () => {
    const { container } = render(<Dropzone />);

    expect(container.firstChild!.nodeName).toBe('DIV');
  });

  it('renders with custom tag', () => {
    const { container } = render(<Dropzone tag="section" />);

    expect(container.firstChild!.nodeName).toBe('SECTION');
  });

  it('renders aria-disabled="true" if disabled', () => {
    const { container } = render(<Dropzone isDisabled />);

    expect(container.firstChild).toHaveAttribute('aria-disabled', 'true');
  });

  describe('Dropzone.Message', () => {
    it('passes ref to underlying DOM element', () => {
      const ref = React.createRef<HTMLParagraphElement>();
      const { queryByText } = render(
        <Dropzone>
          <Dropzone.Message ref={ref}>message</Dropzone.Message>
        </Dropzone>
      );

      expect(queryByText('message')).toBe(ref.current);
    });

    it('renders the expected element', () => {
      const { queryByText } = render(
        <Dropzone>
          <Dropzone.Message>message</Dropzone.Message>
        </Dropzone>
      );

      expect(queryByText('message')!.nodeName).toBe('P');
    });
  });

  const STATES = ['default', 'danger', 'disabled'];
  const dangerColor = getColor('dangerHue', 600, DEFAULT_THEME);
  const dangerDarkColor = getColor('dangerHue', 800, DEFAULT_THEME);
  const dangerBgColor = rgba(getColor('dangerHue', 600, DEFAULT_THEME) as string, 0.08);
  const primaryColor = getColor('primaryHue', 600, DEFAULT_THEME);
  const primaryDarkColor = getColor('primaryHue', 800, DEFAULT_THEME);
  const primaryBgColor = rgba(getColor('primaryHue', 600, DEFAULT_THEME) as string, 0.08);
  const neutralColor = getColor('neutralHue', 600, DEFAULT_THEME);

  const StateMap: Record<string, any> = {
    disabled: {
      base: `
        backgroundColor: ${getColor('neutralHue', 200, DEFAULT_THEME)};
        borderColor: ${getColor('neutralHue', 300, DEFAULT_THEME)};
        color: ${getColor('neutralHue', 400, DEFAULT_THEME)};
      `
    },
    default: {
      base: `
        backgroundColor: transparent;
        borderColor: ${neutralColor};
        color: ${neutralColor};
      `,
      active: `
        backgroundColor: ${primaryBgColor};
        borderColor: ${primaryColor};
        color: ${primaryColor};
      `,
      highlight: `
        backgroundColor: ${primaryBgColor};
        borderColor: ${primaryColor};
        color: ${primaryDarkColor};
        border-width: 2px;
        border-style: solid;
      `
    },
    danger: {
      base: `
        backgroundColor: transparent;
        borderColor: ${dangerColor};
        color: ${dangerColor};
      `,
      active: `
        backgroundColor: ${dangerBgColor};
        borderColor: ${dangerColor};
        color: ${dangerColor};
      `,
      highlight: `
        backgroundColor: ${dangerBgColor};
        borderColor: ${dangerColor};
        color: ${dangerDarkColor};
        border-width: 2px;
        border-style: solid;
      `
    }
  };

  describe.each(STATES)(`%s state`, state => {
    it('applies correct base styling', () => {
      const { container } = render(
        <Dropzone isDanger={state === 'danger'} isDisabled={state === 'disabled'} />
      );

      expect(container.firstChild).toHaveStyle(StateMap[state].base);
    });

    if (StateMap[state].active) {
      it('applies correct active styling', () => {
        const { container } = render(
          <Dropzone isDanger={state === 'danger'} isDisabled={state === 'disabled'} isActive />
        );

        expect(container.firstChild).toHaveStyle(StateMap[state].active);
      });
    }

    if (StateMap[state].highlight) {
      it('applies correct highlight styling', () => {
        const { container } = render(
          <Dropzone isDanger={state === 'danger'} isDisabled={state === 'disabled'} isHighlighted />
        );

        expect(container.firstChild).toHaveStyle(StateMap[state].highlight);
      });
    }
  });
});
