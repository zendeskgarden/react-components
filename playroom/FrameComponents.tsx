/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Fragment, ReactNode } from 'react';
import { ThemeProvider, IGardenTheme } from '../packages/theming/src';

interface IFrameProps {
  theme: IGardenTheme;
  children: ReactNode;
}

const FrameComponents = ({ theme, children }: IFrameProps) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <style>{`html,body { margin: 0; }`}</style>
        {children}
      </>
    </ThemeProvider>
  );
};

export default FrameComponents;
