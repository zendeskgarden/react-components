/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { math, em } from 'polished';
import { SELECTOR_FOCUS_VISIBLE, componentStyles, getColor, focusStyles, getFocusBoxShadow } from '@zendeskgarden/react-theming';
import { StyledSplitButton } from './StyledSplitButton.js';
import { StyledIcon } from './StyledIcon.js';

const COMPONENT_ID$3 = 'buttons.button';
const getBorderRadius = props => {
  if (props.$isPill) {
    return '100px';
  }
  return props.theme.borderRadii.md;
};
const getHeight = props => {
  if (props.$size === 'small') {
    return `${props.theme.space.base * 8}px`;
  } else if (props.$size === 'large') {
    return `${props.theme.space.base * 12}px`;
  }
  return `${props.theme.space.base * 10}px`;
};
const colorStyles = ({
  theme,
  $isLink,
  $isBasic,
  $isDanger,
  $isNeutral,
  $isPrimary,
  $focusInset
}) => {
  let retVal;
  const disabledBackgroundColor = getColor({
    theme,
    variable: 'background.disabled'
  });
  const disabledForegroundColor = getColor({
    theme,
    variable: 'foreground.disabled'
  });
  const offset100 = {
    dark: {
      offset: -100
    },
    light: {
      offset: 100
    }
  };
  const offset200 = {
    dark: {
      offset: -200
    },
    light: {
      offset: 200
    }
  };
  if ($isLink) {
    const options = {
      theme,
      variable: $isDanger ? 'foreground.danger' : 'foreground.primary'
    };
    const foregroundColor = getColor(options);
    const hoverForegroundColor = getColor({
      ...options,
      ...offset100
    });
    const activeForegroundColor = getColor({
      ...options,
      ...offset200
    });
    const focusOutlineColor = getColor({
      theme,
      variable: 'border.primaryEmphasis'
    });
    retVal = css(["outline-color:transparent;background-color:transparent;color:", ";", " &:hover{color:", ";}&:active,&[aria-pressed='true'],&[aria-pressed='mixed']{color:", ";}&:disabled{color:", ";}"], foregroundColor, focusStyles({
      theme,
      condition: false,
      styles: {
        color: foregroundColor ,
        outlineColor: focusOutlineColor
      }
    }), hoverForegroundColor, activeForegroundColor, disabledForegroundColor);
  } else if ($isPrimary) {
    let backgroundVariable;
    if ($isDanger) {
      backgroundVariable = 'background.dangerEmphasis';
    } else if ($isNeutral) {
      backgroundVariable = 'background.emphasis';
    } else {
      backgroundVariable = 'background.primaryEmphasis';
    }
    const options = {
      theme,
      variable: backgroundVariable
    };
    const backgroundColor = getColor(options);
    const hoverBackgroundColor = getColor({
      ...options,
      ...offset100
    });
    const activeBackgroundColor = getColor({
      ...options,
      ...offset200
    });
    const foregroundColor = getColor({
      theme,
      variable: 'foreground.onEmphasis'
    });
    retVal = css(["outline-color:transparent;background-color:", ";color:", ";&:hover{background-color:", ";}", " &:active,&[aria-pressed='true'],&[aria-pressed='mixed']{background-color:", ";}&:disabled{background-color:", ";color:", ";}"], backgroundColor, foregroundColor, hoverBackgroundColor, focusStyles({
      theme,
      inset: $focusInset,
      shadowWidth: $focusInset ? 'sm' : 'md',
      spacerWidth: $focusInset ? 'sm' : 'xs',
      styles: ($isDanger || $isNeutral) && $focusInset ? {
        borderColor: getColor({
          theme,
          variable: 'border.primaryEmphasis'
        })
      } : undefined
    }), activeBackgroundColor, disabledBackgroundColor, disabledForegroundColor);
  } else {
    let borderColor;
    let hoverBorderColor;
    let activeBorderColor;
    let focusBorderColor;
    let backgroundVariable;
    let foregroundVariable;
    if ($isDanger) {
      if (!$isBasic) {
        const borderOptions = {
          theme,
          variable: 'border.dangerEmphasis'
        };
        borderColor = getColor(borderOptions);
        hoverBorderColor = getColor({
          ...borderOptions,
          ...offset100
        });
        activeBorderColor = getColor({
          ...borderOptions,
          ...offset200
        });
        if ($isNeutral) {
          focusBorderColor = getColor(borderOptions);
        }
      }
      backgroundVariable = 'background.dangerEmphasis';
      foregroundVariable = $isNeutral ? 'foreground.default' : 'foreground.danger';
    } else {
      if (!$isBasic) {
        const borderOptions = {
          theme,
          variable: 'border.primaryEmphasis'
        };
        if ($isNeutral) {
          borderColor = getColor({
            theme,
            variable: 'border.default',
            ...offset100
          });
          hoverBorderColor = getColor(borderOptions);
          focusBorderColor = hoverBorderColor;
          activeBorderColor = getColor({
            ...borderOptions,
            ...offset100
          });
        } else {
          borderColor = getColor(borderOptions);
          hoverBorderColor = getColor({
            ...borderOptions,
            ...offset100
          });
          activeBorderColor = getColor({
            ...borderOptions,
            ...offset200
          });
        }
      }
      backgroundVariable = 'background.primaryEmphasis';
      foregroundVariable = $isNeutral ? 'foreground.default' : 'foreground.primary';
    }
    const hoverBackgroundColor = getColor({
      theme,
      variable: backgroundVariable,
      transparency: theme.opacity[100]
    });
    const activeBackgroundColor = getColor({
      theme,
      variable: backgroundVariable,
      transparency: theme.opacity[200]
    });
    const foregroundOptions = {
      theme,
      variable: foregroundVariable
    };
    const foregroundColor = getColor(foregroundOptions);
    let hoverForegroundColor;
    let activeForegroundColor;
    let iconForegroundColor;
    let hoverIconForegroundColor;
    let activeIconForegroundColor;
    if ($isNeutral) {
      const iconOptions = {
        theme,
        variable: 'foreground.subtle'
      };
      iconForegroundColor = getColor(iconOptions);
      hoverIconForegroundColor = getColor({
        ...iconOptions,
        ...offset100
      });
      activeIconForegroundColor = getColor({
        ...iconOptions,
        ...offset200
      });
    } else {
      hoverForegroundColor = getColor({
        ...foregroundOptions,
        ...offset100
      });
      activeForegroundColor = getColor({
        ...foregroundOptions,
        ...offset200
      });
    }
    retVal = css(["outline-color:transparent;border-color:", ";background-color:transparent;color:", ";&:hover{border-color:", ";background-color:", ";color:", ";}", " &:active,&[aria-pressed='true'],&[aria-pressed='mixed']{border-color:", ";background-color:", ";color:", ";}&:disabled{border-color:transparent;background-color:", ";color:", ";}& ", "{color:", ";}&:hover ", ",&:focus-visible ", "{color:", ";}&:active ", "{color:", ";}&:disabled ", "{color:", ";}"], borderColor, foregroundColor, hoverBorderColor, hoverBackgroundColor, hoverForegroundColor, focusStyles({
      theme,
      inset: $focusInset,
      styles: {
        borderColor: focusBorderColor
      }
    }), activeBorderColor, activeBackgroundColor, activeForegroundColor, disabledBackgroundColor, disabledForegroundColor, StyledIcon, iconForegroundColor, StyledIcon, StyledIcon, hoverIconForegroundColor, StyledIcon, activeIconForegroundColor, StyledIcon, disabledForegroundColor);
  }
  return retVal;
};
const groupStyles = ({
  theme,
  $isPrimary,
  $isBasic,
  $isPill,
  $focusInset
}) => {
  const {
    rtl,
    borderWidths,
    borders
  } = theme;
  const startPosition = rtl ? 'right' : 'left';
  const endPosition = rtl ? 'left' : 'right';
  const marginOffset = borderWidths.sm;
  const marginDisplacement = `${$isPrimary || $isBasic ? '' : '-'}${marginOffset}`;
  const iconMarginDisplacement = $isPill && '-2px';
  const disabledBackgroundColor = !$isPrimary && getColor({
    theme,
    variable: 'background.disabled'
  });
  const borderColor = $isBasic ? 'transparent' : 'revert';
  const focusColor = getColor({
    theme,
    variable: 'border.primaryEmphasis'
  });
  const focusBoxShadow = $isBasic && !$isPrimary && getFocusBoxShadow({
    theme,
    inset: $focusInset,
    spacerColor: {
      hue: focusColor
    },
    color: {
      hue: 'transparent'
    }
  });
  return css(["position:relative;transition:border-color 0.1s ease-in-out,background-color 0.1s ease-in-out,box-shadow 0.1s ease-in-out,color 0.1s ease-in-out,margin-", " 0.1s ease-in-out,outline-color 0.1s ease-in-out,z-index 0.25s ease-in-out;border:", " ", ";", "{border-color:", ";box-shadow:", ";}&:hover,&:active,", "{z-index:1;}&:disabled{z-index:-1;background-color:", ";}&:not(:first-of-type){margin-", ":", ";}&:not(:first-of-type):disabled{margin-", ":", ";}&:not(:first-of-type):not(:last-of-type){border-radius:0;}&:first-of-type:not(:last-of-type){border-top-", "-radius:0;border-bottom-", "-radius:0;}&:last-of-type:not(:first-of-type){border-top-", "-radius:0;border-bottom-", "-radius:0;}&:first-of-type:not(:last-of-type) ", "{margin-", ":", ";}&:last-of-type:not(:first-of-type) ", "{margin-", ":", ";}"], startPosition, borders.sm, borderColor, SELECTOR_FOCUS_VISIBLE, focusColor, focusBoxShadow, SELECTOR_FOCUS_VISIBLE, disabledBackgroundColor, startPosition, marginDisplacement, startPosition, marginOffset, endPosition, endPosition, startPosition, startPosition, StyledIcon, endPosition, iconMarginDisplacement, StyledIcon, startPosition, iconMarginDisplacement);
};
const iconStyles$1 = props => {
  const $size = props.$size === 'small' ? props.theme.iconSizes.sm : props.theme.iconSizes.md;
  return css(["width:", ";min-width:", ";height:", ";vertical-align:", ";"], $size, $size, $size, props.$isLink && 'middle');
};
const sizeStyles = props => {
  let retVal;
  if (props.$isLink) {
    retVal = css(["padding:0;font-size:inherit;"]);
  } else {
    const height = getHeight(props);
    const lineHeight = math(`${height} - (${props.theme.borderWidths.sm} * 2)`);
    let padding;
    let fontSize;
    if (props.$size === 'small') {
      fontSize = props.theme.fontSizes.sm;
      padding = `${props.theme.space.base * 3}px`;
    } else {
      fontSize = props.theme.fontSizes.md;
      if (props.$size === 'large') {
        padding = `${props.theme.space.base * 5}px`;
      } else {
        padding = `${props.theme.space.base * 4}px`;
      }
    }
    retVal = css(["padding:0 ", ";height:", ";line-height:", ";font-size:", ";"], em(math(`${padding} - ${props.theme.borderWidths.sm}`), fontSize), height, lineHeight, fontSize);
  }
  return retVal;
};
const StyledButton = styled.button.attrs(props => ({
  'data-garden-id': props['data-garden-id'] || COMPONENT_ID$3,
  'data-garden-version': '9.12.3',
  type: props.type || 'button'
})).withConfig({
  displayName: "StyledButton",
  componentId: "sc-qe3ace-0"
})(["display:", ";align-items:", ";justify-content:", ";transition:border-color 0.25s ease-in-out,box-shadow 0.1s ease-in-out,background-color 0.25s ease-in-out,color 0.25s ease-in-out,outline-color 0.1s ease-in-out,z-index 0.25s ease-in-out;margin:0;border:", ";border-radius:", ";cursor:pointer;width:", ";overflow:hidden;text-decoration:", ";text-overflow:ellipsis;white-space:", ";font-family:inherit;font-weight:", ";-webkit-font-smoothing:subpixel-antialiased;box-sizing:border-box;user-select:", ";-webkit-touch-callout:none;", ";&::-moz-focus-inner{border:0;padding:0;}", "{text-decoration:none;}&:hover{text-decoration:", ";}&:active,&[aria-pressed='true'],&[aria-pressed='mixed']{transition:border-color 0.1s ease-in-out,background-color 0.1s ease-in-out,box-shadow 0.1s ease-in-out,color 0.1s ease-in-out,outline-color 0.1s ease-in-out,z-index 0.25s ease-in-out;text-decoration:", ";}", ";&:disabled{cursor:default;text-decoration:", ";}& ", "{", "}", " &&{", "}", ""], props => props.$isLink ? 'inline' : 'inline-flex', props => !props.$isLink && 'center', props => !props.$isLink && 'center', props => `${props.$isLink ? `0px solid` : props.theme.borders.sm} transparent`, props => getBorderRadius(props), props => props.$isStretched ? '100%' : '', props => props.$isUnderlined ? 'underline' : 'none', props => !props.$isLink && 'nowrap', props => props.$isLink ? 'inherit' : props.theme.fontWeights.regular, props => !props.$isLink && 'none', props => sizeStyles(props), SELECTOR_FOCUS_VISIBLE, props => props.$isLink ? 'underline' : 'none', props => props.$isLink ? 'underline' : 'none', props => colorStyles(props), props => props.$isLink && 'none', StyledIcon, props => iconStyles$1(props), StyledSplitButton, props => groupStyles(props), componentStyles);

export { COMPONENT_ID$3 as COMPONENT_ID, StyledButton, getHeight };
