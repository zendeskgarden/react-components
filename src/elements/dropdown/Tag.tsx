/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import { HTMLAttributes, forwardRef, useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { Tooltip } from '../../elements/tooltip/Tooltip';
import { useComboboxContext } from '../../hooks/dropdown/useComboboxContext';
import DEFAULT_THEME from '../../theming/elements/theme';
import { useDocument } from '../../theming/utils/useDocument';
import { useText } from '../../theming/utils/useText';
import { IComboboxTagProps, ITagProps } from '../../types/elements';
import { StyledTag } from '../../views/dropdown/StyledTag';
import { Close } from '../tag/Close';
import { COMPONENT_IDS } from '../utils';
import { TagAvatar } from './TagAvatar';

const TagComponent = forwardRef<HTMLDivElement, IComboboxTagProps>(
  (
    {
      children,
      hue,
      isEmphasis,
      isPill = false,
      isRegular,
      option,
      removeLabel,
      tooltipZIndex,
      ...props
    },
    ref
  ) => {
    const { getTagProps, isCompact, removeSelection } = useComboboxContext();
    const text = option.label || option.value;
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
    const handleClick = () => removeSelection(option.value);
    /*
     * `IComboboxTagProps` omits `isRound` and `size`, but untyped consumers can
     * still pass them: forward `isRound` to the view and drop `size` — the
     * combobox owns tag sizing via `isCompact`.
     */
    const {
      isRound,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      size: _ignoredSize,
      ...viewProps
    } = props as typeof props & Pick<ITagProps, 'isRound' | 'size'>;

    return (
      <StyledTag
        $hue={hue}
        $isEmphasis={isEmphasis}
        $isPill={isPill}
        $isRegular={isRegular}
        $isRound={isRound}
        $size={isCompact ? 'medium' : 'large'}
        aria-disabled={option.disabled}
        tabIndex={option.disabled ? undefined : 0}
        {...tagProps}
        {...viewProps}
        data-garden-id={COMPONENT_IDS['dropdowns.combobox.tag']}
        data-garden-version={PACKAGE_VERSION}
        ref={ref}
      >
        {children || <span>{text}</span>}
        {!option.disabled &&
          (removeLabel ? (
            /* istanbul ignore next */
            <Tooltip appendToNode={doc?.body} content={removeLabel} zIndex={tooltipZIndex}>
              <Close aria-label={removeLabel} onClick={handleClick} />
            </Tooltip>
          ) : (
            <Close onClick={handleClick} />
          ))}
      </StyledTag>
    );
  }
);

TagComponent.displayName = 'Tag';

TagComponent.propTypes = {
  hue: PropTypes.string,
  isEmphasis: PropTypes.bool,
  isPill: PropTypes.bool,
  isRegular: PropTypes.bool,
  isRound: PropTypes.bool,
  removeLabel: PropTypes.string
};

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Tag = TagComponent as typeof TagComponent & {
  Avatar: typeof TagAvatar;
};

Tag.Avatar = TagAvatar;
