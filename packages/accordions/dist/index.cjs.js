/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
'use strict';

var React = require('react');
var containerAccordion = require('@zendeskgarden/container-accordion');
var styled = require('styled-components');
var reactTheming = require('@zendeskgarden/react-theming');
var polished = require('polished');
var containerUtilities = require('@zendeskgarden/container-utilities');
var PropTypes = require('prop-types');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);
var styled__default = /*#__PURE__*/_interopDefault(styled);
var PropTypes__default = /*#__PURE__*/_interopDefault(PropTypes);

const COMPONENT_ID$k = 'accordions.step_content';
const sizeStyles$2 = props => {
  const {
    rtl,
    space
  } = props.theme;
  const paddingBottom = props.$isActive ? space.base * 8 : space.base * 6;
  const paddingRight = rtl ? space.base * 6 : space.base * 5;
  const paddingLeft = rtl ? space.base * 5 : space.base * 6;
  const marginRight = rtl ? space.base * 3 : '0';
  const marginLeft = rtl ? '0' : space.base * 3;
  const marginVertical = space.base * 3;
  return styled.css(["margin:", "px ", "px ", "px ", "px;padding:0 ", "px ", "px ", "px;min-width:", "px;height:auto;"], marginVertical, marginRight, marginVertical, marginLeft, paddingRight, paddingBottom, paddingLeft, space.base * 30);
};
const StyledContent = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$k,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledContent",
  componentId: "sc-mazvvo-0"
})(["display:grid;grid-template-rows:", "fr;transition:grid-template-rows 0.25s ease-in-out;word-break:break-word;", " ", ";"], props => props.$isActive ? 1 : 0, sizeStyles$2, reactTheming.componentStyles);

const COMPONENT_ID$j = 'accordions.step_line';
const StyledLine = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$j,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledLine",
  componentId: "sc-1gkpjbr-0"
})(["display:block;position:absolute;top:", "px;right:", ";left:", ";flex:1;border-top:", ";border-color:", ";"], props => props.theme.space.base * 3, props => `calc(50% + ${props.theme.space.base * 6}px)`, props => `calc(-50% + ${props.theme.space.base * 6}px)`, props => props.theme.borders.sm, _ref => {
  let {
    theme
  } = _ref;
  return reactTheming.getColor({
    theme,
    variable: 'border.default'
  });
});

const COMPONENT_ID$i = 'accordions.step';
const StyledStep = styled__default.default.li.attrs({
  'data-garden-id': COMPONENT_ID$i,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledStep",
  componentId: "sc-12fiwtz-0"
})(["position:", ";flex:", ";min-width:", ";&:last-of-type ", "{display:", ";}&:first-of-type ", "{display:", ";}&:not(:last-of-type) ", "{border-", ":", ";border-color:", ";}", ";"], props => props.$isHorizontal && 'relative', props => props.$isHorizontal && '1', props => props.$isHorizontal && `${props.theme.space.base * 15}px`, StyledLine, props => props.theme.rtl && 'none', StyledLine, props => !props.theme.rtl && 'none', StyledContent, props => props.theme.rtl ? 'right' : 'left', props => props.theme.borders.sm, _ref => {
  let {
    theme
  } = _ref;
  return reactTheming.getColor({
    theme,
    variable: 'border.default'
  });
}, reactTheming.componentStyles);

const COMPONENT_ID$h = 'accordions.step_inner_content';
const StyledInnerContent = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$h,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledInnerContent",
  componentId: "sc-1xs9fh7-0"
})(["overflow:hidden;line-height:", ";color:", ";font-size:", ";", ";"], props => reactTheming.getLineHeight(props.theme.space.base * 5, props.theme.fontSizes.md), _ref => {
  let {
    theme
  } = _ref;
  return reactTheming.getColor({
    theme,
    variable: 'foreground.default'
  });
}, props => props.theme.fontSizes.md, reactTheming.componentStyles);

const COMPONENT_ID$g = 'accordions.stepper';
const StyledStepper = styled__default.default.ol.attrs({
  'data-garden-id': COMPONENT_ID$g,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledStepper",
  componentId: "sc-dsxw0f-0"
})(["display:", ";margin:0;padding:0;list-style:none;", ";"], props => props.$isHorizontal && 'flex', reactTheming.componentStyles);

