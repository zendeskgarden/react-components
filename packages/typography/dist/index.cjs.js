/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
'use strict';

var React = require('react');
var PropTypes = require('prop-types');
var styled = require('styled-components');
var reactTheming = require('@zendeskgarden/react-theming');
var polished = require('polished');
var Highlight = require('prism-react-renderer');
var containerScrollregion = require('@zendeskgarden/container-scrollregion');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var PropTypes__default = /*#__PURE__*/_interopDefault(PropTypes);
var styled__default = /*#__PURE__*/_interopDefault(styled);
var Highlight__default = /*#__PURE__*/_interopDefault(Highlight);

const HUE = ['grey', 'red', 'green', 'yellow'];
const SIZE = ['small', 'medium', 'large'];
const INHERIT_SIZE = ['inherit', ...SIZE];
const TYPE_ORDERED_LIST = ['decimal', 'decimal-leading-zero', 'lower-alpha', 'lower-roman', 'upper-alpha', 'upper-roman'];
const TYPE_UNORDERED_LIST = ['circle', 'disc', 'square'];
const LANGUAGES = ['bash', 'css', 'diff', 'graphql', 'javascript', 'json', 'jsx', 'markdown', 'markup', 'python', 'typescript', 'tsx', 'yaml'];

const COMPONENT_ID$a = 'typography.font';
[...SIZE, 'extralarge', '2xlarge', '3xlarge'];
const THEME_SIZES = {
  small: 'sm',
  medium: 'md',
  large: 'lg',
  extralarge: 'xl',
  '2xlarge': 'xxl',
  '3xlarge': 'xxxl'
};
const fontStyles = ({
  $hue,
  $isBold,
  $isMonospace,
  $size,
  theme
}) => {
  const monospace = $isMonospace && ['inherit', 'small', 'medium', 'large'].indexOf($size) !== -1;
  const fontFamily = monospace && theme.fonts.mono;
  const direction = theme.rtl ? 'rtl' : 'ltr';
  let fontSize;
  let fontWeight;
  let lineHeight;
  let color;
  if (monospace) {
    if ($size === 'inherit') {
      fontSize = 'calc(1em - 1px)';
      lineHeight = 'normal';
    } else {
      const themeSize = THEME_SIZES[$size];
      fontSize = polished.math(`${theme.fontSizes[themeSize]} - 1px`);
      lineHeight = polished.math(`${theme.lineHeights[themeSize]} - 1px`);
    }
  } else if ($size !== 'inherit') {
    const themeSize = THEME_SIZES[$size];
    fontSize = theme.fontSizes[themeSize];
    lineHeight = theme.lineHeights[themeSize];
  }
  if ($isBold === true) {
    fontWeight = theme.fontWeights.semibold;
  } else if ($isBold === false || $size !== 'inherit') {
    fontWeight = theme.fontWeights.regular;
  }
  if ($hue) {
    const options = $hue.includes('.') ? {
      variable: $hue,
      theme
    } : {
      hue: $hue,
      theme
    };
    color = reactTheming.getColor(options);
  }
  return styled.css(["transition:color 0.1s ease-in-out;line-height:", ";color:", ";font-family:", ";font-size:", ";font-weight:", ";direction:", ";"], lineHeight, color, fontFamily, fontSize, fontWeight, direction);
};
const StyledFont = styled__default.default.div.attrs(props => ({
  'data-garden-id': COMPONENT_ID$a,
  'data-garden-version': '9.12.3',
  $size: props.$size ?? 'inherit'
})).withConfig({
  displayName: "StyledFont",
  componentId: "sc-1iildbo-0"
})(["", ";&[hidden]{display:inline;", ";}", ";"], props => !props.hidden && fontStyles(props), polished.hideVisually(), reactTheming.componentStyles);

