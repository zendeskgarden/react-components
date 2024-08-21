/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { Dropzone } from './Dropzone';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';

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
});
