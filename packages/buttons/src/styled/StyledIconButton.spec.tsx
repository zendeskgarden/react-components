/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { css } from 'styled-components';
import { render } from 'garden-test-utils';
import { COMPONENT_ID, StyledIconButton } from './StyledIconButton';
import { StyledIcon } from './StyledIcon';
import { PALETTE } from '@zendeskgarden/react-theming';
import { rgba } from 'polished';

describe('StyledIconButton', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledIconButton />);

    expect(container.firstChild!.nodeName).toBe('BUTTON');
  });

  it('renders default styling', () => {
    const { container } = render(<StyledIconButton />);

    expect(container.firstChild).toHaveStyleRule('padding', '0');
  });

  it('renders basic color styling', () => {
    const { container } = render(<StyledIconButton isBasic />);

    expect(container.firstChild).toHaveStyleRule('color', PALETTE.grey[900]);
  });

  describe('disabled', () => {
    it('renders expected styling', () => {
      const { container } = render(<StyledIconButton disabled />);

      expect(container.firstChild).toHaveStyleRule('background-color', 'transparent', {
        modifier: ':disabled'
      });
    });

    it('renders expected primary styling', () => {
      const { container } = render(<StyledIconButton disabled isPrimary />);

      expect(container.firstChild).toHaveStyleRule(
        'background-color',
        rgba(PALETTE.grey[700], 0.08),
        {
          modifier: ':disabled'
        }
      );
    });
  });

  describe('Sizes', () => {
    it('renders small styling if provided', () => {
      const { container } = render(<StyledIconButton size="small" />);

      expect(container.firstChild).toHaveStyleRule('width', '32px');
      expect(container.firstChild).toHaveStyleRule('width', '16px', {
        modifier: css`
          ${StyledIcon}
        ` as unknown as string
      });
    });

    it('renders medium styling if provided', () => {
      const { container } = render(<StyledIconButton size="medium" />);

      expect(container.firstChild).toHaveStyleRule('width', '40px');
      expect(container.firstChild).toHaveStyleRule('width', '16px', {
        modifier: css`
          ${StyledIcon}
        ` as unknown as string
      });
    });

    it('renders large styling if provided', () => {
      const { container } = render(<StyledIconButton size="large" />);

      expect(container.firstChild).toHaveStyleRule('width', '48px');
      expect(container.firstChild).toHaveStyleRule('width', '16px', {
        modifier: css`
          ${StyledIcon}
        ` as unknown as string
      });
    });
  });

  describe('`data-garden-id` attribute', () => {
    it('has the correct `data-garden-id`', () => {
      const { container } = render(<StyledIconButton />);

      expect(container.firstChild).toHaveAttribute('data-garden-id', COMPONENT_ID);
    });
  });
});