const COMPONENT_ID$f = 'accordions.step_icon';
const StyledIconFlexContainer = styled__default.default.div.withConfig({
  displayName: "StyledIcon__StyledIconFlexContainer",
  componentId: "sc-v20nz9-0"
})(["display:flex;flex-basis:100%;justify-content:center;width:100%;"]);
const sizeStyles$1 = props => {
  const size = `${props.theme.space.base * 6}px`;
  const fontSize = props.theme.fontSizes.sm;
  return styled.css(["margin-bottom:", ";margin-", ":", ";width:", ";min-width:", ";height:", ";min-height:", ";line-height:", ";font-size:", ";"], props.$isHorizontal && `${props.theme.space.base * 2}px`, props.theme.rtl ? 'left' : 'right', !props.$isHorizontal && `${props.theme.space.base * 3}px`, size, size, size, size, reactTheming.getLineHeight(size, fontSize), fontSize);
};
const colorStyles$4 = _ref => {
  let {
    $isActive,
    theme
  } = _ref;
  const foregroundColor = reactTheming.getColor({
    theme,
    variable: $isActive ? 'foreground.onEmphasis' : 'foreground.default'
  });
  const backgroundColor = $isActive ? reactTheming.getColor({
    theme,
    variable: 'background.emphasis',
    dark: {
      offset: -300
    }
  }) : reactTheming.getColor({
    theme,
    variable: 'background.subtle',
    dark: {
      offset: -200
    },
    light: {
      offset: 100
    }
  });
  return styled.css(["background:", ";color:", ";"], backgroundColor, foregroundColor);
};
const StyledIcon = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$f,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledIcon",
  componentId: "sc-v20nz9-1"
})(["display:flex;align-items:center;justify-content:center;transition:background 0.25s ease-in-out,color 0.25s ease-in-out;border-radius:100%;", " ", " ", ";"], sizeStyles$1, colorStyles$4, reactTheming.componentStyles);

const COMPONENT_ID$e = 'accordions.step_label';
const StyledLabel = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$e,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledLabel",
  componentId: "sc-1o82llj-0"
})(["display:", ";align-items:", ";transition:color 0.25s ease-in-out,font-weight 0.25s ease-in-out;text-align:", ";line-height:", ";color:", ";font-size:", ";font-weight:", ";", ";"], props => !props.$isHorizontal && 'flex', props => !props.$isHorizontal && 'center', props => props.$isHorizontal && 'center', props => reactTheming.getLineHeight(props.theme.space.base * 5, props.theme.fontSizes.md), _ref => {
  let {
    $isActive,
    theme
  } = _ref;
  return reactTheming.getColor({
    theme,
    variable: $isActive ? 'foreground.default' : 'foreground.subtle'
  });
}, props => props.theme.fontSizes.md, props => props.$isActive && 600, reactTheming.componentStyles);

const COMPONENT_ID$d = 'accordions.step_label_text';
const StyledLabelText = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$d,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledLabelText",
  componentId: "sc-111m5zo-0"
})(["display:", ";padding:", ";word-wrap:", ";"], props => props.$isHidden && 'none', props => props.$isHorizontal && `0 ${props.theme.space.base * 3}px`, props => props.$isHorizontal && 'break-word');

const COMPONENT_ID$c = 'accordions.accordion';
const StyledAccordion = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$c,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledAccordion",
  componentId: "sc-niv9ic-0"
})(["", ";"], reactTheming.componentStyles);

