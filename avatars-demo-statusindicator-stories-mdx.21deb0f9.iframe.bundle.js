(self.webpackChunk_zendeskgarden_react_components=self.webpackChunk_zendeskgarden_react_components||[]).push([[6984],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ck:()=>withMDXComponents,Eh:()=>MDXContext,Iu:()=>MDXProvider,MN:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ih:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ih,Qb:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Qb,UF:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UF,_W:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__._W,gF:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gF});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./packages/avatars/demo/statusindicator.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>statusindicator_stories,statusIndicator:()=>statusIndicator});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),StatusIndicator=__webpack_require__("./packages/avatars/src/elements/StatusIndicator.tsx"),README=__webpack_require__("./packages/avatars/README.md"),jsx_runtime=(__webpack_require__("./node_modules/@storybook/react/dist/index.mjs"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const StatusIndicatorStory=_ref=>{let{...args}=_ref;return(0,jsx_runtime.jsx)(StatusIndicator.C,{...args})};function _createMdxContent(props){const _components=Object.assign({h1:"h1"},(0,lib.MN)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.Qb,{title:"Packages/Avatars/StatusIndicator",component:StatusIndicator.C}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"api",children:"API"}),"\n",(0,jsx_runtime.jsx)(dist.UF,{}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"demo",children:"Demo"}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{name:"StatusIndicator",argTypes:{children:{control:"text"}},args:{"aria-label":"Label",children:"Status"},parameters:{design:{allowFullscreen:!0,type:"figma",url:"https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=10927%3A45275"}},children:args=>(0,jsx_runtime.jsx)(StatusIndicatorStory,{...args})})}),"\n",(0,jsx_runtime.jsx)(dist.Ih,{children:README})]})}StatusIndicatorStory.displayName="StatusIndicatorStory";const statusIndicator=args=>(0,jsx_runtime.jsx)(StatusIndicatorStory,{...args});statusIndicator.storyName="StatusIndicator",statusIndicator.argTypes={children:{control:"text"}},statusIndicator.args={"aria-label":"Label",children:"Status"},statusIndicator.parameters={storySource:{source:"args => <StatusIndicatorStory {...args} />"},design:{allowFullscreen:!0,type:"figma",url:"https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=10927%3A45275"}};const componentMeta={title:"Packages/Avatars/StatusIndicator",component:StatusIndicator.C,tags:["stories-mdx"],includeStories:["statusIndicator"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.MN)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const statusindicator_stories=componentMeta,__namedExportsOrder=["statusIndicator"]},"./node_modules/@storybook/react/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/react/dist/chunk-JWY6Y6NU.mjs"),_storybook_global__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("@storybook/global"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("@storybook/preview-api"),{window:globalWindow}=(__webpack_require__("@storybook/client-logger"),_storybook_global__WEBPACK_IMPORTED_MODULE_1__.global);globalWindow&&(globalWindow.STORYBOOK_ENV="react");var api=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.start)(_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.k,{render:_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.a});api.forceReRender,api.clientApi.raw;_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.a},"./node_modules/@zendeskgarden/svg-icons/src/12/arrow-left-sm-stroke.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgArrowLeftSmStroke(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:12,height:12,focusable:"false",viewBox:"0 0 12 12","aria-hidden":"true"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"currentColor",d:"M2.146 6.854a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L3.707 6H9.5a.5.5 0 0 1 0 1H3.707l1.147 1.146a.5.5 0 1 1-.708.708l-2-2Z"})))}},"./node_modules/@zendeskgarden/svg-icons/src/12/clock-stroke.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__});var _g,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgClockStroke(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:12,height:12,focusable:"false",viewBox:"0 0 12 12","aria-hidden":"true"},props),_g||(_g=react__WEBPACK_IMPORTED_MODULE_0__.createElement("g",{fill:"none",stroke:"currentColor"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle",{cx:6,cy:6,r:5.5}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5.5 3v3.5H8"}))))}},"./node_modules/@zendeskgarden/svg-icons/src/16/arrow-left-sm-stroke.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgArrowLeftSmStroke(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,focusable:"false",viewBox:"0 0 16 16","aria-hidden":"true"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"currentColor",d:"M3.146 8.854a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L4.707 8H12.5a.5.5 0 0 1 0 1H4.707l2.147 2.146a.5.5 0 1 1-.708.707l-3-3Z"})))}},"./node_modules/@zendeskgarden/svg-icons/src/16/clock-stroke.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__});var _g,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgClockStroke(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,focusable:"false",viewBox:"0 0 16 16","aria-hidden":"true"},props),_g||(_g=react__WEBPACK_IMPORTED_MODULE_0__.createElement("g",{fill:"none",stroke:"currentColor"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle",{cx:8,cy:8,r:7.5}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M7.5 3v5.5H11"}))))}},"./packages/avatars/src/elements/StatusIndicator.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{C:()=>StatusIndicator});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),useText=__webpack_require__("./packages/theming/src/utils/useText.ts"),clock_stroke=__webpack_require__("./node_modules/@zendeskgarden/svg-icons/src/12/clock-stroke.svg"),_16_clock_stroke=__webpack_require__("./node_modules/@zendeskgarden/svg-icons/src/16/clock-stroke.svg"),arrow_left_sm_stroke=__webpack_require__("./node_modules/@zendeskgarden/svg-icons/src/12/arrow-left-sm-stroke.svg"),_16_arrow_left_sm_stroke=__webpack_require__("./node_modules/@zendeskgarden/svg-icons/src/16/arrow-left-sm-stroke.svg"),types=__webpack_require__("./packages/avatars/src/types/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),retrieveComponentStyles=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),theme=__webpack_require__("./packages/theming/src/elements/theme/index.ts"),utility=__webpack_require__("./packages/avatars/src/styled/utility.ts");const StyledStandaloneStatus=styled_components_browser_esm.cp.figure.attrs({"data-garden-id":"avatars.status-indicator.status","data-garden-version":"storybook"}).withConfig({displayName:"StyledStandaloneStatus",componentId:"sc-1ow4nfj-0"})(["display:inline-flex;flex-flow:row nowrap;transition:all ","s ease-in-out;margin:0;box-sizing:content-box;",";"],utility.CA,(props=>(0,retrieveComponentStyles.c)("avatars.status-indicator.status",props)));StyledStandaloneStatus.defaultProps={theme:theme.c};var StyledStatusIndicatorBase=__webpack_require__("./packages/avatars/src/styled/StyledStatusIndicatorBase.ts");const StyledStandaloneStatusIndicator=(0,styled_components_browser_esm.cp)(StyledStatusIndicatorBase.u).attrs({"data-garden-id":"avatars.status-indicator.indicator","data-garden-version":"storybook"}).withConfig({displayName:"StyledStandaloneStatusIndicator",componentId:"sc-1xt1heq-0"})(["position:relative;box-sizing:content-box;margin-top:",";",";"],(props=>`calc((${props.theme.lineHeights.md} - ${(0,utility.qM)(props,"0")}) / 2)`),(props=>(0,retrieveComponentStyles.c)("avatars.status-indicator.indicator",props)));StyledStandaloneStatusIndicator.defaultProps={type:"offline",theme:theme.c};var getLineHeight=__webpack_require__("./packages/theming/src/utils/getLineHeight.ts");const StyledStandaloneStatusCaption=styled_components_browser_esm.cp.figcaption.attrs({"data-garden-id":"avatars.status-indicator.caption","data-garden-version":"storybook"}).withConfig({displayName:"StyledStandaloneStatusCaption",componentId:"sc-aalyk1-0"})([""," ",";"],(function sizeStyles(props){const marginRule=`margin-${props.theme.rtl?"right":"left"}: ${2*props.theme.space.base}px;`;return(0,styled_components_browser_esm.gV)([""," line-height:",";font-size:",";"],marginRule,(0,getLineHeight.c)(props.theme.lineHeights.md,props.theme.fontSizes.md),props.theme.fontSizes.md)}),(props=>(0,retrieveComponentStyles.c)("avatars.status-indicator.caption",props)));StyledStandaloneStatusCaption.defaultProps={theme:theme.c};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const StatusIndicator=(0,react.forwardRef)(((_ref,ref)=>{let{children,type,isCompact,"aria-label":label,...props}=_ref,ClockIcon=_16_clock_stroke.c,ArrowLeftIcon=_16_arrow_left_sm_stroke.c;isCompact&&(ClockIcon=clock_stroke.c,ArrowLeftIcon=arrow_left_sm_stroke.c);const defaultLabel=(0,react.useMemo)((()=>["status"].concat(type||[]).join(": ")),[type]),ariaLabel=(0,useText.c)(StatusIndicator,{"aria-label":label},"aria-label",defaultLabel);return(0,jsx_runtime.jsxs)(StyledStandaloneStatus,{role:"status",ref,...props,children:[(0,jsx_runtime.jsxs)(StyledStandaloneStatusIndicator,{role:"img",type,size:isCompact?"small":"medium","aria-label":ariaLabel,children:["away"===type?(0,jsx_runtime.jsx)(ClockIcon,{"data-icon-status":type,"aria-hidden":"true"}):null,"transfers"===type?(0,jsx_runtime.jsx)(ArrowLeftIcon,{"data-icon-status":type,"aria-hidden":"true"}):null]}),children&&(0,jsx_runtime.jsx)(StyledStandaloneStatusCaption,{children})]})}));StatusIndicator.displayName="StatusIndicator",StatusIndicator.propTypes={type:prop_types_default().oneOf(types.b),isCompact:prop_types_default().bool},StatusIndicator.defaultProps={type:"offline"};try{StatusIndicator.displayName="StatusIndicator",StatusIndicator.__docgenInfo={description:"",displayName:"StatusIndicator",props:{type:{defaultValue:{value:"offline"},description:"Applies status type for styling and default aria-label",name:"type",required:!1,type:{name:"enum",value:[{value:'"available"'},{value:'"away"'},{value:'"transfers"'},{value:'"offline"'}]}},isCompact:{defaultValue:null,description:"Applies compact styling",name:"isCompact",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/avatars/src/elements/StatusIndicator.tsx#StatusIndicator"]={docgenInfo:StatusIndicator.__docgenInfo,name:"StatusIndicator",path:"packages/avatars/src/elements/StatusIndicator.tsx#StatusIndicator"})}catch(__react_docgen_typescript_loader_error){}},"./packages/avatars/src/styled/StyledStatusIndicatorBase.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{u:()=>StyledStatusIndicatorBase});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/theming/src/elements/theme/index.ts"),_utility__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/avatars/src/styled/utility.ts");const iconFadeIn=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.xZ)(["0%{opacity:0;}100%{opacity:1;}"]),StyledStatusIndicatorBase=styled_components__WEBPACK_IMPORTED_MODULE_0__.cp.div.attrs({"data-garden-id":"avatars.status-indicator.base","data-garden-version":"storybook"}).withConfig({displayName:"StyledStatusIndicatorBase",componentId:"sc-1rininy-0"})(["transition:inherit;"," "," ",";"],(props=>{const offset=(0,_utility__WEBPACK_IMPORTED_MODULE_1__.kh)(props),size=(0,_utility__WEBPACK_IMPORTED_MODULE_1__.qM)(props,offset);return(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.gV)(["border:"," ",";border-radius:",";width:",";min-width:",";height:",";line-height:",";& > svg{position:absolute;top:-",";left:-",";transform-origin:50% 50%;animation:"," ","s;max-height:unset;&[data-icon-status='transfers']{transform:scale(",",1);}&[data-icon-status='away'] circle{display:none;}}"],offset,props.theme.borderStyles.solid,size,size,size,size,size,offset,offset,iconFadeIn,_utility__WEBPACK_IMPORTED_MODULE_1__.CA,props.theme.rtl?-1:1)}),(props=>{let backgroundColor=(0,_utility__WEBPACK_IMPORTED_MODULE_1__.gN)(props.type,props.theme),borderColor=backgroundColor;return"offline"===props.type&&(borderColor=(0,_utility__WEBPACK_IMPORTED_MODULE_1__.gN)(props.type,props.theme),backgroundColor=props.theme.palette.white),(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.gV)(["border-color:",";background-color:",";color:",";"],borderColor,backgroundColor,props.theme.palette.white)}),(props=>(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__.c)("avatars.status-indicator.base",props)));StyledStatusIndicatorBase.defaultProps={theme:_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_3__.c,size:"small"}},"./packages/avatars/src/styled/utility.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{CA:()=>TRANSITION_DURATION,KM:()=>includes,gN:()=>getStatusColor,kh:()=>getStatusBorderOffset,qM:()=>getStatusSize});var _zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/theming/src/utils/getColorV8.ts"),polished__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/polished/dist/polished.esm.js"),_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/avatars/src/types/index.ts");const[xxs,xs,s,m,l]=_types__WEBPACK_IMPORTED_MODULE_0__.g,TRANSITION_DURATION=.25;function getStatusColor(type,theme){switch(type){case"active":return(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_1__.G)("crimson",400,theme);case"available":return(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_1__.G)("mint",400,theme);case"away":return(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_1__.G)("orange",400,theme);case"transfers":return(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_1__.G)("azure",400,theme);case"offline":return(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_1__.G)("grey",500,theme);default:return"transparent"}}function getStatusBorderOffset(props){return props.size===xxs?(0,polished__WEBPACK_IMPORTED_MODULE_2__.dU)(`${props.theme.shadowWidths.sm} - 1`):props.theme.shadowWidths.sm}function getStatusSize(props,offset){const isActive="active"===props.type;switch(props.size){case xxs:return(0,polished__WEBPACK_IMPORTED_MODULE_2__.dU)(`${props.theme.space.base}px - ${offset}`);case xs:return(0,polished__WEBPACK_IMPORTED_MODULE_2__.dU)(`${2*props.theme.space.base}px - (${offset} * 2)`);case s:return(0,polished__WEBPACK_IMPORTED_MODULE_2__.dU)(`${3*props.theme.space.base}px ${isActive?"":`- (${offset} * 2)`}`);case m:case l:return(0,polished__WEBPACK_IMPORTED_MODULE_2__.dU)(`${4*props.theme.space.base}px ${isActive?"":`- (${offset} * 2)`}`);default:return"0"}}function includes(array,element){return array.includes(element)}},"./packages/avatars/src/types/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{b:()=>STATUS,g:()=>SIZE});__webpack_require__("./node_modules/react/index.js");const SIZE=["extraextrasmall","extrasmall","small","medium","large"],STATUS=["available","away","transfers","offline"]},"./packages/theming/src/utils/getLineHeight.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>getLineHeight});var polished__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/polished/dist/polished.esm.js");function getLineHeight(height,fontSize){const[heightValue,heightUnit]=(0,polished__WEBPACK_IMPORTED_MODULE_0__.UZ)(height.toString()),[fontSizeValue,fontSizeUnit]=(0,polished__WEBPACK_IMPORTED_MODULE_0__.UZ)(fontSize.toString());if(heightUnit&&"px"!==heightUnit)throw new Error(`Unexpected \`height\` with '${heightUnit}' units.`);if(fontSizeUnit&&"px"!==fontSizeUnit)throw new Error(`Unexpected \`fontSize\` with '${fontSizeUnit}' units.`);return heightValue/fontSizeValue}},"./packages/theming/src/utils/retrieveComponentStyles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function retrieveComponentStyles(componentId,props){const components=props.theme&&props.theme.components;if(!components)return;const componentStyles=components[componentId];return"function"==typeof componentStyles?componentStyles(props):componentStyles}__webpack_require__.d(__webpack_exports__,{c:()=>retrieveComponentStyles})},"./packages/theming/src/utils/useText.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>useText});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useText=function(component,props,name,text){let condition=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];const value=condition?props[name]:void 0;return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>{if(condition){if("children"===name)throw new Error("Error: `children` is not a valid `useText` prop.");if(null===value||""===value)throw new Error(component.displayName?`Error: you must provide a valid \`${name}\` text value for <${component.displayName}>.`:`Error: you must provide a valid \`${name}\` text value.`);if(void 0===value)return text}return value}),[component.displayName,value,name,text,condition])}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./packages/avatars/README.md":module=>{"use strict";module.exports='# @zendeskgarden/react-avatars [![npm version](https://flat.badgen.net/npm/v/@zendeskgarden/react-avatars)](https://www.npmjs.com/package/@zendeskgarden/react-avatars)\n\nThis package includes components relating to avatars in the\n[Garden Design System](https://zendeskgarden.github.io/).\n\n## Installation\n\n```sh\nnpm install @zendeskgarden/react-avatars\n\n# Peer Dependencies - Also Required\nnpm install react react-dom styled-components @zendeskgarden/react-theming\n```\n\n## Usage\n\n```jsx\nimport { ThemeProvider } from \'@zendeskgarden/react-theming\';\nimport { Avatar, StatusIndicator } from \'@zendeskgarden/react-avatars\';\n\n/**\n * Place a `ThemeProvider` at the root of your React application\n */\n<ThemeProvider>\n  <Avatar>\n    <img src="images/user.png" alt="Example Avatar" />\n  </Avatar>\n\n  <StatusIndicator type="available" aria-label="status: online">\n    Available\n  </StatusIndicator>\n</ThemeProvider>;\n```\n'}}]);