const COMPONENT_ID$9 = 'typography.blockquote';
const StyledBlockquote = styled__default.default.blockquote.attrs({
  'data-garden-id': COMPONENT_ID$9,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledBlockquote",
  componentId: "sc-1tt3ye0-0"
})(["margin:0;border-", ":", " solid;border-color:", ";padding:0;padding-", ":", "px;direction:", ";& + &,p + &{margin-top:", ";}", ";"], props => props.theme.rtl ? 'right' : 'left', props => props.theme.shadowWidths.sm, props => reactTheming.getColor({
  theme: props.theme,
  variable: 'border.default'
}), props => props.theme.rtl ? 'right' : 'left', props => props.theme.space.base * 4, props => props.theme.rtl ? 'rtl' : 'ltr', props => props.theme.lineHeights[THEME_SIZES[props.size]], reactTheming.componentStyles);

const COMPONENT_ID$8 = 'typography.code';
const colorStyles$3 = ({
  $hue,
  theme
}) => {
  const bgColorArgs = {
    theme,
    light: {
      offset: 100
    },
    dark: {
      offset: -100
    }
  };
  const fgColorArgs = {
    theme
  };
  switch ($hue) {
    case 'green':
      bgColorArgs.variable = 'background.success';
      fgColorArgs.variable = 'foreground.successEmphasis';
      break;
    case 'red':
      bgColorArgs.variable = 'background.danger';
      fgColorArgs.variable = 'foreground.dangerEmphasis';
      break;
    case 'yellow':
      bgColorArgs.variable = 'background.warning';
      fgColorArgs.variable = 'foreground.warningEmphasis';
      break;
    default:
      fgColorArgs.variable = 'foreground.default';
      bgColorArgs.variable = 'background.subtle';
      break;
  }
  const backgroundColor = reactTheming.getColor(bgColorArgs);
  const foregroundColor = reactTheming.getColor(fgColorArgs);
  return styled.css(["background-color:", ";color:", ";a &{color:inherit;}"], backgroundColor, foregroundColor);
};
const StyledCode = styled__default.default(StyledFont).attrs(props => ({
  'data-garden-id': COMPONENT_ID$8,
  'data-garden-version': '9.12.3',
  as: 'code',
  $isMonospace: true,
  $hue: props.$hue ?? 'grey',
  $size: props.$size ?? 'inherit'
})).withConfig({
  displayName: "StyledCode",
  componentId: "sc-l8yvmf-0"
})(["border-radius:", ";padding:1.5px;", ";", ";"], props => props.theme.borderRadii.sm, props => colorStyles$3(props), reactTheming.componentStyles);

const COMPONENT_ID$7 = 'typography.codeblock';
const colorStyles$2 = ({
  theme
}) => {
  const backgroundColor = reactTheming.getColor({
    theme,
    variable: 'background.recessed'
  });
  const foregroundColor = reactTheming.getColor({
    theme,
    variable: 'foreground.default'
  });
  return styled.css(["background-color:", ";color:", ";"], backgroundColor, foregroundColor);
};
const StyledCodeBlock = styled__default.default.pre.attrs({
  'data-garden-id': COMPONENT_ID$7,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledCodeBlock",
  componentId: "sc-5wky57-0"
})(["display:table;margin:0;padding:", "px;box-sizing:border-box;width:100%;direction:ltr;white-space:pre;counter-reset:linenumber;", ";", ";"], props => props.theme.space.base * 3, colorStyles$2, reactTheming.componentStyles);

const COMPONENT_ID$6 = 'typography.codeblock_container';
const StyledCodeBlockContainer = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$6,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledCodeBlockContainer",
  componentId: "sc-14zgbfw-0"
})(["transition:box-shadow 0.1s ease-in-out;overflow:auto;", " ", ";"], props => reactTheming.focusStyles({
  theme: props.theme
}), reactTheming.componentStyles);

