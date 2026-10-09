/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useContext } from 'react';

import { UnorderedListContext } from '../../context/typography/UnorderedListContext';

/**
 * Retrieve UnorderedList component context
 */
export const useUnorderedListContext = () => {
  const listContext = useContext(UnorderedListContext);

  if (!listContext) {
    throw new Error('This component must be rendered within an `UnorderedList` component.');
  }

  return listContext;
};