const COMPONENT_ID$b = 'accordions.panel';
const colorStyles$3 = _ref => {
  let {
    theme,
    $isBare
  } = _ref;
  return styled.css(["border-bottom-color:", ";"], $isBare ? 'transparent' : reactTheming.getColor({
    theme,
    variable: 'border.default'
  }));
};
const sizeStyles = props => {
  const {
    theme,
    $isCompact,
    $isExpanded
  } = props;
  const {
    base
  } = theme.space;
  let paddingTop = base * 2;
  let paddingHorizontal = base * 5;
  let paddingBottom = base * 8;
  if ($isCompact) {
    paddingTop = base * 2;
    paddingHorizontal = base * 3;
    paddingBottom = base * 4;
  }
  if ($isExpanded === false) {
    paddingTop = 0;
    paddingBottom = 0;
  }
  return styled.css(["grid-template-rows:", "fr;border-bottom:", ";padding:", "px ", "px ", "px;line-height:", ";font-size:", ";"], $isExpanded ? 1 : 0, theme.borders.sm, paddingTop, paddingHorizontal, paddingBottom, reactTheming.getLineHeight(base * 5, theme.fontSizes.md), theme.fontSizes.md);
};
const StyledPanel = styled__default.default.section.attrs(props => ({
  'data-garden-id': COMPONENT_ID$b,
  'data-garden-version': '9.12.3',
  $isAnimated: props.$isAnimated ?? true
})).withConfig({
  displayName: "StyledPanel",
  componentId: "sc-1piryze-0"
})(["display:grid;transition:", ";overflow:hidden;", " ", " ", ";"], props => props.$isAnimated && 'padding 0.25s ease-in-out, grid-template-rows 0.25s ease-in-out', sizeStyles, colorStyles$3, reactTheming.componentStyles);

const COMPONENT_ID$a = 'accordions.section';
const StyledSection = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$a,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledSection",
  componentId: "sc-v2t9bd-0"
})(["&:last-child ", "{border:none;}", ";"], StyledPanel, reactTheming.componentStyles);

const COMPONENT_ID$9 = 'accordions.button';
const colorStyles$2 = _ref => {
  let {
    $isCollapsible,
    $isExpanded,
    $isHovered,
    theme
  } = _ref;
  const showColor = $isCollapsible || !$isExpanded;
  const color = reactTheming.getColor({
    theme,
    variable: showColor && $isHovered ? 'foreground.primary' : 'foreground.default'
  });
  return styled.css(["color:", ";&:hover{cursor:", ";color:", ";}"], color, showColor && 'pointer', showColor && color);
};
const StyledButton = styled__default.default.button.attrs({
  'data-garden-id': COMPONENT_ID$9,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledButton",
  componentId: "sc-xj3hy7-0"
})(["transition:color 0.1s ease-in-out;outline:none;border:none;background:transparent;padding:", ";width:100%;text-align:", ";line-height:", ";font-family:inherit;font-size:", ";font-weight:", ";", " &::-moz-focus-inner{border:0;}&:hover{cursor:", ";}", ";"], props => props.$isCompact ? `${props.theme.space.base * 2}px ${props.theme.space.base * 3}px` : `${props.theme.space.base * 5}px`, props => props.theme.rtl ? 'right' : 'left', props => reactTheming.getLineHeight(props.theme.space.base * 5, props.theme.fontSizes.md), props => props.theme.fontSizes.md, props => props.theme.fontWeights.semibold, colorStyles$2, props => (props.$isCollapsible || !props.$isExpanded) && 'pointer', reactTheming.componentStyles);

const COMPONENT_ID$8 = 'accordions.header';
const StyledHeader = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$8,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledHeader",
  componentId: "sc-2c6rbr-0"
})(["display:flex;align-items:center;transition:box-shadow 0.1s ease-in-out;font-size:", ";&:hover{cursor:", ";}", " ", ";"], props => props.theme.fontSizes.md, props => (props.$isCollapsible || !props.$isExpanded) && 'pointer', props => reactTheming.focusStyles({
  theme: props.theme,
  inset: true,
  selector: `&:has(${StyledButton}:focus-visible)`
}), reactTheming.componentStyles);

const COMPONENT_ID$7 = 'accordions.step_inner_panel';
const StyledInnerPanel = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$7,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledInnerPanel",
  componentId: "sc-8nbueg-0"
})(["overflow:hidden;line-height:inherit;font-size:inherit;", "[aria-hidden='true'] > &{transition:", ";visibility:hidden;}", "[aria-hidden='false'] > &{visibility:visible;}", ";"], StyledPanel, props => props.$isAnimated && 'visibility 0s 0.25s', StyledPanel, reactTheming.componentStyles);