const COMPONENT_ID$5 = 'typography.codeblock_code';
const colorStyles$1 = ({
  theme,
  $diff,
  $isHighlighted
}) => {
  let backgroundColor;
  if ($diff) {
    const hues = {
      hunk: 'royal',
      add: 'lime',
      delete: 'crimson',
      change: 'lemon'
    };
    backgroundColor = reactTheming.getColor({
      theme,
      hue: hues[$diff],
      dark: {
        shade: 600
      },
      light: {
        shade: 400
      },
      transparency: theme.opacity[300]
    });
  } else if ($isHighlighted) {
    backgroundColor = reactTheming.getColor({
      theme,
      dark: {
        hue: 'white'
      },
      light: {
        hue: 'neutralHue',
        shade: 700
      },
      transparency: theme.opacity[100]
    });
  }
  return styled.css(["background-color:", ";"], backgroundColor);
};
const lineNumberStyles = ({
  theme,
  $language,
  $size
}) => {
  const color = reactTheming.getColor({
    theme,
    variable: 'foreground.subtle',
    light: {
      offset: -100
    }
  });
  let padding;
  if ($language && $language === 'diff') {
    padding = 0;
  } else if ($size === 'small') {
    padding = theme.space.base * 4;
  } else if ($size === 'large') {
    padding = theme.space.base * 7;
  } else {
    padding = theme.space.base * 6;
  }
  return `
    &::before {
      display: table-cell;
      padding-right: ${padding}px;
      width: 1px;
      text-align: right;
      color: ${color};
      content: counter(linenumber);
      counter-increment: linenumber;
    }
  `;
};
const StyledCodeBlockLine = styled__default.default(StyledFont).attrs({
  'data-garden-id': COMPONENT_ID$5,
  'data-garden-version': '9.12.3',
  as: 'code',
  $isMonospace: true
}).withConfig({
  displayName: "StyledCodeBlockLine",
  componentId: "sc-1goay17-0"
})(["display:table-row;height:", ";direction:ltr;", ";", ";&::after{display:inline-block;width:", "px;content:'';}", ";"], props => props.theme.lineHeights[THEME_SIZES[props.$size]], colorStyles$1, props => props.$isNumbered && lineNumberStyles(props), props => props.theme.space.base * 3, reactTheming.componentStyles);

