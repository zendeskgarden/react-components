/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createContext, useContext, MutableRefObject } from 'react';
import { IUseFieldPropGetters } from '@zendeskgarden/container-field';

interface IFieldContext extends IUseFieldPropGetters {
  getMessageProps: (messageProps: any) => any;
  isLabelActive: boolean;
  isLabelHovered: boolean;
  setIsLabelHovered: (isLabelHovered: boolean) => void;
  setIsLabelActive: (isLabelActive: boolean) => void;
  multiThumbRangeRef: MutableRefObject<HTMLDivElement | null>;
  setHasHint: (hintPresent: boolean) => void;
  hasHint: boolean;
  setHasMessage: (messagePresent: boolean) => void;
  hasMessage: boolean;
}

export const FieldContext = createContext<IFieldContext | undefined>(undefined);

/**
 * Retrieve Field component context
 */
const useFieldContext = () => {
  const fieldContext = useContext(FieldContext);

  return fieldContext;
};

export default useFieldContext;
