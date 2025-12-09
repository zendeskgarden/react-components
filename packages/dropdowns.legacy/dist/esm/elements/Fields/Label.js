/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default from 'react';
import PropTypes from 'prop-types';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import { Label as Label$1 } from '@zendeskgarden/react-forms';
import useDropdownContext from '../../utils/useDropdownContext.js';
import useFieldContext from '../../utils/useFieldContext.js';

const Label = React__default.forwardRef((_ref, ref) => {
  let {
    onMouseEnter,
    onMouseLeave,
    ...other
  } = _ref;
  const {
    downshift: {
      getLabelProps
    }
  } = useDropdownContext();
  const {
    setIsLabelHovered
  } = useFieldContext();
  const labelProps = getLabelProps({
    onMouseEnter: composeEventHandlers(onMouseEnter, () => {
      setIsLabelHovered(true);
    }),
    onMouseLeave: composeEventHandlers(onMouseLeave, () => {
      setIsLabelHovered(false);
    }),
    ...other
  });
  return React__default.createElement(Label$1, Object.assign({
    ref: ref
  }, labelProps));
});
Label.displayName = 'Label';
Label.propTypes = {
  isRegular: PropTypes.bool
};

export { Label };