const COMPONENT_ID$4 = 'typography.codeblock_token';
const colorStyles = ({
  theme
}) => {
  const colors = {
    boolean: reactTheming.getColor({
      theme,
      dark: {
        hue: 'azure',
        shade: 600
      },
      light: {
        hue: 'royal',
        shade: 700
      }
    }),
    builtin: reactTheming.getColor({
      theme,
      hue: 'teal',
      dark: {
        shade: 600
      },
      light: {
        shade: 700
      }
    }),
    comment: reactTheming.getColor({
      theme,
      dark: {
        hue: 'mint',
        shade: 600
      },
      light: {
        hue: 'lime',
        shade: 700
      }
    }),
    constant: reactTheming.getColor({
      theme,
      dark: {
        hue: 'blue',
        shade: 600
      },
      light: {
        hue: 'azure',
        shade: 700
      }
    }),
    coord: reactTheming.getColor({
      theme,
      hue: 'blue',
      dark: {
        shade: 200
      },
      light: {
        shade: 800
      }
    }),
    deleted: reactTheming.getColor({
      theme,
      hue: 'red',
      dark: {
        shade: 200
      },
      light: {
        shade: 800
      }
    }),
    diff: reactTheming.getColor({
      theme,
      hue: 'yellow',
      dark: {
        shade: 200
      },
      light: {
        shade: 800
      }
    }),
    function: reactTheming.getColor({
      theme,
      dark: {
        hue: 'yellow',
        shade: 300
      },
      light: {
        hue: 'orange',
        shade: 700
      }
    }),
    inserted: reactTheming.getColor({
      theme,
      hue: 'green',
      dark: {
        shade: 200
      },
      light: {
        shade: 800
      }
    }),
    keyword: reactTheming.getColor({
      theme,
      hue: 'fuschia',
      dark: {
        shade: 600
      },
      light: {
        shade: 700
      }
    }),
    name: reactTheming.getColor({
      theme,
      dark: {
        hue: 'blue',
        shade: 400
      },
      light: {
        hue: 'crimson',
        shade: 700
      }
    }),
    number: reactTheming.getColor({
      theme,
      hue: 'green',
      dark: {
        shade: 400
      },
      light: {
        shade: 700
      }
    }),
    punctuation: reactTheming.getColor({
      theme,
      dark: {
        hue: 'grey',
        shade: 700
      },
      light: {
        hue: 'red',
        shade: 900
      }
    }),
    regex: reactTheming.getColor({
      theme,
      hue: 'red',
      shade: 600
    }),
    value: reactTheming.getColor({
      theme,
      dark: {
        hue: 'crimson',
        shade: 600
      },
      light: {
        hue: 'red',
        shade: 800
      }
    })
  };
  return styled.css(["&.builtin,&.class-name,&.tag:not(.punctuation):not(.attr-name):not(.attr-value):not(.script){color:", ";}&.doctype,&.prolog,&.tag.punctuation:not(.attr-value):not(.script):not(.spread){color:", ";}&.attribute.value,&.attr-value,&.atrule,&.cdata,&.string,&.url.content{color:", ";}&.constant,&.interpolation-punctuation{color:", ";}&.attr-name,&.attr-value.spread,&.environment,&.interpolation,&.parameter,&.property,&.property-access,&.variable{color:", ";}&.parameter.punctuation,&.attr-name + .attr-value.punctuation{color:inherit;}&.regex{color:", ";}&.boolean,&.bold:not(.diff),&.entity,&.important,&.tag:not(.punctuation):not(.attr-name):not(.attr-value):not(.script):not(.class-name){color:", ";}&.number,&.unit{color:", ";}&.assign-left,&.function,&.selector:not(.attribute){color:", ";}&.atrule.rule,&.keyword{color:", ";}&.blockquote,&.comment,&.shebang{color:", ";}", ".language-css &&.plain{color:", ";}", ".language-diff &&.coord{color:", ";}", ".language-diff &&.deleted{color:", ";}", ".language-diff &&.diff{color:", ";}", ".language-diff &&.inserted{color:", ";}"], colors.builtin, colors.punctuation, colors.value, colors.constant, colors.name, colors.regex, colors.boolean, colors.number, colors.function, colors.keyword, colors.comment, StyledCodeBlock, colors.value, StyledCodeBlock, colors.coord, StyledCodeBlock, colors.deleted, StyledCodeBlock, colors.diff, StyledCodeBlock, colors.inserted);
};
const StyledCodeBlockToken = styled__default.default.span.attrs({
  'data-garden-id': COMPONENT_ID$4,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledCodeBlockToken",
  componentId: "sc-1hkshdq-0"
})(["display:inline-block;&.bold:not(.diff){font-weight:", ";}&.coord{padding-left:0.75em;}&.italic{font-style:italic;}&.prefix{width:2em;text-align:center;}", ";", ";"], props => props.theme.fontWeights.semibold, colorStyles, reactTheming.componentStyles);

const COMPONENT_ID$3 = 'typography.ellipsis';
const StyledEllipsis = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$3,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledEllipsis",
  componentId: "sc-1u4uqmy-0"
})(["overflow:hidden;text-overflow:ellipsis;white-space:nowrap;direction:", ";", ";"], props => props.theme.rtl ? 'rtl' : 'ltr', reactTheming.componentStyles);

const COMPONENT_ID$2 = 'typography.icon';
const sizeStyles$1 = props => {
  const margin = props.$isStart && `${props.theme.space.base * 2}px`;
  const size = props.theme.iconSizes.md;
  return styled.css(["margin-", ":", ";width:", ";height:", ";"], props.theme.rtl ? 'left' : 'right', margin, size, size);
};
const StyledIcon = styled__default.default(reactTheming.StyledBaseIcon).attrs({
  'data-garden-id': COMPONENT_ID$2,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledIcon",
  componentId: "sc-10rfb5b-0"
})(["position:relative;top:-1px;vertical-align:middle;", ";", ";"], props => sizeStyles$1(props), reactTheming.componentStyles);