const COMPONENT_ID$6 = 'accordions.rotate_icon';
const colorStyles$1 = _ref => {
  let {
    $isCollapsible,
    $isHovered,
    $isRotated,
    theme
  } = _ref;
  const showColor = $isCollapsible || !$isRotated;
  const color = reactTheming.getColor({
    theme,
    variable: showColor && $isHovered ? 'foreground.primary' : 'foreground.subtle'
  });
  return styled.css(["color:", ";&:hover{color:", ";}"], color, showColor && color);
};
const StyledRotateIcon = styled__default.default(reactTheming.StyledBaseIcon).attrs({
  'data-garden-id': COMPONENT_ID$6,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledRotateIcon",
  componentId: "sc-hp435q-0"
})(["transform:", ";transition:transform 0.25s ease-in-out,color 0.1s ease-in-out;box-sizing:content-box;padding:", ";width:", ";min-width:", ";height:", ";vertical-align:middle;", " ", ";"], props => props.$isRotated && `rotate(${props.theme.rtl ? '-' : '+'}180deg)`, props => props.$isCompact ? `${props.theme.space.base * 1.5}px ${props.theme.space.base * 3}px` : `${props.theme.space.base * 5}px`, props => props.theme.iconSizes.md, props => props.theme.iconSizes.md, props => props.theme.iconSizes.md, colorStyles$1, reactTheming.componentStyles);

const COMPONENT_ID$5 = 'timeline';
const StyledTimeline = styled__default.default.ol.attrs({
  'data-garden-id': COMPONENT_ID$5,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledTimeline",
  componentId: "sc-pig5kv-0"
})(["margin:0;padding:0;list-style:none;", ";"], reactTheming.componentStyles);

const COMPONENT_ID$4 = 'timeline.content.separator';
const StyledSeparator = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$4,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledSeparator",
  componentId: "sc-fki51e-0"
})(["display:flex;position:relative;justify-content:center;padding:", ";&::after{position:absolute;border-left:", ";height:100%;content:'';}", ";"], props => `${props.theme.space.base * 5}px ${props.theme.space.base}px`, _ref => {
  let {
    theme
  } = _ref;
  return `${theme.borders.sm} ${reactTheming.getColor({
    theme,
    variable: 'border.emphasis'
  })}`;
}, reactTheming.componentStyles);

const COMPONENT_ID$3 = 'timeline.content';
const StyledTimelineContent = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$3,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledContent__StyledTimelineContent",
  componentId: "sc-19phgu1-0"
})(["flex:1;padding:", ";", ";"], props => `${props.theme.space.base * 5}px ${props.theme.space.base * 4}px`, reactTheming.componentStyles);

const COMPONENT_ID$2 = 'timeline.opposite.content';
const StyledOppositeContent = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$2,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledOppositeContent",
  componentId: "sc-jurh2k-0"
})(["flex:1;padding:", ";text-align:", ";", ";"], props => `${props.theme.space.base * 5}px ${props.theme.space.base * 4}px`, props => props.theme.rtl ? 'left' : 'right', reactTheming.componentStyles);

const COMPONENT_ID$1 = 'timeline.item';
const StyledTimelineItem = styled__default.default.li.attrs({
  'data-garden-id': COMPONENT_ID$1,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledItem__StyledTimelineItem",
  componentId: "sc-5mcnzm-0"
})(["display:flex;position:relative;line-height:", ";color:", ";font-size:", ";&:last-of-type ", "::after{display:none;}", " ", " ", ";"], props => reactTheming.getLineHeight(props.theme.space.base * 5, props.theme.fontSizes.md), _ref => {
  let {
    theme
  } = _ref;
  return reactTheming.getColor({
    theme,
    variable: 'foreground.default'
  });
}, props => props.theme.fontSizes.md, StyledSeparator, props => !props.$hasOppositeContent && props.$isAlternate && styled.css(["&::before{flex:1;padding:", "px;content:'';}"], props.theme.space.base * 4), props => props.$isAlternate && styled.css(["&:nth-child(even){flex-direction:row-reverse;", "{text-align:", ";}", "{text-align:", ";}}"], StyledOppositeContent, props.theme.rtl ? 'right' : 'left', StyledTimelineContent, props.theme.rtl ? 'left' : 'right'), reactTheming.componentStyles);

