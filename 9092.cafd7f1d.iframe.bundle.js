"use strict";(self.webpackChunk_zendeskgarden_react_components=self.webpackChunk_zendeskgarden_react_components||[]).push([[9092],{"./packages/chrome/src/elements/Chrome.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>Chrome});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./packages/chrome/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),polished_esm=__webpack_require__("./packages/chrome/node_modules/polished/dist/polished.esm.js"),getColor=__webpack_require__("./packages/theming/src/utils/getColor.ts"),useDocument=__webpack_require__("./packages/theming/src/utils/useDocument.ts"),useChromeContext=__webpack_require__("./packages/chrome/src/utils/useChromeContext.ts"),retrieveComponentStyles=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),theme=__webpack_require__("./packages/theming/src/elements/theme/index.ts");const StyledChrome=styled_components_browser_esm.ZP.div.attrs({"data-garden-id":"chrome.chrome","data-garden-version":"storybook"}).withConfig({displayName:"StyledChrome",componentId:"sc-1uqm6u6-0"})(["display:flex;position:relative;margin:0;height:100vh;overflow-y:hidden;font-family:",";direction:",";",";"],(props=>props.theme.fonts.system),(props=>props.theme.rtl&&"rtl"),(props=>(0,retrieveComponentStyles.Z)("chrome.chrome",props)));StyledChrome.defaultProps={theme:theme.Z};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Chrome=react.forwardRef(((_ref,ref)=>{let{hue,isFluid,...props}=_ref;const theme=(0,react.useContext)(styled_components_browser_esm.Ni),isLightMemoized=(0,react.useMemo)((()=>{if(hue){const backgroundColor=(0,getColor.L)(hue,600,theme),LIGHT_COLOR="white";return(0,polished_esm.XV)(backgroundColor,LIGHT_COLOR,void 0,!1)===LIGHT_COLOR}return!1}),[hue,theme]),isLight=!!hue&&isLightMemoized,isDark=!!hue&&!isLightMemoized,chromeContextValue=(0,react.useMemo)((()=>({hue:hue||"chromeHue",isLight,isDark})),[hue,isLight,isDark]),environment=(0,useDocument.k)(theme);return(0,react.useEffect)((()=>{if(environment&&!isFluid){const htmlElement=environment.querySelector("html");if(htmlElement){const defaultHtmlPosition=htmlElement.style.position;return htmlElement.style.position="fixed",()=>{htmlElement.style.position=defaultHtmlPosition}}}}),[environment,isFluid]),(0,jsx_runtime.jsx)(useChromeContext.n.Provider,{value:chromeContextValue,children:(0,jsx_runtime.jsx)(StyledChrome,{ref,...props})})}));Chrome.displayName="Chrome",Chrome.propTypes={hue:prop_types_default().string};try{Chrome.displayName="Chrome",Chrome.__docgenInfo={description:"",displayName:"Chrome",props:{hue:{defaultValue:null,description:"Applies a custom hue to the chrome navigation",name:"hue",required:!1,type:{name:"string"}},isFluid:{defaultValue:null,description:"Prevents fixed positioning from being applied to the `<html>` element",name:"isFluid",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/chrome/src/elements/Chrome.tsx#Chrome"]={docgenInfo:Chrome.__docgenInfo,name:"Chrome",path:"packages/chrome/src/elements/Chrome.tsx#Chrome"})}catch(__react_docgen_typescript_loader_error){}},"./packages/chrome/src/elements/body/Body.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>Body});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./packages/chrome/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),getColor=__webpack_require__("./packages/theming/src/utils/getColor.ts"),retrieveComponentStyles=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),theme=__webpack_require__("./packages/theming/src/elements/theme/index.ts");const StyledBody=styled_components_browser_esm.ZP.div.attrs({"data-garden-id":"chrome.body","data-garden-version":"storybook"}).withConfig({displayName:"StyledBody",componentId:"sc-c7h9kv-0"})(["flex:1;order:1;background-color:",";min-width:0;",";"],(props=>(0,getColor.L)("neutralHue",100,props.theme)),(props=>(0,retrieveComponentStyles.Z)("chrome.body",props)));StyledBody.defaultProps={theme:theme.Z};var useBodyContext=__webpack_require__("./packages/chrome/src/utils/useBodyContext.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Body=react.forwardRef(((_ref,ref)=>{let{hasFooter,...props}=_ref;const bodyContextValue=(0,react.useMemo)((()=>({hasFooter:!!hasFooter})),[hasFooter]);return(0,jsx_runtime.jsx)(useBodyContext.Y.Provider,{value:bodyContextValue,children:(0,jsx_runtime.jsx)(StyledBody,{ref,...props})})}));Body.displayName="Body",Body.propTypes={hasFooter:prop_types_default().bool};try{Body.displayName="Body",Body.__docgenInfo={description:"",displayName:"Body",props:{hasFooter:{defaultValue:null,description:"Adjusts the body content height to allow space for a footer component",name:"hasFooter",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/chrome/src/elements/body/Body.tsx#Body"]={docgenInfo:Body.__docgenInfo,name:"Body",path:"packages/chrome/src/elements/body/Body.tsx#Body"})}catch(__react_docgen_typescript_loader_error){}},"./packages/chrome/src/elements/header/Header.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>Header});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/chrome/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),_styled__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/chrome/src/styled/header/StyledHeader.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Header=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styled__WEBPACK_IMPORTED_MODULE_2__.e,{ref,...props})));Header.displayName="Header",Header.propTypes={isStandalone:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool};try{Header.displayName="Header",Header.__docgenInfo={description:"",displayName:"Header",props:{isStandalone:{defaultValue:null,description:"Displays logo for standlone usage",name:"isStandalone",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/chrome/src/elements/header/Header.tsx#Header"]={docgenInfo:Header.__docgenInfo,name:"Header",path:"packages/chrome/src/elements/header/Header.tsx#Header"})}catch(__react_docgen_typescript_loader_error){}},"./packages/chrome/src/elements/header/HeaderItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>HeaderItem});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./packages/chrome/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),types=__webpack_require__("./packages/chrome/src/types/index.ts"),StyledLogoHeaderItem=__webpack_require__("./packages/chrome/src/styled/header/StyledLogoHeaderItem.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),polished_esm=__webpack_require__("./packages/chrome/node_modules/polished/dist/polished.esm.js"),focusStyles=__webpack_require__("./packages/theming/src/utils/focusStyles.ts"),getColor=__webpack_require__("./packages/theming/src/utils/getColor.ts"),retrieveComponentStyles=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),theme=__webpack_require__("./packages/theming/src/elements/theme/index.ts"),StyledHeaderItemIcon=__webpack_require__("./packages/chrome/src/styled/header/StyledHeaderItemIcon.ts"),StyledBaseHeaderItem=__webpack_require__("./packages/chrome/src/styled/header/StyledBaseHeaderItem.ts"),StyledHeaderItemText=__webpack_require__("./packages/chrome/src/styled/header/StyledHeaderItemText.ts");const StyledHeaderItem=(0,styled_components_browser_esm.ZP)(StyledBaseHeaderItem.d).attrs({"data-garden-id":"chrome.header_item","data-garden-version":"storybook"}).withConfig({displayName:"StyledHeaderItem",componentId:"sc-14sft6n-0"})(["&:hover,&:focus{text-decoration:none;color:inherit;}"," &:focus-visible:active,&[data-garden-focus-visible]:active{box-shadow:none;}&:hover ",",&:hover ",",&:active ",",&:active ","{color:",";}"," "," ",";"],(props=>(0,focusStyles.j)({theme:props.theme,inset:props.maxY})),StyledHeaderItemIcon.V,StyledHeaderItemText.u,StyledHeaderItemIcon.V,StyledHeaderItemText.u,(props=>(0,getColor.L)("chromeHue",700,props.theme)),(props=>{const size=(0,polished_esm.mA)(`${(0,StyledBaseHeaderItem.i)(props)} - ${2*props.theme.space.base}`);return(0,styled_components_browser_esm.iv)(["img{margin:0;border-radius:",";width:",";height:",";}"],(0,polished_esm.mA)(`${props.theme.borderRadii.md} - 1`),size,size)}),(props=>props.isRound&&`\n    ${StyledHeaderItemIcon.V} {\n      border-radius: 100px;\n    }\n  `),(props=>(0,retrieveComponentStyles.Z)("chrome.header_item",props)));StyledHeaderItem.defaultProps={theme:theme.Z};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const HeaderItem=react.forwardRef(((_ref,ref)=>{let{hasLogo,product,...other}=_ref;return hasLogo?(0,jsx_runtime.jsx)(StyledLogoHeaderItem.t,{ref,product,...other}):(0,jsx_runtime.jsx)(StyledHeaderItem,{ref,...other})}));HeaderItem.displayName="HeaderItem",HeaderItem.propTypes={maxX:prop_types_default().bool,maxY:prop_types_default().bool,isRound:prop_types_default().bool,product:prop_types_default().oneOf(types.c),hasLogo:prop_types_default().bool};try{HeaderItem.displayName="HeaderItem",HeaderItem.__docgenInfo={description:"",displayName:"HeaderItem",props:{maxX:{defaultValue:null,description:"Maximizes the width of a flex item in the header",name:"maxX",required:!1,type:{name:"boolean"}},maxY:{defaultValue:null,description:"Maximizes the height of the item (i.e. contains a search input)",name:"maxY",required:!1,type:{name:"boolean"}},isRound:{defaultValue:null,description:"Rounds the border radius of the item",name:"isRound",required:!1,type:{name:"boolean"}},product:{defaultValue:null,description:"Applies a\n[brand color](/design/color#brand-colors)\nto the product logo",name:"product",required:!1,type:{name:"enum",value:[{value:'"message"'},{value:'"chat"'},{value:'"connect"'},{value:'"explore"'},{value:'"guide"'},{value:'"support"'},{value:'"talk"'}]}},hasLogo:{defaultValue:null,description:"Applies header logo styles to the item",name:"hasLogo",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/chrome/src/elements/header/HeaderItem.tsx#HeaderItem"]={docgenInfo:HeaderItem.__docgenInfo,name:"HeaderItem",path:"packages/chrome/src/elements/header/HeaderItem.tsx#HeaderItem"})}catch(__react_docgen_typescript_loader_error){}},"./packages/chrome/src/elements/header/HeaderItemIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>HeaderItemIcon});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_styled__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/chrome/src/styled/header/StyledHeaderItemIcon.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const HeaderItemIcon=_ref=>{let{children,...props}=_ref;const element=react__WEBPACK_IMPORTED_MODULE_0__.Children.only(children);if((0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(element)){const Icon=_ref2=>{let{theme,...iconProps}=_ref2;return(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(element,{...props,...iconProps})};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styled__WEBPACK_IMPORTED_MODULE_2__.V,{as:Icon,...props})}return null};try{HeaderItemIcon.displayName="HeaderItemIcon",HeaderItemIcon.__docgenInfo={description:"",displayName:"HeaderItemIcon",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/chrome/src/elements/header/HeaderItemIcon.tsx#HeaderItemIcon"]={docgenInfo:HeaderItemIcon.__docgenInfo,name:"HeaderItemIcon",path:"packages/chrome/src/elements/header/HeaderItemIcon.tsx#HeaderItemIcon"})}catch(__react_docgen_typescript_loader_error){}},"./packages/chrome/src/styled/header/StyledBaseHeaderItem.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>StyledBaseHeaderItem,i:()=>getHeaderItemSize});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/theming/src/utils/getLineHeight.ts"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/theming/src/elements/theme/index.ts");const getHeaderItemSize=props=>7.5*props.theme.space.base+"px",StyledBaseHeaderItem=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.button.attrs({"data-garden-id":"chrome.base_header_item","data-garden-version":"storybook"}).withConfig({displayName:"StyledBaseHeaderItem",componentId:"sc-1qua7h6-0"})(["display:inline-flex;position:relative;flex:",";align-items:center;justify-content:",";order:1;transition:box-shadow 0.1s ease-in-out,color 0.1s ease-in-out;z-index:0;margin:",";border:none;border-radius:",";background:transparent;text-decoration:none;white-space:nowrap;color:inherit;font-size:inherit;"," ",";"],(props=>props.maxX&&"1"),(props=>props.maxX?"start":"center"),(props=>`0 ${3*props.theme.space.base}px`),(props=>props.isRound?"100%":props.maxY?"0":props.theme.borderRadii.md),(props=>{const size=7.5*props.theme.space.base;return(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["padding:0 3px;min-width:","px;height:",";line-height:",";"],size,props.maxY?"100%":`${size}px`,(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_1__.Z)(size,props.theme.fontSizes.md))}),(props=>(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__.Z)("chrome.base_header_item",props)));StyledBaseHeaderItem.defaultProps={theme:_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_3__.Z}},"./packages/chrome/src/styled/header/StyledHeader.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>getHeaderHeight,e:()=>StyledHeader});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/theming/src/utils/getColor.ts"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/theming/src/elements/theme/index.ts"),_StyledLogoHeaderItem__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/chrome/src/styled/header/StyledLogoHeaderItem.ts"),_nav_StyledBaseNavItem__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/chrome/src/styled/nav/StyledBaseNavItem.ts");const getHeaderHeight=props=>(0,_nav_StyledBaseNavItem__WEBPACK_IMPORTED_MODULE_0__.q)(props),StyledHeader=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.header.attrs({"data-garden-id":"chrome.header","data-garden-version":"storybook"}).withConfig({displayName:"StyledHeader",componentId:"sc-1cexpz-0"})(["display:flex;position:",";align-items:center;justify-content:flex-end;box-sizing:border-box;border-bottom:",";box-shadow:",";background-color:",";padding:0 ","px;height:",";color:",";font-size:",";"," ",";"],(props=>props.isStandalone&&"relative"),(props=>`${props.theme.borders.sm} ${(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__.L)("neutralHue",300,props.theme)}`),(props=>props.isStandalone&&props.theme.shadows.lg("0","10px",(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__.L)("chromeHue",600,props.theme,.15))),(props=>props.theme.colors.background),(props=>props.theme.space.base),getHeaderHeight,(props=>(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__.L)("neutralHue",600,props.theme)),(props=>props.theme.fontSizes.md),(props=>props.isStandalone&&`\n    ${_StyledLogoHeaderItem__WEBPACK_IMPORTED_MODULE_3__.t} {\n      display: inline-flex;\n    }\n  `),(props=>(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_4__.Z)("chrome.header",props)));StyledHeader.defaultProps={theme:_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_5__.Z}},"./packages/chrome/src/styled/header/StyledHeaderItemIcon.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>StyledHeaderItemIcon});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/theming/src/elements/theme/index.ts");const StyledHeaderItemIcon=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.div.attrs({"data-garden-id":"chrome.header_item_icon","data-garden-version":"storybook"}).withConfig({displayName:"StyledHeaderItemIcon",componentId:"sc-1jhhp6z-0"})(["transition:transform 0.25s ease-in-out;margin:0 3px;width:",";min-width:",";height:",";",";"],(props=>props.theme.iconSizes.md),(props=>props.theme.iconSizes.md),(props=>props.theme.iconSizes.md),(props=>(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_1__.Z)("chrome.header_item_icon",props)));StyledHeaderItemIcon.defaultProps={theme:_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__.Z}},"./packages/chrome/src/styled/header/StyledHeaderItemText.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>clippedStyling,u:()=>StyledHeaderItemText});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/theming/src/elements/theme/index.ts");const clippedStyling=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["position:absolute;margin:0;clip:rect(1px,1px,1px,1px);width:1px;height:1px;overflow:hidden;white-space:nowrap;"]),StyledHeaderItemText=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.span.attrs({"data-garden-id":"chrome.header_item_text","data-garden-version":"storybook"}).withConfig({displayName:"StyledHeaderItemText",componentId:"sc-goz7la-0"})(["margin:0 3px;"," ",";"],(props=>props.isClipped&&clippedStyling),(props=>(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_1__.Z)("chrome.header_item_text",props)));StyledHeaderItemText.defaultProps={theme:_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__.Z}},"./packages/chrome/src/styled/header/StyledLogoHeaderItem.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>StyledLogoHeaderItem});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/theming/src/elements/palette/index.ts"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/theming/src/utils/getColor.ts"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./packages/theming/src/elements/theme/index.ts"),_StyledHeaderItemIcon__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/chrome/src/styled/header/StyledHeaderItemIcon.ts"),_StyledBaseHeaderItem__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/chrome/src/styled/header/StyledBaseHeaderItem.ts"),_StyledHeaderItemText__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/chrome/src/styled/header/StyledHeaderItemText.ts"),_nav_StyledNav__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/chrome/src/styled/nav/StyledNav.ts");const StyledLogoHeaderItem=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP)(_StyledBaseHeaderItem__WEBPACK_IMPORTED_MODULE_2__.d).attrs({"data-garden-id":"chrome.header_item","data-garden-version":"storybook",as:"div"}).withConfig({displayName:"StyledLogoHeaderItem",componentId:"sc-1n1d1yv-0"})(["display:none;order:0;margin-right:",";margin-left:",";border-",":",";border-radius:0;padding:0;width:",";height:100%;overflow:hidden;fill:",";text-decoration:none;color:",";","{","}","{margin:0;width:",";height:",";}",";"],(props=>props.theme.rtl?`-${props.theme.space.base}px`:"auto"),(props=>props.theme.rtl?"auto":`-${props.theme.space.base}px`),(props=>props.theme.rtl?"left":"right"),(props=>`${props.theme.borders.sm} ${(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_3__.L)("neutralHue",300,props.theme)}`),(props=>(0,_nav_StyledNav__WEBPACK_IMPORTED_MODULE_4__.$b)(props)),(props=>(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_3__.L)("chromeHue",700,props.theme)),(props=>(props=>{switch(props.product){case"chat":return _zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_0__.Z.product.chat;case"connect":return _zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_0__.Z.product.connect;case"explore":return _zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_0__.Z.product.explore;case"guide":return _zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_0__.Z.product.guide;case"message":return _zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_0__.Z.product.message;case"support":return _zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_0__.Z.product.support;case"talk":return _zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_0__.Z.product.talk;default:return"inherit"}})(props)),_StyledHeaderItemText__WEBPACK_IMPORTED_MODULE_5__.u,_StyledHeaderItemText__WEBPACK_IMPORTED_MODULE_5__.f,_StyledHeaderItemIcon__WEBPACK_IMPORTED_MODULE_6__.V,(props=>props.theme.iconSizes.lg),(props=>props.theme.iconSizes.lg),(props=>(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_7__.Z)("chrome.header_item",props)));StyledLogoHeaderItem.defaultProps={theme:_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_8__.Z}},"./packages/chrome/src/styled/nav/StyledBaseNavItem.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>StyledBaseNavItem,q:()=>getNavItemHeight});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),polished__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/chrome/node_modules/polished/dist/polished.esm.js"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/theming/src/elements/theme/index.ts"),_StyledNav__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/chrome/src/styled/nav/StyledNav.ts");const getNavItemHeight=props=>13*props.theme.space.base+"px",StyledBaseNavItem=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.button.attrs({"data-garden-id":"chrome.base_nav_item","data-garden-version":"storybook"}).withConfig({displayName:"StyledBaseNavItem",componentId:"sc-zvo43f-0"})(["display:flex;flex-shrink:0;align-items:center;justify-content:center;transition:outline-color 0.1s ease-in-out,box-shadow 0.1s ease-in-out,background-color 0.1s ease-in-out,opacity 0.1s ease-in-out;border:none;box-sizing:border-box;background:transparent;text-decoration:none;color:inherit;font-size:inherit;",""],(props=>(props=>{const verticalPadding=(0,polished__WEBPACK_IMPORTED_MODULE_0__.mA)(`(${getNavItemHeight(props)} - ${props.theme.iconSizes.lg}) / 2`),horizontalPadding=(0,polished__WEBPACK_IMPORTED_MODULE_0__.mA)(`(${(0,_StyledNav__WEBPACK_IMPORTED_MODULE_1__.$b)(props)} - ${props.theme.iconSizes.lg}) / 4`);return(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.iv)(["padding:"," ",";min-height:",";"],verticalPadding,horizontalPadding,getNavItemHeight)})(props)));StyledBaseNavItem.defaultProps={theme:_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_3__.Z}},"./packages/chrome/src/styled/nav/StyledNav.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$b:()=>getNavWidth,Y6:()=>StyledNav});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/theming/src/utils/getColor.ts"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/theming/src/elements/theme/index.ts");const getNavWidth=props=>15*props.theme.space.base+"px",getExpandedNavWidth=()=>"200px",StyledNav=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.nav.attrs({"data-garden-id":"chrome.nav","data-garden-version":"storybook"}).withConfig({displayName:"StyledNav",componentId:"sc-6j462r-0"})(["display:flex;position:relative;flex-direction:column;flex-shrink:0;order:-1;width:",";font-size:",";",";",";"],(props=>props.isExpanded?getExpandedNavWidth:getNavWidth),(props=>props.theme.fontSizes.md),(props=>(props=>{const shade=props.isDark||props.isLight?600:700,backgroundColor=(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_0__.L)(props.hue,shade,props.theme),foregroundColor=props.isLight?props.theme.palette.grey[800]:props.theme.palette.white;return(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.iv)(["background-color:",";color:",";"],backgroundColor,foregroundColor)})(props)),(props=>(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__.Z)("chrome.nav",props)));StyledNav.defaultProps={theme:_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_3__.Z}},"./packages/chrome/src/utils/useBodyContext.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>BodyContext,n:()=>useBodyContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const BodyContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({hasFooter:!0}),useBodyContext=()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(BodyContext)},"./packages/chrome/src/utils/useChromeContext.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>useChromeContext,n:()=>ChromeContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const ChromeContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({hue:"chromeHue"}),useChromeContext=()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ChromeContext)}}]);