const COMPONENT_ID$1 = 'typography.kbd';
const sizeStyles = ({
  theme,
  $size
}) => {
  let minWidth;
  let paddingHorizontal;
  let paddingVertical = '0';
  switch ($size) {
    case 'small':
      minWidth = polished.math(`${theme.lineHeights.sm} - 1px`);
      paddingHorizontal = `${theme.space.base}px`;
      break;
    case 'medium':
      minWidth = polished.math(`${theme.lineHeights.md} - 1px`);
      paddingHorizontal = `${theme.space.base * 1.5}px`;
      break;
    case 'large':
      minWidth = polished.math(`${theme.lineHeights.lg} - 1px`);
      paddingHorizontal = `${theme.space.base * 1.75}px`;
      break;
    default:
      minWidth = 'calc(1.2em + 3px)';
      paddingHorizontal = `${polished.stripUnit(polished.math(`${theme.space.base * 1.5} / (${theme.fontSizes.md} - 1px)`))}em`;
      paddingVertical = '1.5px';
      break;
  }
  const padding = `${paddingVertical} ${paddingHorizontal}`;
  return styled.css(["&&{box-sizing:border-box;padding:", ";min-width:", ";}"], padding, minWidth);
};
const StyledKbd = styled__default.default(StyledCode).attrs({
  'data-garden-id': COMPONENT_ID$1,
  'data-garden-version': '9.12.3',
  as: 'kbd'
}).withConfig({
  displayName: "StyledKbd",
  componentId: "sc-1gzk2wp-0"
})(["display:inline-block;direction:ltr;text-align:center;font-family:sans-serif;", ";", ";"], sizeStyles, reactTheming.componentStyles);

const listStyles = props => {
  const rtl = props.theme.rtl;
  return styled.css(["direction:", ";margin:0;margin-", ":24px;padding:0;list-style-position:outside;list-style-type:", ";"], rtl ? 'rtl' : 'ltr', rtl ? 'right' : 'left', props.$listType);
};
const ORDERED_ID$1 = 'typography.ordered_list';
const StyledOrderedList = styled__default.default.ol.attrs({
  'data-garden-id': ORDERED_ID$1,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledList__StyledOrderedList",
  componentId: "sc-jdbsfi-0"
})(["", ";", ";"], listStyles, reactTheming.componentStyles);
const UNORDERED_ID$1 = 'typography.unordered_list';
const StyledUnorderedList = styled__default.default.ul.attrs({
  'data-garden-id': UNORDERED_ID$1,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledList__StyledUnorderedList",
  componentId: "sc-jdbsfi-1"
})(["", ";", ";"], listStyles, reactTheming.componentStyles);

const listItemPaddingStyles = props => {
  const base = props.theme.space.base;
  const paddingTop = props.$space === 'large' ? `${base * 2}px` : `${base}px`;
  return styled.css(["padding-top:", ";", " > &:first-child,", " > &:first-child{padding-top:0;}", " ", " > &:first-child,", " ", " > &:first-child,", " ", " > &:first-child,", " ", " > &:first-child{padding-top:", ";}"], paddingTop, StyledOrderedList, StyledUnorderedList, StyledOrderedList, StyledOrderedList, StyledOrderedList, StyledUnorderedList, StyledUnorderedList, StyledUnorderedList, StyledUnorderedList, StyledOrderedList, paddingTop);
};
const listItemStyles = props => {
  return styled.css(["line-height:", ";", ";"], reactTheming.getLineHeight(props.theme.lineHeights.md, props.theme.fontSizes.md), props.$space !== 'small' && listItemPaddingStyles(props));
};
const ORDERED_ID = 'typography.ordered_list_item';
const StyledOrderedListItem = styled__default.default(StyledFont).attrs(props => ({
  'data-garden-id': ORDERED_ID,
  'data-garden-version': '9.12.3',
  as: 'li',
  $space: props.$space ?? 'medium'
})).withConfig({
  displayName: "StyledListItem__StyledOrderedListItem",
  componentId: "sc-9rsipg-0"
})(["margin-", ":", ";padding-", ":", ";", ";", ";"], props => props.theme.rtl ? 'right' : 'left', props => polished.math(`${props.theme.space.base} * -1px`), props => props.theme.rtl ? 'right' : 'left', props => polished.math(`${props.theme.space.base} * 1px`), listItemStyles, reactTheming.componentStyles);
const UNORDERED_ID = 'typography.unordered_list_item';
const StyledUnorderedListItem = styled__default.default(StyledFont).attrs(props => ({
  'data-garden-id': UNORDERED_ID,
  'data-garden-version': '9.12.3',
  as: 'li',
  $space: props.$space ?? 'medium'
})).withConfig({
  displayName: "StyledListItem__StyledUnorderedListItem",
  componentId: "sc-9rsipg-1"
})(["", ";", ";"], listItemStyles, reactTheming.componentStyles);

