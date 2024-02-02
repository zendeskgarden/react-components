"use strict";(self.webpackChunk_zendeskgarden_react_components=self.webpackChunk_zendeskgarden_react_components||[]).push([[5476],{"./packages/theming/src/utils/arrowStyles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>arrowStyles});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),polished__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/polished/dist/polished.esm.js");const exponentialSymbols={symbols:{sqrt:{func:{symbol:"sqrt",f:a=>Math.sqrt(a),notation:"func",precedence:0,rightToLeft:0,argCount:1},symbol:"sqrt",regSymbol:"sqrt\\b"}}},animationStyles=(position,modifier)=>{const property=position.split("-")[0],animationName=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.F4)(["0%,66%{",":2px;border:transparent;}"],property);return(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["&","::before,&","::after{animation:0.3s ease-in-out ",";}"],modifier,modifier,animationName)},positionStyles=(position,size,inset)=>{const margin=(0,polished__WEBPACK_IMPORTED_MODULE_1__.mA)(`${size} / -2`),placement=(0,polished__WEBPACK_IMPORTED_MODULE_1__.mA)(`${margin} + ${inset}`);let clipPath,positionCss,propertyRadius;return position.startsWith("top")?(propertyRadius="border-bottom-right-radius",clipPath="polygon(100% 0, 100% 1px, 1px 100%, 0 100%, 0 0)",positionCss=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["top:",";right:",";left:",";margin-left:",";"],placement,"top-right"===position&&size,"top"===position?"50%":"top-left"===position&&size,"top"===position&&margin)):position.startsWith("right")?(propertyRadius="border-bottom-left-radius",clipPath="polygon(100% 0, 100% 100%, calc(100% - 1px) 100%, 0 1px, 0 0)",positionCss=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["top:",";right:",";bottom:",";margin-top:",";"],"right"===position?"50%":"right-top"===position&&size,placement,"right-bottom"===position&&size,"right"===position&&margin)):position.startsWith("bottom")?(propertyRadius="border-top-left-radius",clipPath="polygon(100% 0, calc(100% - 1px) 0, 0 calc(100% - 1px), 0 100%, 100% 100%)",positionCss=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["right:",";bottom:",";left:",";margin-left:",";"],"bottom-right"===position&&size,placement,"bottom"===position?"50%":"bottom-left"===position&&size,"bottom"===position&&margin)):position.startsWith("left")&&(propertyRadius="border-top-right-radius",clipPath="polygon(0 100%, 100% 100%, 100% calc(100% - 1px), 1px 0, 0 0)",positionCss=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["top:",";bottom:",";left:",";margin-top:",";"],"left"===position?"50%":"left-top"===position&&size,size,placement,"left"===position&&margin)),(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["&::before{",":100%;clip-path:",";}&::before,&::after{","}"],propertyRadius,clipPath,positionCss)};function arrowStyles(position){let options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const size=options.size||"6px",inset=options.inset||"0",squareSize=(0,polished__WEBPACK_IMPORTED_MODULE_1__.mA)(`${size} * 2 / sqrt(2)`,exponentialSymbols);return(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["position:relative;&::before{border-width:inherit;border-style:inherit;border-color:transparent;background-clip:content-box;}&::after{z-index:-1;border:inherit;box-shadow:inherit;}&::before,&::after{position:absolute;transform:rotate(45deg);background-color:inherit;box-sizing:inherit;width:",";height:",";content:'';}",";",";"],squareSize,squareSize,positionStyles(position,squareSize,inset),options.animationModifier&&animationStyles(position,options.animationModifier))}},"./packages/tooltips/src/elements/Tooltip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>Tooltip});var react=__webpack_require__("./node_modules/react/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),dist=__webpack_require__("./node_modules/react-merge-refs/dist/index.mjs"),index_esm=__webpack_require__("./node_modules/@zendeskgarden/container-tooltip/dist/index.esm.js"),dist_index_esm=__webpack_require__("./node_modules/@zendeskgarden/container-utilities/dist/index.esm.js"),Manager=__webpack_require__("./packages/tooltips/node_modules/react-popper/lib/esm/Manager.js"),Reference=__webpack_require__("./packages/tooltips/node_modules/react-popper/lib/esm/Reference.js"),Popper=__webpack_require__("./packages/tooltips/node_modules/react-popper/lib/esm/Popper.js");function getPopperPlacement(gardenPlacement){return{auto:"auto",top:"top","top-start":"top-start","top-end":"top-end",bottom:"bottom","bottom-start":"bottom-start","bottom-end":"bottom-end",end:"right","end-top":"right-start","end-bottom":"right-end",start:"left","start-top":"left-start","start-bottom":"left-end"}[gardenPlacement]}var theme=__webpack_require__("./packages/theming/src/elements/theme/index.ts");const StyledTooltipWrapper=styled_components_browser_esm.ZP.div.withConfig({displayName:"StyledTooltipWrapper",componentId:"sc-1b7q9q6-0"})(["transition:opacity 10ms;opacity:1;z-index:",";&[aria-hidden='true']{visibility:hidden;opacity:0;}"],(props=>props.zIndex));StyledTooltipWrapper.defaultProps={theme:theme.Z};var getLineHeight=__webpack_require__("./packages/theming/src/utils/getLineHeight.ts"),arrowStyles=__webpack_require__("./packages/theming/src/utils/arrowStyles.ts"),getColor=__webpack_require__("./packages/theming/src/utils/getColor.ts"),retrieveComponentStyles=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),StyledParagraph=__webpack_require__("./packages/tooltips/src/styled/StyledParagraph.ts"),StyledTitle=__webpack_require__("./packages/tooltips/src/styled/StyledTitle.ts");const StyledTooltip=styled_components_browser_esm.ZP.div.attrs({"data-garden-id":"tooltip.tooltip","data-garden-version":"storybook"}).withConfig({displayName:"StyledTooltip",componentId:"sc-gzzjq4-0"})(["display:inline-block;box-sizing:border-box;direction:",";text-align:",";font-weight:",";",";&[aria-hidden='true']{display:none;}",";",";"],(props=>props.theme.rtl&&"rtl"),(props=>props.theme.rtl?"right":"left"),(props=>props.theme.fontWeights.regular),(props=>(_ref=>{let maxWidth,overflowWrap,titleDisplay,paragraphMarginTop,wordWrap,arrowSize,arrowInset,{theme,size,type,placement,hasArrow}=_ref,margin=1.5*theme.space.base+"px",borderRadius=theme.borderRadii.sm,padding="0 1em",whiteSpace="nowrap",lineHeight=(0,getLineHeight.Z)(5*theme.space.base,theme.fontSizes.sm),fontSize=theme.fontSizes.sm;return"small"!==size&&(borderRadius=theme.borderRadii.md,overflowWrap="break-word",whiteSpace="normal",wordWrap="break-word"),"extra-large"===size?(padding=10*theme.space.base+"px",maxWidth="460px",lineHeight=(0,getLineHeight.Z)(5*theme.space.base,theme.fontSizes.md),paragraphMarginTop=2.5*theme.space.base+"px"):"large"===size?(padding=5*theme.space.base+"px",maxWidth="270px",lineHeight=(0,getLineHeight.Z)(5*theme.space.base,theme.fontSizes.md),paragraphMarginTop=2*theme.space.base+"px"):"medium"===size&&(padding="1em",maxWidth="140px",lineHeight=(0,getLineHeight.Z)(4*theme.space.base,theme.fontSizes.sm)),"extra-large"!==size&&"large"!==size||(fontSize=theme.fontSizes.md,titleDisplay="block"),hasArrow&&("small"===size||"medium"===size?(arrowSize=margin,arrowInset="dark"===type?"1px":"0"):(arrowInset="dark"===type?"2px":"1px","large"===size?(margin=2*theme.space.base+"px",arrowSize=margin):"extra-large"===size&&(margin=3*theme.space.base+"px",arrowSize=2.5*theme.space.base+"px"))),(0,styled_components_browser_esm.iv)(["margin:",";border-radius:",";padding:",";max-width:",";line-height:",";word-wrap:",";white-space:",";font-size:",";overflow-wrap:",";",";","{margin-top:",";}","{display:",";}"],margin,borderRadius,padding,maxWidth,lineHeight,wordWrap,whiteSpace,fontSize,overflowWrap,hasArrow&&(0,arrowStyles.Z)(function getArrowPosition(popperPlacement){return{top:"bottom","top-start":"bottom-left","top-end":"bottom-right",right:"left","right-start":"left-top","right-end":"left-bottom",bottom:"top","bottom-start":"top-left","bottom-end":"top-right",left:"right","left-start":"right-top","left-end":"right-bottom"}[popperPlacement]||"top"}(placement),{size:arrowSize,inset:arrowInset}),StyledParagraph.M,paragraphMarginTop,StyledTitle.X,titleDisplay)})(props)),(_ref2=>{let border,titleColor,{theme,type}=_ref2,boxShadow=theme.shadows.lg(`${theme.space.base}px`,2*theme.space.base+"px",(0,getColor.L)("chromeHue",600,theme,.15)),backgroundColor=(0,getColor.L)("chromeHue",700,theme),color=theme.colors.background;return"light"===type&&(boxShadow=theme.shadows.lg(3*theme.space.base+"px",5*theme.space.base+"px",(0,getColor.L)("chromeHue",600,theme,.15)),border=`${theme.borders.sm} ${(0,getColor.L)("neutralHue",300,theme)}`,backgroundColor=theme.colors.background,color=(0,getColor.L)("neutralHue",700,theme),titleColor=theme.colors.foreground),(0,styled_components_browser_esm.iv)(["border:",";box-shadow:",";background-color:",";color:",";","{color:",";}"],border,boxShadow,backgroundColor,color,StyledTitle.X,titleColor)}),(props=>(0,retrieveComponentStyles.Z)("tooltip.tooltip",props)));StyledTooltip.defaultProps={theme:theme.Z};const SHARED_PLACEMENT=["auto","top","top-start","top-end","bottom","bottom-start","bottom-end"],PLACEMENT=[...SHARED_PLACEMENT,"end","end-top","end-bottom","start","start-top","start-bottom"];var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Tooltip=_ref=>{let{id,delayMS,isInitialVisible,content,refKey,placement,eventsEnabled,popperModifiers,children,hasArrow,size,type,appendToNode,zIndex,isVisible:externalIsVisible,...otherProps}=_ref;const{rtl}=(0,react.useContext)(styled_components_browser_esm.Ni),scheduleUpdateRef=(0,react.useRef)(),{isVisible,getTooltipProps,getTriggerProps,openTooltip,closeTooltip}=(0,index_esm.l)({id,delayMilliseconds:delayMS,isVisible:isInitialVisible}),controlledIsVisible=(0,dist_index_esm.u5)(externalIsVisible,isVisible);(0,react.useEffect)((()=>{controlledIsVisible&&scheduleUpdateRef.current&&scheduleUpdateRef.current()}),[controlledIsVisible,content]);const popperPlacement=rtl?function getRtlPopperPlacement(gardenPlacement){const popperPlacement=getPopperPlacement(gardenPlacement);return{left:"right","left-start":"right-start","left-end":"right-end","top-start":"top-end","top-end":"top-start",right:"left","right-start":"left-start","right-end":"left-end","bottom-start":"bottom-end","bottom-end":"bottom-start"}[popperPlacement]||popperPlacement}(placement):getPopperPlacement(placement),singleChild=react.Children.only(children),modifiers={preventOverflow:{boundariesElement:"window"},...popperModifiers};return(0,jsx_runtime.jsxs)(Manager.ZP,{children:[(0,jsx_runtime.jsx)(Reference.Z,{children:_ref2=>{let{ref}=_ref2;return(0,react.cloneElement)(singleChild,getTriggerProps({...singleChild.props,[refKey]:(0,dist.l)([ref,singleChild.ref?singleChild.ref:null])}))}}),(0,jsx_runtime.jsx)(Popper.ZP,{placement:popperPlacement,eventsEnabled:controlledIsVisible&&eventsEnabled,modifiers,children:_ref3=>{let{ref,style,scheduleUpdate,placement:currentPlacement}=_ref3;scheduleUpdateRef.current=scheduleUpdate;const{onFocus,onBlur,...otherTooltipProps}=otherProps;let computedSize=size;void 0===computedSize&&(computedSize="dark"===type?"small":"large");const tooltipProps={hasArrow,placement:currentPlacement,size:computedSize,onFocus:(0,dist_index_esm.Mj)(onFocus,(()=>{openTooltip()})),onBlur:(0,dist_index_esm.Mj)(onBlur,(()=>{closeTooltip(0)})),"aria-hidden":!controlledIsVisible,type,...otherTooltipProps},tooltip=(0,jsx_runtime.jsx)(StyledTooltipWrapper,{ref:controlledIsVisible?ref:null,style,zIndex,"aria-hidden":!controlledIsVisible,children:(0,jsx_runtime.jsx)(StyledTooltip,{...getTooltipProps(tooltipProps),children:content})});return appendToNode?(0,react_dom.createPortal)(tooltip,appendToNode):tooltip}})]})};Tooltip.displayName="Tooltip",Tooltip.displayName="Tooltip",Tooltip.propTypes={appendToNode:prop_types_default().any,hasArrow:prop_types_default().bool,delayMS:prop_types_default().number,eventsEnabled:prop_types_default().bool,id:prop_types_default().string,content:prop_types_default().node.isRequired,placement:prop_types_default().oneOf(PLACEMENT),popperModifiers:prop_types_default().any,size:prop_types_default().oneOf(["small","medium","large","extra-large"]),type:prop_types_default().oneOf(["light","dark"]),zIndex:prop_types_default().oneOfType([prop_types_default().number,prop_types_default().string]),isInitialVisible:prop_types_default().bool,refKey:prop_types_default().string},Tooltip.defaultProps={hasArrow:!0,eventsEnabled:!0,type:"dark",placement:"top",delayMS:500,refKey:"ref"};try{Tooltip.displayName="Tooltip",Tooltip.__docgenInfo={description:"",displayName:"Tooltip",props:{appendToNode:{defaultValue:null,description:"Appends the tooltip to the element provided",name:"appendToNode",required:!1,type:{name:"Element"}},hasArrow:{defaultValue:{value:"true"},description:"Adds an arrow to the tooltip",name:"hasArrow",required:!1,type:{name:"boolean"}},delayMS:{defaultValue:{value:"500"},description:"Adds milliseconds of delay to the opening and closing of the tooltip",name:"delayMS",required:!1,type:{name:"number"}},eventsEnabled:{defaultValue:{value:"true"},description:"Allows the tooltip to reposition during browser resize events",name:"eventsEnabled",required:!1,type:{name:"boolean"}},content:{defaultValue:null,description:"Defines the content of the tooltip",name:"content",required:!0,type:{name:"ReactNode"}},placement:{defaultValue:{value:"top"},description:"Adjusts the placement of the tooltip",name:"placement",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"top"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"end"'},{value:'"end-top"'},{value:'"end-bottom"'},{value:'"start"'},{value:'"start-top"'},{value:'"start-bottom"'}]}},popperModifiers:{defaultValue:null,description:"Passes configurations to the [Popper instance](https://popper.js.org/docs/v2/modifiers/)",name:"popperModifiers",required:!1,type:{name:"Modifiers"}},size:{defaultValue:null,description:"Adjusts the padding and font size",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"extra-large"'}]}},type:{defaultValue:{value:"dark"},description:"Specifies the tooltip type",name:"type",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},zIndex:{defaultValue:null,description:"Sets the `z-index` of the tooltip",name:"zIndex",required:!1,type:{name:"string | number"}},isInitialVisible:{defaultValue:null,description:"Displays the tooltip on initial render",name:"isInitialVisible",required:!1,type:{name:"boolean"}},isVisible:{defaultValue:null,description:"Displays the tooltip",name:"isVisible",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"@ignore ReactNode override",name:"children",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},refKey:{defaultValue:{value:"ref"},description:"Defines the ref key used to position the tooltip",name:"refKey",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/tooltips/src/elements/Tooltip.tsx#Tooltip"]={docgenInfo:Tooltip.__docgenInfo,name:"Tooltip",path:"packages/tooltips/src/elements/Tooltip.tsx#Tooltip"})}catch(__react_docgen_typescript_loader_error){}},"./packages/tooltips/src/styled/StyledParagraph.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>StyledParagraph});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/theming/src/elements/theme/index.ts");const StyledParagraph=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.p.attrs({"data-garden-id":"tooltip.paragraph","data-garden-version":"storybook"}).withConfig({displayName:"StyledParagraph",componentId:"sc-wuqkfc-0"})(["margin:0;",";"],(props=>(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_1__.Z)("tooltip.paragraph",props)));StyledParagraph.defaultProps={theme:_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__.Z}},"./packages/tooltips/src/styled/StyledTitle.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>StyledTitle});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/theming/src/elements/theme/index.ts");const StyledTitle=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.strong.attrs({"data-garden-id":"tooltip.title","data-garden-version":"storybook"}).withConfig({displayName:"StyledTitle",componentId:"sc-vnjcvz-0"})(["display:none;margin:0;font-weight:",";",";"],(props=>props.theme.fontWeights.semibold),(props=>(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_1__.Z)("tooltip.title",props)));StyledTitle.defaultProps={theme:_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__.Z}}}]);