const COMPONENT_ID = 'timeline.icon';
const colorStyles = _ref => {
  let {
    $surfaceColor,
    theme
  } = _ref;
  const foregroundColor = reactTheming.getColor({
    theme,
    variable: 'border.emphasis'
  });
  let backgroundColor;
  if ($surfaceColor) {
    backgroundColor = $surfaceColor.includes('.') ? reactTheming.getColor({
      theme,
      variable: $surfaceColor
    }) : $surfaceColor;
  } else {
    backgroundColor = reactTheming.getColor({
      theme,
      variable: 'background.default'
    });
  }
  return styled.css(["background-color:", ";color:", ";"], backgroundColor, foregroundColor);
};
const StyledItemIcon = styled__default.default(reactTheming.StyledBaseIcon).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledItemIcon",
  componentId: "sc-vz2l6e-0"
})(["z-index:1;box-sizing:content-box;padding:", "px 0;width:", ";height:", ";", " ", ";"], props => props.theme.space.base, props => polished.math(`${props.theme.iconSizes.sm} + 1`), props => polished.math(`${props.theme.iconSizes.sm} + 1`), colorStyles, reactTheming.componentStyles);

const StepperContext = React.createContext(undefined);
const useStepperContext = () => {
  const context = React.useContext(StepperContext);
  if (context === undefined) {
    throw new Error('This component must be rendered within a Stepper component');
  }
  return context;
};

const StepContext = React.createContext(undefined);
const useStepContext = () => {
  const context = React.useContext(StepContext);
  if (context === undefined) {
    throw new Error('This component must be rendered within a Stepper component');
  }
  return context;
};

const AccordionContext = React.createContext(undefined);
const useAccordionContext = () => {
  const context = React.useContext(AccordionContext);
  if (context === undefined) {
    throw new Error('This component must be rendered within a Accordion component');
  }
  return context;
};

const SectionContext = React.createContext(undefined);
const useSectionContext = () => {
  const context = React.useContext(SectionContext);
  if (context === undefined) {
    throw new Error('This component must be rendered within an Accordion component');
  }
  return context;
};

const HeaderContext = React.createContext(undefined);
const useHeaderContext = () => {
  const context = React.useContext(HeaderContext);
  if (context === undefined) {
    throw new Error('This component must be rendered within a Accordion.Header component');
  }
  return context;
};

const TimelineContext = React.createContext(undefined);
const useTimelineContext = () => {
  const context = React.useContext(TimelineContext);
  if (context === undefined) {
    throw new Error('This component must be rendered within a Timeline component');
  }
  return context;
};

const TimelineItemContext = React.createContext(undefined);
const useTimelineItemContext = () => {
  const context = React.useContext(TimelineItemContext);
  if (context === undefined) {
    throw new Error('This component must be rendered within a Timeline.Item component');
  }
  return context;
};

const SectionComponent = React.forwardRef((props, ref) => React__namespace.default.createElement(StyledSection, Object.assign({
  ref: ref
}, props)));
SectionComponent.displayName = 'Accordion.Section';
const Section = SectionComponent;

var _path$1;
function _extends$2() { return _extends$2 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$2.apply(null, arguments); }
var SvgChevronDownStroke = function SvgChevronDownStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$2({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _path$1 || (_path$1 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M12.688 5.61a.5.5 0 01.69.718l-.066.062-5 4a.5.5 0 01-.542.054l-.082-.054-5-4a.5.5 0 01.55-.83l.074.05L8 9.359l4.688-3.75z"
  })));
};