const COMPONENT_ID = 'typography.paragraph';
const StyledParagraph = styled__default.default.p.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledParagraph",
  componentId: "sc-zkuftz-0"
})(["margin:0;padding:0;direction:", ";& + &,blockquote + &{margin-top:", ";}", ";"], props => props.theme.rtl ? 'rtl' : 'ltr', props => props.theme.lineHeights[THEME_SIZES[props.size]], reactTheming.componentStyles);

const SM = React.forwardRef(({
  isBold,
  isMonospace,
  tag = 'div',
  ...other
}, ref) => React__default.default.createElement(StyledFont, Object.assign({
  $isBold: isBold,
  $isMonospace: isMonospace,
  as: tag,
  ref: ref,
  $size: "small"
}, other)));
SM.displayName = 'SM';
SM.propTypes = {
  tag: PropTypes__default.default.any,
  isBold: PropTypes__default.default.bool,
  isMonospace: PropTypes__default.default.bool
};

const MD = React.forwardRef(({
  isBold,
  isMonospace,
  tag = 'div',
  ...other
}, ref) => React__default.default.createElement(StyledFont, Object.assign({
  $isBold: isBold,
  $isMonospace: isMonospace,
  $size: "medium",
  as: tag,
  ref: ref
}, other)));
MD.displayName = 'MD';
MD.propTypes = {
  tag: PropTypes__default.default.any,
  isBold: PropTypes__default.default.bool,
  isMonospace: PropTypes__default.default.bool
};

const LG = React.forwardRef(({
  isBold,
  isMonospace,
  tag = 'div',
  ...other
}, ref) => React__default.default.createElement(StyledFont, Object.assign({
  $isBold: isBold,
  $isMonospace: isMonospace,
  $size: "large",
  as: tag,
  ref: ref
}, other)));
LG.displayName = 'LG';
LG.propTypes = {
  tag: PropTypes__default.default.any,
  isBold: PropTypes__default.default.bool,
  isMonospace: PropTypes__default.default.bool
};

const XL = React.forwardRef(({
  isBold,
  tag = 'div',
  ...other
}, ref) => React__default.default.createElement(StyledFont, Object.assign({
  $size: "extralarge",
  $isBold: isBold,
  ref: ref,
  as: tag
}, other)));
XL.displayName = 'XL';
XL.propTypes = {
  tag: PropTypes__default.default.any,
  isBold: PropTypes__default.default.bool
};

const XXL = React.forwardRef(({
  isBold,
  tag = 'div',
  ...other
}, ref) => React__default.default.createElement(StyledFont, Object.assign({
  $size: "2xlarge",
  $isBold: isBold,
  ref: ref,
  as: tag
}, other)));
XXL.displayName = 'XXL';
XXL.propTypes = {
  tag: PropTypes__default.default.any,
  isBold: PropTypes__default.default.bool
};

const XXXL = React.forwardRef(({
  isBold,
  tag = 'div',
  ...other
}, ref) => React__default.default.createElement(StyledFont, Object.assign({
  $isBold: isBold,
  $size: "3xlarge"
}, other, {
  as: tag,
  ref: ref
})));
XXXL.displayName = 'XXXL';
XXXL.propTypes = {
  tag: PropTypes__default.default.any,
  isBold: PropTypes__default.default.bool
};

const Blockquote = React.forwardRef(({
  size = 'medium',
  ...props
}, ref) => React__default.default.createElement(StyledBlockquote, Object.assign({
  ref: ref,
  size: size
}, props)));
Blockquote.displayName = 'Blockquote';
Blockquote.propTypes = {
  size: PropTypes__default.default.oneOf(SIZE)
};

const Code = React.forwardRef(({
  hue = 'grey',
  size = 'inherit',
  ...other
}, ref) => React__default.default.createElement(StyledCode, Object.assign({
  ref: ref,
  $hue: hue,
  $size: size
}, other)));
Code.displayName = 'Code';
Code.propTypes = {
  hue: PropTypes__default.default.oneOf(HUE),
  size: PropTypes__default.default.oneOf(INHERIT_SIZE)
};

