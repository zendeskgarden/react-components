/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { PropsWithChildren } from 'react';
import useDatepickerRangeContext from '../utils/useDatepickerRangeContext';

const End = (props: PropsWithChildren<any>) => {
  const { state, dispatch, endInputRef } = useDatepickerRangeContext();

  return React.cloneElement(React.Children.only(props.children as any), {
    value: state.endInputValue,
    ref: endInputRef,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: 'END_INPUT_ONCHANGE', value: e.target.value });

      props.children.props.onChange && props.children.props.onChange(e);
    },
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => {
      dispatch({ type: 'END_BLUR' });

      props.children.props.onBlur && props.children.props.onBlur(e);
    }
  });
};

export default End;
