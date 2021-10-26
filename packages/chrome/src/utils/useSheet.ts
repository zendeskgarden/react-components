/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useCallback, useMemo, useState } from 'react';

export const useSheet = ({ isOpen }: any) => {
  // TODO: generate ids
  const [labelId] = useState('title-id');
  const [descriptionId] = useState('description-id');

  const getTitleProps = useCallback(props => ({ ...props, id: labelId }), [labelId]);

  const getDescriptionProps = useCallback(
    props => ({ ...props, id: descriptionId }),
    [descriptionId]
  );

  const getCloseButtonProps = useCallback(
    ({ ...other }) => {
      return {
        'aria-expanded': `${isOpen}`,
        'aria-label': 'Close Side Sheet',
        ...other
      };
    },
    [isOpen]
  );

  const getSheetProps = useCallback(
    (props: any) => ({
      'aria-labelledby': labelId,
      'aria-describedby': descriptionId,
      ...props
    }),
    [labelId, descriptionId]
  );

  return useMemo(
    () => ({
      getTitleProps,
      getDescriptionProps,
      getSheetProps,
      getCloseButtonProps
    }),
    [getTitleProps, getDescriptionProps, getCloseButtonProps, getSheetProps]
  );
};
