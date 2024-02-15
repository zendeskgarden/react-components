/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { rgba } from 'polished';
import { render, renderRtl } from 'garden-test-utils';
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

  describe('Dropzone.Icon', () => {
    it('passes ref to underlying DOM element', () => {
      const ref = React.createRef<HTMLDivElement>();
      const { queryByTestId } = render(
        <Dropzone>
          <Dropzone.Icon data-test-id="icon" ref={ref} />
        </Dropzone>
      );

      expect(queryByTestId('icon')).toBe(ref.current);
    });

    it('renders the expected element', () => {
      const { queryByTestId } = render(
        <Dropzone>
          <Dropzone.Icon data-test-id="icon" />
        </Dropzone>
      );

      expect(queryByTestId('icon')!.nodeName).toBe('DIV');
    });

    it('renders as aria-hidden', () => {
      const { queryByTestId } = render(
        <Dropzone>
          <Dropzone.Icon data-test-id="icon" />
        </Dropzone>
      );

      expect(queryByTestId('icon')).toHaveAttribute('aria-hidden', 'true');
    });

    it('renders danger icon', () => {
      const { container } = render(
        <Dropzone isDanger>
          <Dropzone.Message>Danger</Dropzone.Message>
        </Dropzone>
      );

      expect(container.querySelector('svg')).not.toBeNull();
    });

    it('does not render danger icon if custom icon is provided', () => {
      const { container } = render(
        <Dropzone isDanger>
          <Dropzone.Icon>
            <svg />
          </Dropzone.Icon>
          <Dropzone.Message>Danger</Dropzone.Message>
        </Dropzone>
      );

      expect([...container.querySelectorAll('svg')]).toHaveLength(1);
    });

    it('renders correct icon margin', () => {
      const { queryByTestId } = render(
        <Dropzone>
          <Dropzone.Icon data-test-id="icon">
            <svg />
          </Dropzone.Icon>
          <Dropzone.Message>Message</Dropzone.Message>
        </Dropzone>
      );

      expect(queryByTestId('icon')).toHaveStyle(`margin-right: ${DEFAULT_THEME.space.xs}`);
    });

    it('renders correct icon margin in RTL', () => {
      const { queryByTestId } = renderRtl(
        <Dropzone>
          <Dropzone.Icon data-test-id="icon">
            <svg />
          </Dropzone.Icon>
          <Dropzone.Message>Message</Dropzone.Message>
        </Dropzone>
      );

      expect(queryByTestId('icon')).toHaveStyle(`margin-left: ${DEFAULT_THEME.space.xs}`);
    });

    it('renders correct icon margin when vertical', () => {
      const { queryByTestId } = render(
        <Dropzone isVertical>
          <Dropzone.Icon data-test-id="icon">
            <svg />
          </Dropzone.Icon>
          <Dropzone.Message>Message</Dropzone.Message>
        </Dropzone>
      );

      expect(queryByTestId('icon')).toHaveStyle(`margin-bottom: ${DEFAULT_THEME.space.xs}`);
    });
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
        background-color: ${getColor('neutralHue', 200, DEFAULT_THEME)};
        color: ${getColor('neutralHue', 400, DEFAULT_THEME)};
        border-color: ${getColor('neutralHue', 300, DEFAULT_THEME)};
      `
    },
    default: {
      base: `
        background-color: transparent;
        color: ${neutralColor};
        border-color: ${neutralColor};
      `,
      active: `
        background-color: ${primaryBgColor};
        color: ${primaryColor};
        border-color: ${primaryColor};
      `,
      highlight: `
        background-color: ${primaryBgColor};
        color: ${primaryDarkColor};
        border-color: ${primaryColor};
        border-width: 2px;
        border-style: solid;
      `
    },
    danger: {
      base: `
        background-color: transparent;
        color: ${dangerColor};
        border-color: ${dangerColor};
      `,
      active: `
        background-color: ${dangerBgColor};
        color: ${dangerColor};
        border-color: ${dangerColor};
      `,
      highlight: `
        background-color: ${dangerBgColor};
        color: ${dangerDarkColor};
        border-color: ${dangerColor};
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
