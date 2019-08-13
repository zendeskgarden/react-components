/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import hasType from './hasType';
import Button from '../../../buttons/src/components/Button';
import Hint from '../../../ranges/src/views/Hint';

describe('hasType', () => {
  describe('if hasType is provided', () => {
    it('returns true if hasType is valid', () => {
      expect(hasType(<Button>test</Button>, Button)).toBe(true);
    });

    it('returns false otherwise', () => {
      expect(hasType(<Hint>hint</Hint>, Button)).toBe(false);
    });

    it('returns false if provided a falsy value', () => {
      expect(hasType(null, Button)).toBe(false);
    });
  });

  describe('when wrapped with an HOC', () => {
    it('returns true if hasType is valid', () => {
      const StyledButton = styled(Button)`
        text-align: right;
      `;

      expect(hasType(<StyledButton>styled button</StyledButton>, Button)).toBe(true);
    });

    it('returns false otherwise', () => {
      const StyledHint = styled(Hint)`
        text-align: right;
      `;

      expect(hasType(<StyledHint>styled hint</StyledHint>, Button)).toBe(false);
    });
  });
});
