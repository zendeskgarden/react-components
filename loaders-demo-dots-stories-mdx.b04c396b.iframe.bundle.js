(self.webpackChunk_zendeskgarden_react_components=self.webpackChunk_zendeskgarden_react_components||[]).push([[4216],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ck:()=>withMDXComponents,Eh:()=>MDXContext,Iu:()=>MDXProvider,MN:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ih:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ih,Qb:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Qb,UF:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UF,_W:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__._W,gF:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gF});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./packages/loaders/demo/dots.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>dots_stories,dots:()=>dots});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),index_esm=__webpack_require__("./node_modules/@zendeskgarden/container-schedule/dist/index.esm.js"),useDocument=__webpack_require__("./packages/theming/src/utils/useDocument.ts"),StyledLoadingPlaceholder=__webpack_require__("./packages/loaders/src/styled/StyledLoadingPlaceholder.ts"),StyledSVG=__webpack_require__("./packages/loaders/src/styled/StyledSVG.ts");const dotOneKeyframes=(0,styled_components_browser_esm.xZ)(["0%{transform:translate(0,5px);}3%{transform:translate(1px,-5px);}6%{transform:translate(3px,-15px);}8%{transform:translate(5px,-18px);}9%{transform:translate(7px,-21px);}11%{transform:translate(8px,-22px);}13%{transform:translate(9px,-23px);}16%{transform:translate(12px,-25px);}18%{transform:translate(13px,-26px);}23%{transform:translate(18px,-26px);}24%{transform:translate(19px,-25px);}28%{transform:translate(22px,-23px);}31%{transform:translate(24px,-21px);}33%{transform:translate(26px,-18px);}34%{transform:translate(28px,-14px);}36%{transform:translate(29px,-12px);}38%{transform:translate(30px,-5px);}39%{transform:translate(31px,5px);}54%{transform:translate(31px,3px);}59%{transform:translate(33px);}61%{transform:translate(43px);}63%{transform:translate(48px);}64%{transform:translate(51px);}66%{transform:translate(53px);}68%{transform:translate(55px);}69%{transform:translate(57px);}76%{transform:translate(60px);}81%{transform:translate(61px);}83%,100%{transform:translate(62px);}"]),dotTwoKeyframes=(0,styled_components_browser_esm.xZ)(["4%{transform:translate(0);}6%{transform:translate(-1px);}8%{transform:translate(-2px);}9%{transform:translate(-5px);}11%{transform:translate(-7px);}13%{transform:translate(-12px);}14%{transform:translate(-17px);}16%{transform:translate(-19px);}18%{transform:translate(-22px);}19%{transform:translate(-25px);}21%{transform:translate(-26px);}23%{transform:translate(-27px);}24%{transform:translate(-28px);}26%{transform:translate(-29px);}29%{transform:translate(-30px);}33%,89%{transform:translate(-31px);}91%{transform:translate(-31px,1px);}94%{transform:translate(-31px,2px);}98%{transform:translate(-31px,3px);}99%{transform:translate(-31px,4px);}100%{transform:translate(-31px,5px);}"]),dotThreeKeyframes=(0,styled_components_browser_esm.xZ)(["39%{transform:translate(0);}44%{transform:translate(0,1px);}46%{transform:translate(0,2px);}48%{transform:translate(0,3px);}49%{transform:translate(0,4px);}51%{transform:translate(0,5px);}53%{transform:translate(-1px,-6px);}54%{transform:translate(-2px,-13px);}56%{transform:translate(-3px,-15px);}58%{transform:translate(-5px,-19px);}59%{transform:translate(-7px,-21px);}61%{transform:translate(-8px,-22px);}63%{transform:translate(-9px,-24px);}64%{transform:translate(-11px,-25px);}66%{transform:translate(-12px,-26px);}74%{transform:translate(-19px,-26px);}76%{transform:translate(-20px,-25px);}78%{transform:translate(-22px,-24px);}81%{transform:translate(-24px,-21px);}83%{transform:translate(-26px,-19px);}84%{transform:translate(-28px,-15px);}86%{transform:translate(-29px,-13px);}88%{transform:translate(-30px,-6px);}89%{transform:translate(-31px,5px);}91%{transform:translate(-31px,4px);}93%{transform:translate(-31px,3px);}94%{transform:translate(-31px,2px);}98%{transform:translate(-31px,1px);}100%{transform:translate(-31px);}"]);var theme=__webpack_require__("./packages/theming/src/elements/theme/index.ts");const StyledDotsCircle=styled_components_browser_esm.cp.circle.attrs({cy:36,r:9}).withConfig({displayName:"StyledDots__StyledDotsCircle",componentId:"sc-1ltah7e-0"})([""]);StyledDotsCircle.defaultProps={theme:theme.c};const animationStyles=(animationName,props)=>(0,styled_components_browser_esm.gV)(["animation:"," ","ms linear infinite;"],animationName,props.duration),StyledDotsCircleOne=(0,styled_components_browser_esm.cp)(StyledDotsCircle).attrs({cx:9}).withConfig({displayName:"StyledDots__StyledDotsCircleOne",componentId:"sc-1ltah7e-1"})(["",";"],(props=>animationStyles(dotOneKeyframes,props)));StyledDotsCircleOne.defaultProps={theme:theme.c};const StyledDotsCircleTwo=(0,styled_components_browser_esm.cp)(StyledDotsCircle).attrs((()=>({cx:40}))).withConfig({displayName:"StyledDots__StyledDotsCircleTwo",componentId:"sc-1ltah7e-2"})(["",";"],(props=>animationStyles(dotTwoKeyframes,props)));StyledDotsCircleTwo.defaultProps={theme:theme.c};const StyledDotsCircleThree=(0,styled_components_browser_esm.cp)(StyledDotsCircle).attrs((()=>({cx:71}))).withConfig({displayName:"StyledDots__StyledDotsCircleThree",componentId:"sc-1ltah7e-3"})(["",";"],(props=>animationStyles(dotThreeKeyframes,props)));StyledDotsCircleThree.defaultProps={theme:theme.c};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Dots=(0,react.forwardRef)(((_ref,ref)=>{let{size,color,duration,delayMS,...other}=_ref;const theme=(0,react.useContext)(styled_components_browser_esm.Oy),environment=(0,useDocument.y)(theme),canTransformSVG=(0,react.useRef)(null);if(environment&&null===canTransformSVG.current){const svg=environment.createElementNS("http://www.w3.org/2000/svg","svg");canTransformSVG.current="transform"in svg}const{delayComplete}=(0,index_esm.W)({duration,delayMS,loop:!0}),dotOne=(0,react.useRef)(null),dotTwo=(0,react.useRef)(null),dotThree=(0,react.useRef)(null);return(0,react.useEffect)((()=>{if(!canTransformSVG.current&&delayComplete){const transforms=[window.getComputedStyle(dotOne.current).getPropertyValue("transform"),window.getComputedStyle(dotTwo.current).getPropertyValue("transform"),window.getComputedStyle(dotThree.current).getPropertyValue("transform")];dotOne.current.setAttribute("transform",transforms[0]),dotTwo.current.setAttribute("transform",transforms[1]),dotThree.current.setAttribute("transform",transforms[2])}})),delayComplete||0===delayMS?(0,jsx_runtime.jsx)(StyledSVG.i,{ref,fontSize:size,color,width:"80",height:"72",dataGardenId:"loaders.dots",...other,children:(0,jsx_runtime.jsxs)("g",{fill:"currentColor",children:[(0,jsx_runtime.jsx)(StyledDotsCircleOne,{duration,ref:dotOne}),(0,jsx_runtime.jsx)(StyledDotsCircleTwo,{duration,ref:dotTwo}),(0,jsx_runtime.jsx)(StyledDotsCircleThree,{duration,ref:dotThree})]})}):(0,jsx_runtime.jsx)(StyledLoadingPlaceholder.i,{fontSize:size,children:" "})}));Dots.displayName="Dots",Dots.propTypes={size:prop_types_default().any,duration:prop_types_default().number,color:prop_types_default().string,delayMS:prop_types_default().number},Dots.defaultProps={size:"inherit",color:"inherit",duration:1250,delayMS:750};try{Dots.displayName="Dots",Dots.__docgenInfo={description:"",displayName:"Dots",props:{size:{defaultValue:{value:"inherit"},description:"Sets the height and width in pixels. Inherits the parent's font size by default.",name:"size",required:!1,type:{name:"string | number"}},color:{defaultValue:{value:"inherit"},description:"Sets the fill color. Inherits the parent's `color` by default.",name:"color",required:!1,type:{name:"string"}},duration:{defaultValue:{value:"1250"},description:"Sets the length of the animation cycle in milliseconds *",name:"duration",required:!1,type:{name:"number"}},delayMS:{defaultValue:{value:"750"},description:"Delays displaying the loader to prevent a render flash during normal loading times *",name:"delayMS",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/loaders/src/elements/Dots.tsx#Dots"]={docgenInfo:Dots.__docgenInfo,name:"Dots",path:"packages/loaders/src/elements/Dots.tsx#Dots"})}catch(__react_docgen_typescript_loader_error){}var README=__webpack_require__("./packages/loaders/README.md");function _createMdxContent(props){const _components=Object.assign({h1:"h1"},(0,lib.MN)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.Qb,{title:"Packages/Loaders/Dots",component:Dots}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"api",children:"API"}),"\n",(0,jsx_runtime.jsx)(dist.UF,{}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"demo",children:"Demo"}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{name:"Dots",argTypes:{color:{control:"color"},size:{control:"number"}},parameters:{design:{allowFullscreen:!0,type:"figma",url:"https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=175%3A188"}},children:args=>(0,jsx_runtime.jsx)(Dots,{...args})})}),"\n",(0,jsx_runtime.jsx)(dist.Ih,{children:README})]})}const dots=args=>(0,jsx_runtime.jsx)(Dots,{...args});dots.storyName="Dots",dots.argTypes={color:{control:"color"},size:{control:"number"}},dots.parameters={storySource:{source:"args => <Dots {...args} />"},design:{allowFullscreen:!0,type:"figma",url:"https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=175%3A188"}};const componentMeta={title:"Packages/Loaders/Dots",component:Dots,tags:["stories-mdx"],includeStories:["dots"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.MN)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const dots_stories=componentMeta,__namedExportsOrder=["dots"]},"./node_modules/@zendeskgarden/container-schedule/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{W:()=>useSchedule});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);const useSchedule=function(_temp){let{duration=1250,delayMS=750,loop=!0}=void 0===_temp?{}:_temp;const[elapsed,setElapsed]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),[delayComplete,setDelayComplete]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((()=>{let raf,start,loopTimeout,destroyed=!1;const tick=()=>{destroyed||(raf=requestAnimationFrame(performAnimationFrame))},performAnimationFrame=()=>{setElapsed(Date.now()-start),tick()},onStart=()=>{destroyed||(loopTimeout=setTimeout((()=>{cancelAnimationFrame(raf),setElapsed(Date.now()-start),loop&&onStart()}),duration),start=Date.now(),setDelayComplete(!0),tick())},renderingDelayTimeout=setTimeout(onStart,delayMS);return()=>{destroyed=!0,clearTimeout(renderingDelayTimeout),clearTimeout(loopTimeout),cancelAnimationFrame(raf)}}),[duration,delayMS,loop]),{elapsed:Math.min(1,elapsed/duration),delayMS,delayComplete}},ScheduleContainer=_ref=>{let{children,render=children,...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,render(useSchedule(props)))};ScheduleContainer.defaultProps={duration:1250,delayMS:750,loop:!0},ScheduleContainer.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,render:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,duration:prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,loop:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,delayMS:prop_types__WEBPACK_IMPORTED_MODULE_1___default().number}},"./packages/loaders/src/styled/StyledLoadingPlaceholder.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>StyledLoadingPlaceholder});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/theming/src/elements/theme/index.ts");const StyledLoadingPlaceholder=styled_components__WEBPACK_IMPORTED_MODULE_0__.cp.div.attrs({"data-garden-id":"loaders.loading_placeholder","data-garden-version":"storybook",role:"progressbar"}).withConfig({displayName:"StyledLoadingPlaceholder",componentId:"sc-x3bwsx-0"})(["display:inline-block;width:",";height:",";font-size:",";",""],(props=>props.width||"1em"),(props=>props.height||"0.9em"),(props=>props.fontSize),(props=>(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_1__.c)("loaders.loading_placeholder",props)));StyledLoadingPlaceholder.defaultProps={theme:_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__.c}},"./packages/loaders/src/styled/StyledSVG.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>StyledSVG});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/theming/src/elements/theme/index.ts");const StyledSVG=styled_components__WEBPACK_IMPORTED_MODULE_0__.cp.svg.attrs((props=>({"data-garden-version":"storybook",xmlns:"http://www.w3.org/2000/svg",width:props.width,height:props.height,focusable:"false",viewBox:`0 0 ${props.width} ${props.height}`,role:"img"}))).withConfig({displayName:"StyledSVG",componentId:"sc-1xtc3kx-0"})(["width:",";height:",";color:",";font-size:",";",";"],(props=>props.containerWidth||"1em"),(props=>props.containerHeight||"0.9em"),(props=>props.color||"inherit"),(props=>props.fontSize||"inherit"),(props=>(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_1__.c)(props.dataGardenId,props)));StyledSVG.defaultProps={theme:_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_2__.c}},"./packages/theming/src/utils/retrieveComponentStyles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function retrieveComponentStyles(componentId,props){const components=props.theme&&props.theme.components;if(!components)return;const componentStyles=components[componentId];return"function"==typeof componentStyles?componentStyles(props):componentStyles}__webpack_require__.d(__webpack_exports__,{c:()=>retrieveComponentStyles})},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./packages/loaders/README.md":module=>{"use strict";module.exports="# @zendeskgarden/react-loaders [![npm version](https://flat.badgen.net/npm/v/@zendeskgarden/react-loaders)](https://www.npmjs.com/package/@zendeskgarden/react-loaders)\n\nThis package includes components relating to loaders in the\n[Garden Design System](https://zendeskgarden.github.io/).\n\n## Installation\n\n```sh\nnpm install @zendeskgarden/react-loaders\n\n# Peer Dependencies - Also Required\nnpm install react react-dom styled-components @zendeskgarden/react-theming\n```\n\n## Usage\n\n### Dots\n\n```jsx\nimport { ThemeProvider } from '@zendeskgarden/react-theming';\nimport { Dots } from '@zendeskgarden/react-loaders';\n\n/**\n * Place a `ThemeProvider` at the root of your React application\n */\n<ThemeProvider>\n  <Dots />;\n</ThemeProvider>;\n```\n\n### Inline\n\n```jsx\nimport { ThemeProvider } from '@zendeskgarden/react-theming';\nimport { Inline } from '@zendeskgarden/react-loaders';\n\n/**\n * Place a `ThemeProvider` at the root of your React application\n */\n<ThemeProvider>\n  <Inline />\n</ThemeProvider>;\n```\n\n### Progress\n\n```jsx\nimport { ThemeProvider } from '@zendeskgarden/react-theming';\nimport { Progress } from '@zendeskgarden/react-loaders';\n\n/**\n * Place a `ThemeProvider` at the root of your React application\n */\n<ThemeProvider>\n  <Progress value={40} />\n</ThemeProvider>;\n```\n\n### Skeleton\n\n```jsx\nimport { ThemeProvider } from '@zendeskgarden/react-theming';\nimport { Skeleton } from '@zendeskgarden/react-loaders';\n\n/**\n * Place a `ThemeProvider` at the root of your React application\n */\n<ThemeProvider>\n  <Skeleton />;\n</ThemeProvider>;\n```\n\n### Spinner\n\n```jsx\nimport { ThemeProvider } from '@zendeskgarden/react-theming';\nimport { Spinner } from '@zendeskgarden/react-loaders';\n\n/**\n * Place a `ThemeProvider` at the root of your React application\n */\n<ThemeProvider>\n  <Spinner />;\n</ThemeProvider>;\n```\n"}}]);