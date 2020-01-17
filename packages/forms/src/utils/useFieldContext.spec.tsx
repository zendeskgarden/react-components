/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { Field } from '../elements/common/Field';
import useFieldContext from './useFieldContext';

describe('useFieldContext', () => {
  const FieldContextConsumer = () => {
    const context = useFieldContext();

    return <div>{context && 'it worked'}</div>;
  };

  it('throws if called outside of Field component', () => {
    /* eslint-disable no-console */
    const originalError = console.error;

    console.error = jest.fn();

    const Example = () => <FieldContextConsumer />;

    expect(() => {
      render(<Example />);
    }).toThrow();

    console.error = originalError;
  });

  it('does not throw if called within Field component', () => {
    const Example = () => (
      <Field>
        <FieldContextConsumer />
      </Field>
    );

    expect(() => {
      render(<Example />);
    }).not.toThrow();
  });
});
