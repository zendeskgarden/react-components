/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createContext, useCallback, useContext, useLayoutEffect, useRef, useState } from 'react';
import { Validation } from '../types';

type InputGroupValidationId = object;

interface IInputGroupContext {
  isCompact?: boolean;
  isUnified?: boolean;
  /** Registers a child Input's validation with the nearest unified group. */
  registerValidation: (id: InputGroupValidationId, validation?: Validation) => void;
}

export const InputGroupContext = createContext<IInputGroupContext | undefined>(undefined);

/**
 * Retrieve InputGroup component context
 */
export const useInputGroupContext = () => {
  return useContext(InputGroupContext);
};

const deriveValidation = (map: Map<InputGroupValidationId, Validation>) => {
  let derived: Validation | undefined;

  map.forEach(value => {
    derived = value;
  });

  return derived;
};

/**
 * Owns the validation published by nested `Input`s so `InputGroup` can pass
 * `$validation` to its view without inspecting children or stamping DOM attributes.
 * A unified group supports a single validation-bearing `Input`; a second one
 * triggers a development warning, while the Map keeps last-wins and
 * unmount-restore behavior so the unsupported composition degrades gracefully.
 */
export const useInputGroupValidationState = () => {
  const validationsRef = useRef(new Map<InputGroupValidationId, Validation>());
  const [validation, setValidation] = useState<Validation | undefined>();
  const registerValidation = useCallback((id: InputGroupValidationId, next?: Validation) => {
    const map = validationsRef.current;

    if (next === undefined) {
      if (!map.has(id)) {
        return;
      }

      map.delete(id);
    } else if (map.get(id) === next) {
      return;
    } else {
      if (!map.has(id) && map.size > 0 && process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.warn(
          'Warning: a unified <InputGroup> supports a single Input with a `validation` prop. Multiple validation-bearing Inputs produce an ambiguous container validation state. Render a single Input per unified group, or use the classic InputGroup for multi-input layouts.'
        );
      }

      map.set(id, next);
    }

    const derived = deriveValidation(map);

    setValidation(prev => (prev === derived ? prev : derived));
  }, []);

  return { validation, registerValidation };
};

/**
 * Publishes `validation` to the nearest unified `InputGroup` so the container
 * can style its chrome from `$validation` without a public DOM attribute.
 * No-ops outside a group, and for the classic (non-unified) variant.
 */
export const usePublishInputGroupValidation = (validation?: Validation) => {
  const context = useInputGroupContext();
  const id = useRef<InputGroupValidationId>({});
  const { registerValidation, isUnified } = context || {};

  useLayoutEffect(() => {
    if (!registerValidation || !isUnified) {
      return undefined;
    }

    const validationId = id.current;

    registerValidation(validationId, validation);

    return () => {
      registerValidation(validationId, undefined);
    };
  }, [isUnified, registerValidation, validation]);
};
