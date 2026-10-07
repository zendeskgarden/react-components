/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useState, useEffect } from 'react';
import { DefaultTheme } from 'styled-components';

export const useDocument = (theme?: Partial<DefaultTheme>) => {
  const [controlledDocument, setControlledDocument] = useState<Document>();

  /**
   * Only reference `document` after initial render to support SSR environments
   */
  useEffect(() => {
    if (theme && theme.document) {
      setControlledDocument(theme.document);
    } else {
      setControlledDocument(document);
    }
  }, [theme]);

  return controlledDocument;
};