const CodeBlock = React__default.default.forwardRef(({
  children,
  containerProps,
  highlightLines,
  isLight,
  isNumbered,
  language = 'tsx',
  size = 'medium',
  ...other
}, ref) => {
  const containerRef = React.useRef(null);
  const code = Array.isArray(children) ? children[0] : children;
  const dependency = React.useMemo(() => [size, children], [size, children]);
  const containerTabIndex = containerScrollregion.useScrollRegion({
    containerRef,
    dependency
  });
  const getDiff = line => {
    let retVal;
    if (language === 'diff') {
      const token = line.find(value => !(value.empty || value.content === ''));
      if (token) {
        if (token.types.includes('deleted')) {
          retVal = 'delete';
        } else if (token.types.includes('inserted')) {
          retVal = 'add';
        } else if (token.types.includes('coord')) {
          retVal = 'hunk';
        } else if (token.types.includes('diff')) {
          retVal = 'change';
        }
      }
    }
    return retVal;
  };
  return React__default.default.createElement(StyledCodeBlockContainer, Object.assign({}, containerProps, {
    ref: containerRef,
    tabIndex: containerTabIndex
  }), React__default.default.createElement(Highlight__default.default, {
    Prism: Highlight.Prism,
    code: code ? code.trim() : '',
    language: LANGUAGES.includes(language) ? language : 'tsx'
  }, ({
    className,
    tokens,
    getLineProps,
    getTokenProps
  }) => React__default.default.createElement(reactTheming.ThemeProvider, {
    theme: parentTheme => ({
      ...parentTheme,
      colors: {
        ...parentTheme.colors,
        base: isLight ? 'light' : 'dark'
      }
    })
  }, React__default.default.createElement(StyledCodeBlock, Object.assign({
    className: className,
    ref: ref
  }, other), tokens.map((line, index) =>
  React__default.default.createElement(StyledCodeBlockLine, Object.assign({}, getLineProps({
    line
  }), {
    key: index,
    $language: language,
    $isHighlighted: highlightLines?.includes(index + 1),
    $isNumbered: isNumbered,
    $diff: getDiff(line),
    $size: size,
    style: undefined
  }), line.map((token, tokenKey) => React__default.default.createElement(StyledCodeBlockToken, Object.assign({}, getTokenProps({
    token
  }), {
    key: tokenKey,
    style: undefined
  }), token.empty ? '\n' : token.content))))))));
});
CodeBlock.displayName = 'CodeBlock';

const Ellipsis = React.forwardRef(({
  children,
  title,
  tag = 'div',
  ...other
}, ref) => {
  let textContent = undefined;
  if (title !== undefined) {
    textContent = title;
  } else if (typeof children === 'string') {
    textContent = children;
  }
  return React__default.default.createElement(StyledEllipsis, Object.assign({
    as: tag,
    ref: ref,
    title: textContent
  }, other), children);
});
Ellipsis.displayName = 'Ellipsis';
Ellipsis.propTypes = {
  title: PropTypes__default.default.string,
  tag: PropTypes__default.default.any
};

const Kbd = React.forwardRef(({
  size = 'inherit',
  ...other
}, ref) => React__default.default.createElement(StyledKbd, Object.assign({
  $size: size
}, other, {
  ref: ref
})));
Kbd.displayName = 'Kbd';
Kbd.propTypes = {
  size: PropTypes__default.default.oneOf(INHERIT_SIZE)
};

const Paragraph = React.forwardRef(({
  size = 'medium',
  ...props
}, ref) => React__default.default.createElement(StyledParagraph, Object.assign({
  ref: ref,
  size: size
}, props)));
Paragraph.displayName = 'Paragraph';
Paragraph.propTypes = {
  size: PropTypes__default.default.oneOf(SIZE)
};

const OrderedListContext = React.createContext(undefined);
const useOrderedListContext = () => {
  const listContext = React.useContext(OrderedListContext);
  if (!listContext) {
    throw new Error('This component must be rendered within an `OrderedList` component.');
  }
  return listContext;
};