const HeaderComponent = React.forwardRef((props, ref) => {
  const {
    onClick,
    onMouseOver,
    onMouseOut,
    role,
    children,
    ...other
  } = props;
  const {
    level: ariaLevel,
    isCompact,
    isCollapsible,
    getHeaderProps,
    getTriggerProps,
    expandedSections
  } = useAccordionContext();
  const sectionValue = useSectionContext();
  const [isHovered, setIsHovered] = React.useState(false);
  const isExpanded = expandedSections.includes(sectionValue);
  const {
    onClick: onTriggerClick,
    onKeyDown,
    ...otherTriggerProps
  } = getTriggerProps({
    type: 'button',
    value: sectionValue
  });
  const value = React.useMemo(() => ({
    isHovered,
    otherTriggerProps
  }), [isHovered, otherTriggerProps]);
  return React__namespace.default.createElement(HeaderContext.Provider, {
    value: value
  }, React__namespace.default.createElement(StyledHeader, Object.assign({
    $isCollapsible: isCollapsible,
    $isExpanded: isExpanded
  }, getHeaderProps({
    ref,
    'aria-level': ariaLevel,
    role: role === undefined || role === null ? role : 'heading',
    onClick: containerUtilities.composeEventHandlers(onClick, onTriggerClick),
    onMouseOver: containerUtilities.composeEventHandlers(onMouseOver, () => setIsHovered(true)),
    onMouseOut: containerUtilities.composeEventHandlers(onMouseOut, () => setIsHovered(false)),
    ...other
  })), children, React__namespace.default.createElement(StyledRotateIcon, {
    $isCompact: isCompact,
    $isHovered: isHovered,
    $isRotated: isExpanded,
    $isCollapsible: isCollapsible,
    onMouseOver: containerUtilities.composeEventHandlers(onMouseOver, () => setIsHovered(true)),
    onMouseOut: containerUtilities.composeEventHandlers(onMouseOut, () => setIsHovered(false))
  }, React__namespace.default.createElement(SvgChevronDownStroke, null))));
});
HeaderComponent.displayName = 'Accordion.Header';
const Header = HeaderComponent;

const LabelComponent$1 = React.forwardRef((props, ref) => {
  const sectionValue = useSectionContext();
  const {
    isCompact,
    isCollapsible,
    expandedSections
  } = useAccordionContext();
  const isExpanded = expandedSections.includes(sectionValue);
  const {
    isHovered,
    otherTriggerProps
  } = useHeaderContext();
  return React__namespace.default.createElement(StyledButton, Object.assign({
    ref: ref,
    $isCompact: isCompact,
    $isHovered: isHovered,
    $isExpanded: isExpanded,
    $isCollapsible: isCollapsible
  }, otherTriggerProps, props));
});
LabelComponent$1.displayName = 'Accordion.Label';
const Label$1 = LabelComponent$1;

const PanelComponent = React.forwardRef((_ref, ref) => {
  let {
    role,
    children,
    ...props
  } = _ref;
  const {
    isAnimated,
    isBare,
    isCompact,
    expandedSections,
    getPanelProps
  } = useAccordionContext();
  const sectionValue = useSectionContext();
  const isExpanded = expandedSections.includes(sectionValue);
  return React__namespace.default.createElement(StyledPanel, Object.assign({
    inert: isExpanded ? undefined : '',
    $isAnimated: isAnimated,
    $isBare: isBare,
    $isCompact: isCompact,
    $isExpanded: isExpanded
  }, getPanelProps({
    role: role === undefined ? null : 'region',
    ref,
    value: sectionValue,
    ...props
  })), React__namespace.default.createElement(StyledInnerPanel, {
    $isAnimated: isAnimated
  }, children));
});
PanelComponent.displayName = 'Accordion.Panel';
const Panel = PanelComponent;

