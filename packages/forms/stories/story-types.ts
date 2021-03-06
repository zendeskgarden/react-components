/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { VALIDATION } from '../src/utils/validation';

export interface IInputStoryProps {
  isRegular: boolean;
  showHint: boolean;
  showMessage: boolean;
}

export interface ICheckboxStoryProps {
  isRegular: boolean;
  isHidden: boolean;
  showHint: boolean;
  showMessage: boolean;
  validation?: VALIDATION;
}

export interface IRangeStoryProps {
  showHint: boolean;
  showMessage: boolean;
  validation?: VALIDATION;
}

export const INPUT_ARGS = {
  isRegular: false,
  showHint: true,
  showMessage: true
};

export const CHECKBOX_ARGS = {
  indeterminate: false,
  isRegular: false,
  isHidden: false,
  disabled: false,
  showHint: true,
  showMessage: true
};

export const RANGE_ARGS = {
  disabled: false,
  showHint: true,
  showMessage: true,
  step: 10
};

export const INPUT_ARG_TYPES = {
  isRegular: {
    name: 'Regular weight label'
  },
  showHint: {
    name: 'Hint'
  },
  showMessage: {
    name: 'Message'
  },
  isCompact: {
    name: 'Compact'
  },
  isBare: {
    name: 'Bare'
  },
  focusInset: {
    name: 'Focus inset'
  },
  readOnly: {
    name: 'Read only'
  },
  disabled: {
    name: 'Disabled'
  },
  placeholder: {
    name: 'Placeholder'
  },
  type: {
    name: 'Input type'
  },
  validation: {
    name: 'Validation'
  }
};

export const CHECKBOX_ARGS_TYPES = {
  indeterminate: {
    name: 'Indeterminate checkbox'
  },
  isHidden: {
    name: 'Hidden label'
  },
  isRegular: {
    name: 'Regular weight label'
  },
  disabled: {
    name: 'Disabled'
  },
  showHint: {
    name: 'Hint'
  },
  showMessage: {
    name: 'Message'
  },
  validation: {
    name: 'Validation',
    control: {
      type: 'radio',
      options: ['success', 'warning', 'error']
    }
  }
};

export const RANGE_ARG_TYPES = {
  disabled: {
    name: 'Disabled'
  },
  showHint: {
    name: 'Hint'
  },
  showMessage: {
    name: 'Message'
  },
  validation: {
    name: 'Validation',
    control: {
      type: 'radio',
      options: ['success', 'warning', 'error']
    }
  },
  step: {
    name: 'Step',
    control: {
      type: 'select',
      options: [1, 5, 10, 50]
    }
  }
};
