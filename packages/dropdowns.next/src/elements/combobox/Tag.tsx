/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { DEFAULT_THEME, useDocument, useText } from '@zendeskgarden/react-theming';
import { Tag as BaseTag } from '@zendeskgarden/react-tags';
import { Tooltip } from '@zendeskgarden/react-tooltips';
import { ITagProps } from '../../types';
import useComboboxContext from '../../context/useComboboxContext';
import { StyledTag } from '../../views';
import { toString } from './utils';

const TagComponent = forwardRef<HTMLDivElement, ITagProps>(
  ({ children, option, removeLabel, ...props }, ref) => {
    const { getTagProps, isCompact } = useComboboxContext();
    const text = option.label || toString(option);
    const ariaLabel = useText(
      /* eslint-disable-next-line @typescript-eslint/no-use-before-define */
      Tag,
      props,
      'aria-label',
      `${text}, press delete or backspace to remove`,
      !option.disabled
    );
    const tagProps = getTagProps<HTMLDivElement>({
      option,
      'aria-label': ariaLabel!
    }) as HTMLAttributes<HTMLDivElement>;
    const theme = useContext(ThemeContext) || DEFAULT_THEME;
    const doc = useDocument(theme);

    return (
      <StyledTag
        aria-disabled={option.disabled}
        tabIndex={option.disabled ? undefined : 0}
        {...tagProps}
        {...props}
        size={isCompact ? 'medium' : 'large'}
        ref={ref}
      >
        {children || <span>{text}</span>}
        {!option.disabled &&
          (removeLabel ? (
            <Tooltip appendToNode={doc?.body} content={removeLabel}>
              <StyledTag.Close aria-label={removeLabel} />
            </Tooltip>
          ) : (
            <StyledTag.Close />
          ))}
      </StyledTag>
    );
  }
);

TagComponent.displayName = 'Tag';

TagComponent.propTypes = {
  hue: PropTypes.string,
  isPill: PropTypes.bool,
  isRegular: PropTypes.bool,
  removeLabel: PropTypes.string
};

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Tag = TagComponent as typeof TagComponent & {
  Avatar: typeof BaseTag.Avatar;
};

Tag.Avatar = BaseTag.Avatar;