const AccordionComponent = React.forwardRef((_ref, ref) => {
  let {
    children,
    isBare,
    isCompact,
    isAnimated = true,
    isExpandable,
    isCollapsible = true,
    level,
    onChange,
    defaultExpandedSections,
    expandedSections: controlledExpandedSections,
    ...props
  } = _ref;
  const {
    sections,
    sectionChildren
  } = React.useMemo(() => React.Children.toArray(children).filter(React.isValidElement).map((child, index) =>
  React__namespace.default.createElement(SectionContext.Provider, {
    key: index,
    value: index
  }, child)).reduce((acc, child, index) => {
    acc.sectionChildren.push(child);
    acc.sections.push(index);
    return acc;
  }, {
    sectionChildren: [],
    sections: []
  }), [children]);
  const {
    expandedSections,
    getHeaderProps,
    getTriggerProps,
    getPanelProps
  } = containerAccordion.useAccordion({
    sections,
    defaultExpandedSections,
    expandedSections: controlledExpandedSections,
    collapsible: isCollapsible,
    expandable: isExpandable || false,
    onChange
  });
  const accordionContextValue = React.useMemo(() => ({
    level,
    isBare,
    isCompact,
    isAnimated,
    isCollapsible,
    getPanelProps,
    getHeaderProps,
    getTriggerProps,
    expandedSections
  }), [level, isBare, isCompact, isAnimated, isCollapsible, getPanelProps, getHeaderProps, getTriggerProps, expandedSections]);
  return React__namespace.default.createElement(AccordionContext.Provider, {
    value: accordionContextValue
  }, React__namespace.default.createElement(StyledAccordion, Object.assign({
    ref: ref
  }, props), sectionChildren));
});
AccordionComponent.displayName = 'Accordion';
const Accordion = AccordionComponent;
Accordion.Header = Header;
Accordion.Label = Label$1;
Accordion.Panel = Panel;
Accordion.Section = Section;

const StepComponent = React.forwardRef((_ref, ref) => {
  let {
    children,
    ...props
  } = _ref;
  const {
    isHorizontal
  } = useStepperContext();
  return React__namespace.default.createElement(StyledStep, Object.assign({
    ref: ref,
    $isHorizontal: isHorizontal
  }, props), !!isHorizontal && React__namespace.default.createElement(StyledLine, null), children);
});
StepComponent.displayName = 'Stepper.Step';
const Step = StepComponent;

var _path;
function _extends$1() { return _extends$1 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$1.apply(null, arguments); }
var SvgCheckSmStroke = function SvgCheckSmStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _path || (_path = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.25,
    d: "M3 9l3 3 7-7"
  })));
};

const LabelComponent = React.forwardRef((_ref, ref) => {
  let {
    icon,
    iconProps,
    isHidden,
    children,
    ...other
  } = _ref;
  const {
    currentStepIndex,
    isActive,
    isCompleted,
    isHorizontal
  } = useStepContext();
  const numericStep = currentStepIndex + 1;
  const stepIcon = icon || numericStep;
  const styledIcon = React__namespace.default.createElement(StyledIcon, {
    $isActive: isActive,
    $isHorizontal: isHorizontal
  }, isCompleted ? React__namespace.default.createElement(SvgCheckSmStroke, iconProps) : stepIcon);
  return React__namespace.default.createElement(StyledLabel, Object.assign({
    ref: ref,
    $isActive: isActive,
    $isHorizontal: isHorizontal
  }, other), isHorizontal ? React__namespace.default.createElement(StyledIconFlexContainer, null, styledIcon) : styledIcon, React__namespace.default.createElement(StyledLabelText, {
    $isHidden: isHidden,
    $isHorizontal: isHorizontal
  }, children));
});
LabelComponent.displayName = 'Stepper.Label';
LabelComponent.propTypes = {
  icon: PropTypes__default.default.any,
  iconProps: PropTypes__default.default.object,
  isHidden: PropTypes__default.default.bool
};
const Label = LabelComponent;

const ContentComponent$1 = React.forwardRef((props, ref) => {
  const {
    isActive,
    isHorizontal
  } = useStepContext();
  return isHorizontal === false ? React__namespace.default.createElement(StyledContent, Object.assign({
    ref: ref,
    $isActive: isActive
  }, props), React__namespace.default.createElement(StyledInnerContent, {
    "aria-hidden": !isActive,
    inert: isActive ? undefined : ''
  }, props.children)) : null;
});
ContentComponent$1.displayName = 'Stepper.Content';
const Content$1 = ContentComponent$1;

