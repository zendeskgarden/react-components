/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { VALIDATION } from '../src/utils/validation';

export type EXTENSION = 'pdf' | 'zip' | 'image' | 'document' | 'spreadsheet' | 'presentation';

export interface IInputStoryProps {
  isHidden: boolean;
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

export interface IFieldsetStoryProps {
  isHidden: boolean;
  showHint: boolean;
  showMessage: boolean;
  validation?: VALIDATION;
  isCompact?: boolean;
}

export interface IFileUploadStoryProps {
  isHidden: false;
  showHint: boolean;
  showMessage: boolean;
  validation: VALIDATION;
  type?: EXTENSION;
}

export interface IFileListStoryProps {
  focusInset: boolean;
  includeProgress: boolean;
  isCompact: boolean;
  type: EXTENSION;
  remove?: 'close' | 'delete';
}

export interface IRangeStoryProps {
  isRegular: boolean;
  isHidden: boolean;
  showHint: boolean;
  showMessage: boolean;
  validation?: VALIDATION;
}

export const INPUT_ARGS = {
  isRegular: false,
  isHidden: false,
  showHint: true,
  showMessage: true
};

export const FILE_UPLOAD_ARGS = {
  showHint: true,
  showMessage: false,
  type: 'image' as EXTENSION
};

export const FILE_LIST_ARGS = {
  focusInset: false,
  includeProgress: false,
  isCompact: false,
  type: 'image' as EXTENSION
};

export const FIELDSET_ARGS = {
  isHidden: false,
  disabled: false,
  showHint: false,
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
  isRegular: false,
  isHidden: false,
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
  isHidden: {
    name: 'Hidden label'
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

export const FIELDSET_ARGS_TYPES = {
  isHidden: {
    name: 'Hidden legend'
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

export const FILE_UPLOAD_ARG_TYPES = {
  isHidden: {
    name: 'Hidden label'
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
  isDragging: {
    table: {
      disable: true
    }
  },
  type: {
    control: {
      type: 'select',
      options: ['pdf', 'zip', 'image', 'document', 'spreadsheet', 'presentation', undefined]
    }
  }
};

export const FILE_LIST_ARG_TYPES = {
  focusInset: {
    name: 'Inset File box-shadow'
  },
  includeProgress: {
    name: 'Include Progress'
  },
  type: {
    control: {
      type: 'select',
      options: ['pdf', 'zip', 'image', 'document', 'spreadsheet', 'presentation', undefined]
    }
  },
  remove: {
    control: {
      type: 'radio',
      options: ['close', 'delete', undefined]
    }
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
  isCompact: {
    name: 'Compact'
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
  },
  step: {
    name: 'Step',
    control: {
      type: 'select',
      options: [1, 5, 10, 50]
    }
  }
};
