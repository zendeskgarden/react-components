/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { getColor } from '@zendeskgarden/react-theming';
import { StyledTextFauxInput } from './StyledTextFauxInput';

describe('StyledTextInput', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledTextFauxInput />);

    expect(container.firstChild!.nodeName).toBe('DIV');
    expect(container.firstChild).toHaveStyleRule('display', 'inline-block');
  });

  it('renders media layout styling if provided', () => {
    const { container } = render(<StyledTextFauxInput mediaLayout />);

    expect(container.firstChild).toHaveStyleRule('display', 'inline-flex');
  });

  it('renders compact styling if provided', () => {
    const { container } = render(<StyledTextFauxInput isCompact />);

    expect(container.firstChild).toHaveStyleRule('min-height', '32px');
  });

  it('renders bare styling if provided', () => {
    const { container } = render(<StyledTextFauxInput isBare />);

    expect(container.firstChild).toHaveStyleRule('border', 'none');
  });

  it('renders expected disabled styling', () => {
    const { container } = render(<StyledTextFauxInput isDisabled />);

    expect(container.firstChild).toHaveAttribute('aria-disabled');
    expect(container.firstChild).toHaveStyleRule('border-color', getColor('neutralHue', 300));
  });

  describe('Validation', () => {
    it('renders "success" styling if provided', () => {
      const { container } = render(<StyledTextFauxInput validation="success" />);

      expect(container.firstChild).toHaveStyleRule('border-color', getColor('successHue', 600));
    });

    it('renders "warning" styling if provided', () => {
      const { container } = render(<StyledTextFauxInput validation="warning" />);

      expect(container.firstChild).toHaveStyleRule('border-color', getColor('warningHue', 600));
    });

    it('renders "error" styling if provided', () => {
      const { container } = render(<StyledTextFauxInput validation="error" />);

      expect(container.firstChild).toHaveStyleRule('border-color', getColor('dangerHue', 600));
    });
  });
});