const DEFAULT_ACTIVE_INDEX = 0;
const StepperComponent = React.forwardRef((_ref, ref) => {
  let {
    activeIndex = DEFAULT_ACTIVE_INDEX,
    isHorizontal,
    children,
    ...props
  } = _ref;
  const stepperContext = React.useMemo(() => ({
    activeIndex,
    isHorizontal: isHorizontal || false
  }), [activeIndex, isHorizontal]);
  return React__namespace.default.createElement(StepperContext.Provider, {
    value: stepperContext
  }, React__namespace.default.createElement(StyledStepper, Object.assign({
    ref: ref,
    $isHorizontal: isHorizontal
  }, props), React.useMemo(() => React.Children.toArray(children).filter(React.isValidElement).map((child, index) => React__namespace.default.createElement(StepContext.Provider, {
    key: index
    ,
    value: {
      currentStepIndex: index,
      isActive: stepperContext.activeIndex === index,
      isCompleted: stepperContext.activeIndex > index,
      isHorizontal: stepperContext.isHorizontal
    }
  }, child)), [children, stepperContext])));
});
StepperComponent.displayName = 'Stepper';
const Stepper = StepperComponent;
Stepper.Content = Content$1;
Stepper.Label = Label;
Stepper.Step = Step;

const OppositeContentComponent = React.forwardRef((props, ref) => React__namespace.default.createElement(StyledOppositeContent, Object.assign({
  ref: ref
}, props)));
OppositeContentComponent.displayName = 'Timeline.OppositeContent';
const OppositeContent = OppositeContentComponent;

const ItemComponent = React.forwardRef((_ref, ref) => {
  let {
    icon,
    surfaceColor,
    ...props
  } = _ref;
  const value = React.useMemo(() => ({
    icon,
    surfaceColor
  }), [icon, surfaceColor]);
  const {
    isAlternate
  } = useTimelineContext();
  let hasOppositeContent = false;
  React.Children.forEach(props.children, child => {
    if (child) {
      if (child.type === OppositeContent) {
        hasOppositeContent = true;
      }
    }
  });
  return React__namespace.default.createElement(TimelineItemContext.Provider, {
    value: value
  }, React__namespace.default.createElement(StyledTimelineItem, Object.assign({
    ref: ref,
    $isAlternate: isAlternate,
    $hasOppositeContent: hasOppositeContent
  }, props)));
});
ItemComponent.displayName = 'Timeline.Item';
const Item = ItemComponent;

var _circle;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var SvgCircleFullStroke = function SvgCircleFullStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 12,
    height: 12,
    focusable: "false",
    viewBox: "0 0 12 12",
    "aria-hidden": "true"
  }, props), _circle || (_circle = /*#__PURE__*/React__namespace.createElement("circle", {
    cx: 6,
    cy: 6,
    r: 4.5,
    fill: "none",
    stroke: "currentColor"
  })));
};

const ContentComponent = React.forwardRef((props, ref) => {
  const {
    icon,
    surfaceColor
  } = useTimelineItemContext();
  return React__namespace.default.createElement(React__namespace.default.Fragment, null, React__namespace.default.createElement(StyledSeparator, null, React__namespace.default.createElement(StyledItemIcon, {
    $surfaceColor: surfaceColor
  }, icon || React__namespace.default.createElement(SvgCircleFullStroke, null))), React__namespace.default.createElement(StyledTimelineContent, Object.assign({
    ref: ref
  }, props)));
});
ContentComponent.displayName = 'Timeline.Content';
const Content = ContentComponent;

const TimelineComponent = React.forwardRef((_ref, ref) => {
  let {
    isAlternate,
    ...props
  } = _ref;
  const value = React.useMemo(() => ({
    isAlternate
  }), [isAlternate]);
  return React__namespace.default.createElement(TimelineContext.Provider, {
    value: value
  }, React__namespace.default.createElement(StyledTimeline, Object.assign({
    ref: ref
  }, props)));
});
TimelineComponent.displayName = 'Timeline';
const Timeline = TimelineComponent;
Timeline.Content = Content;
Timeline.Item = Item;
Timeline.OppositeContent = OppositeContent;

exports.Accordion = Accordion;
exports.Stepper = Stepper;
exports.Timeline = Timeline;