const OrderedListItem = React.forwardRef((props, ref) => {
  const {
    size
  } = useOrderedListContext();
  return React__default.default.createElement(StyledOrderedListItem, Object.assign({
    ref: ref,
    $space: size
  }, props));
});
OrderedListItem.displayName = 'OrderedList.Item';
const Item$1 = OrderedListItem;

const OrderedListComponent = React__default.default.forwardRef(({
  size = 'medium',
  type = 'decimal',
  ...other
}, ref) => {
  const value = React.useMemo(() => ({
    size: size
  }), [size]);
  return React__default.default.createElement(OrderedListContext.Provider, {
    value: value
  }, React__default.default.createElement(StyledOrderedList, Object.assign({
    ref: ref,
    $listType: type
  }, other)));
});
OrderedListComponent.displayName = 'OrderedList';
OrderedListComponent.propTypes = {
  size: PropTypes__default.default.oneOf(SIZE),
  type: PropTypes__default.default.oneOf(TYPE_ORDERED_LIST)
};
const OrderedList = OrderedListComponent;
OrderedList.Item = Item$1;

const UnorderedListContext = React.createContext(undefined);
const useUnorderedListContext = () => {
  const listContext = React.useContext(UnorderedListContext);
  if (!listContext) {
    throw new Error('This component must be rendered within an `UnorderedList` component.');
  }
  return listContext;
};

const UnorderedListItem = React.forwardRef((props, ref) => {
  const {
    size
  } = useUnorderedListContext();
  return React__default.default.createElement(StyledUnorderedListItem, Object.assign({
    ref: ref,
    $space: size
  }, props));
});
UnorderedListItem.displayName = 'UnorderedList.Item';
const Item = UnorderedListItem;

const UnorderedListComponent = React.forwardRef(({
  size = 'medium',
  type = 'disc',
  ...other
}, ref) => {
  const value = React.useMemo(() => ({
    size: size
  }), [size]);
  return React__default.default.createElement(UnorderedListContext.Provider, {
    value: value
  }, React__default.default.createElement(StyledUnorderedList, Object.assign({
    ref: ref,
    $listType: type
  }, other)));
});
UnorderedListComponent.displayName = 'UnorderedList';
UnorderedListComponent.propTypes = {
  size: PropTypes__default.default.oneOf(SIZE),
  type: PropTypes__default.default.oneOf(TYPE_UNORDERED_LIST)
};
const UnorderedList = UnorderedListComponent;
UnorderedList.Item = Item;

const StartIconComponent = props => React__default.default.createElement(StyledIcon, Object.assign({
  $isStart: true
}, props));
StartIconComponent.displayName = 'Span.StartIcon';
const StartIcon = StartIconComponent;

const IconComponent = props => React__default.default.createElement(StyledIcon, props);
IconComponent.displayName = 'Span.Icon';
const Icon = IconComponent;

const SpanComponent = React.forwardRef(({
  hue,
  isBold,
  isMonospace,
  tag = 'span',
  ...other
}, ref) => React__default.default.createElement(StyledFont, Object.assign({
  $hue: hue,
  $isBold: isBold,
  $isMonospace: isMonospace,
  $size: "inherit",
  as: tag,
  ref: ref
}, other)));
SpanComponent.displayName = 'Span';
SpanComponent.propTypes = {
  tag: PropTypes__default.default.any,
  isBold: PropTypes__default.default.bool,
  isMonospace: PropTypes__default.default.bool,
  hue: PropTypes__default.default.string
};
const Span = SpanComponent;
Span.Icon = Icon;
Span.StartIcon = StartIcon;

exports.Blockquote = Blockquote;
exports.Code = Code;
exports.CodeBlock = CodeBlock;
exports.Ellipsis = Ellipsis;
exports.Kbd = Kbd;
exports.LG = LG;
exports.MD = MD;
exports.OrderedList = OrderedList;
exports.Paragraph = Paragraph;
exports.SM = SM;
exports.Span = Span;
exports.UnorderedList = UnorderedList;
exports.XL = XL;
exports.XXL = XXL;
exports.XXXL = XXXL;
