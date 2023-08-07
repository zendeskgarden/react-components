(self.webpackChunk_zendeskgarden_react_components=self.webpackChunk_zendeskgarden_react_components||[]).push([[6270],{"./packages/loaders/demo/progress.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,progress:()=>progress});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_zendeskgarden_react_loaders__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/loaders/src/elements/Progress.tsx"),_README_md__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/loaders/README.md"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Packages/Loaders/Progress",component:_zendeskgarden_react_loaders__WEBPACK_IMPORTED_MODULE_4__.E}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h1,{id:"api",children:"API"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.$4,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h1,{id:"demo",children:"Demo"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Progress",argTypes:{color:{control:"color"},value:{control:{type:"range",min:0,max:100}}},args:{"aria-label":"Label",value:0},parameters:{design:{allowFullscreen:!0,type:"figma",url:"https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=175%3A144"}},children:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_zendeskgarden_react_loaders__WEBPACK_IMPORTED_MODULE_4__.E,{...args})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.UG,{children:_README_md__WEBPACK_IMPORTED_MODULE_5__})]})}const progress=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_zendeskgarden_react_loaders__WEBPACK_IMPORTED_MODULE_4__.E,{...args});progress.storyName="Progress",progress.argTypes={color:{control:"color"},value:{control:{type:"range",min:0,max:100}}},progress.args={"aria-label":"Label",value:0},progress.parameters={storySource:{source:"args => <Progress {...args} />"},design:{allowFullscreen:!0,type:"figma",url:"https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=175%3A144"}};const componentMeta={title:"Packages/Loaders/Progress",component:_zendeskgarden_react_loaders__WEBPACK_IMPORTED_MODULE_4__.E,tags:["stories-mdx"],includeStories:["progress"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"./packages/loaders/src/elements/Progress.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{E:()=>Progress});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./packages/loaders/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),useText=__webpack_require__("./packages/theming/src/utils/useText.ts");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),getColor=__webpack_require__("./packages/theming/src/utils/getColor.ts"),retrieveComponentStyles=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),theme=__webpack_require__("./packages/theming/src/elements/theme/index.ts");const sizeToHeight=(size,theme)=>{switch(size){case"small":return theme.space.base/2;case"medium":return 1.5*theme.space.base;default:return 3*theme.space.base}},sizeToBorderRadius=(size,theme)=>sizeToHeight(size,theme)/2,StyledProgressBackground=styled_components_browser_esm.ZP.div.attrs((props=>({"data-garden-id":"loaders.progress_background","data-garden-version":"storybook",borderRadius:props.borderRadius||sizeToBorderRadius(props.size,props.theme)}))).withConfig({displayName:"StyledProgress__StyledProgressBackground",componentId:"sc-2g8w4s-0"})(["margin:","px 0;border-radius:","px;background-color:",";color:",";",""],(props=>2*props.theme.space.base),(props=>props.borderRadius),(props=>(0,getColor.L)("neutralHue",200,props.theme)),(props=>props.color||(0,getColor.L)("successHue",600,props.theme)),(props=>(0,retrieveComponentStyles.Z)("loaders.progress_background",props)));StyledProgressBackground.defaultProps={theme:theme.Z};const StyledProgressIndicator=styled_components_browser_esm.ZP.div.attrs((props=>({"data-garden-id":"loaders.progress_indicator","data-garden-version":"storybook",height:props.height||sizeToHeight(props.size,props.theme),borderRadius:props.borderRadius||sizeToBorderRadius(props.size,props.theme)}))).withConfig({displayName:"StyledProgress__StyledProgressIndicator",componentId:"sc-2g8w4s-1"})(["transition:width 0.1s ease-in-out;border-radius:","px;background:currentcolor;width:","%;height:","px;",""],(props=>props.borderRadius),(props=>props.value),(props=>props.height),(props=>(0,retrieveComponentStyles.Z)("loaders.progress_indicator",props)));StyledProgressIndicator.defaultProps={theme:theme.Z};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Progress=react.forwardRef(((_ref,ref)=>{let{value,size,"aria-label":label,...other}=_ref;const percentage=Math.max(0,Math.min(100,value)),ariaLabel=(0,useText.X)(Progress,{"aria-label":label},"aria-label","Progress");return(0,jsx_runtime.jsx)(StyledProgressBackground,{"data-garden-id":"loaders.progress","data-garden-version":"storybook","aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":percentage,role:"progressbar",size,ref,"aria-label":ariaLabel,...other,children:(0,jsx_runtime.jsx)(StyledProgressIndicator,{value:percentage,size})})}));Progress.displayName="Progress",Progress.propTypes={color:prop_types_default().string,value:prop_types_default().number.isRequired,size:prop_types_default().oneOf(["small","medium","large"])},Progress.defaultProps={value:0,size:"medium"};try{Progress.displayName="Progress",Progress.__docgenInfo={description:"",displayName:"Progress",props:{value:{defaultValue:{value:"0"},description:"Sets the progress as a value between 0 and 100",name:"value",required:!1,type:{name:"number"}},color:{defaultValue:null,description:"Sets the foreground bar's fill color.\nDefaults to the `successHue` [theme](/components/theme-object#colors) value.",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"Adjusts the height",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/loaders/src/elements/Progress.tsx#Progress"]={docgenInfo:Progress.__docgenInfo,name:"Progress",path:"packages/loaders/src/elements/Progress.tsx#Progress"})}catch(__react_docgen_typescript_loader_error){}},"./packages/theming/src/utils/getColor.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{L:()=>getColor,d:()=>DEFAULT_SHADE});var _elements_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/theming/src/elements/theme/index.ts"),polished__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/theming/node_modules/polished/dist/polished.esm.js"),lodash_memoize__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/theming/node_modules/lodash.memoize/index.js");const DEFAULT_SHADE=600,adjust=(color,expected,actual)=>{if(expected!==actual){const amount=Math.abs(expected-actual)/100*.05;return expected>actual?(0,polished__WEBPACK_IMPORTED_MODULE_1__._j)(amount,color):(0,polished__WEBPACK_IMPORTED_MODULE_1__.$n)(amount,color)}return color},getColor=__webpack_require__.n(lodash_memoize__WEBPACK_IMPORTED_MODULE_0__)()((function(hue){let retVal,shade=arguments.length>1&&void 0!==arguments[1]?arguments[1]:DEFAULT_SHADE,theme=arguments.length>2?arguments[2]:void 0,transparency=arguments.length>3?arguments[3]:void 0;if(isNaN(shade))return;const palette=theme&&theme.palette?theme.palette:_elements_theme__WEBPACK_IMPORTED_MODULE_2__.Z.palette,colors=theme&&theme.colors?theme.colors:_elements_theme__WEBPACK_IMPORTED_MODULE_2__.Z.colors;let _hue;if(_hue="string"==typeof hue&&colors[hue]||hue,Object.prototype.hasOwnProperty.call(palette,_hue)&&(_hue=palette[_hue]),"object"==typeof _hue){if(retVal=_hue[shade],!retVal){const _shade=Object.keys(_hue).map((hueKey=>parseInt(hueKey,10))).reduce(((previous,current)=>Math.abs(current-shade)<Math.abs(previous-shade)?current:previous));retVal=adjust(_hue[_shade],shade,_shade)}}else retVal=adjust(_hue,shade,DEFAULT_SHADE);return transparency&&(retVal=(0,polished__WEBPACK_IMPORTED_MODULE_1__.m4)(retVal,transparency)),retVal}),((hue,shade,theme,transparency)=>JSON.stringify({hue,shade,palette:theme?.palette,colors:theme?.colors,transparency})))},"./packages/theming/src/utils/retrieveComponentStyles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function retrieveComponentStyles(componentId,props){const components=props.theme&&props.theme.components;if(!components)return;const componentStyles=components[componentId];return"function"==typeof componentStyles?componentStyles(props):componentStyles}__webpack_require__.d(__webpack_exports__,{Z:()=>retrieveComponentStyles})},"./packages/theming/src/utils/useText.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{X:()=>useText});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useText=function(component,props,name,text){let condition=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];const value=condition?props[name]:void 0;return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>{if(condition){if("children"===name)throw new Error("Error: `children` is not a valid `useText` prop.");if(null===value||""===value)throw new Error(component.displayName?`Error: you must provide a valid \`${name}\` text value for <${component.displayName}>.`:`Error: you must provide a valid \`${name}\` text value.`);if(void 0===value)return text}return value}),[component.displayName,value,name,text,condition])}},"./packages/loaders/node_modules/prop-types/factoryWithThrowingShims.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var ReactPropTypesSecret=__webpack_require__("./packages/loaders/node_modules/prop-types/lib/ReactPropTypesSecret.js");function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,module.exports=function(){function shim(props,propName,componentName,location,propFullName,secret){if(secret!==ReactPropTypesSecret){var err=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw err.name="Invariant Violation",err}}function getShim(){return shim}shim.isRequired=shim;var ReactPropTypes={array:shim,bigint:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};return ReactPropTypes.PropTypes=ReactPropTypes,ReactPropTypes}},"./packages/loaders/node_modules/prop-types/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./packages/loaders/node_modules/prop-types/factoryWithThrowingShims.js")()},"./packages/loaders/node_modules/prop-types/lib/ReactPropTypesSecret.js":module=>{"use strict";module.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./packages/loaders/README.md":module=>{"use strict";module.exports="# @zendeskgarden/react-loaders [![npm version](https://flat.badgen.net/npm/v/@zendeskgarden/react-loaders)](https://www.npmjs.com/package/@zendeskgarden/react-loaders)\n\nThis package includes components relating to loaders in the\n[Garden Design System](https://zendeskgarden.github.io/).\n\n## Installation\n\n```sh\nnpm install @zendeskgarden/react-loaders\n\n# Peer Dependencies - Also Required\nnpm install react react-dom styled-components @zendeskgarden/react-theming\n```\n\n## Usage\n\n### Dots\n\n```jsx\nimport { ThemeProvider } from '@zendeskgarden/react-theming';\nimport { Dots } from '@zendeskgarden/react-loaders';\n\n/**\n * Place a `ThemeProvider` at the root of your React application\n */\n<ThemeProvider>\n  <Dots />;\n</ThemeProvider>;\n```\n\n### Inline\n\n```jsx\nimport { ThemeProvider } from '@zendeskgarden/react-theming';\nimport { Inline } from '@zendeskgarden/react-loaders';\n\n/**\n * Place a `ThemeProvider` at the root of your React application\n */\n<ThemeProvider>\n  <Inline />\n</ThemeProvider>;\n```\n\n### Progress\n\n```jsx\nimport { ThemeProvider } from '@zendeskgarden/react-theming';\nimport { Progress } from '@zendeskgarden/react-loaders';\n\n/**\n * Place a `ThemeProvider` at the root of your React application\n */\n<ThemeProvider>\n  <Progress value={40} />\n</ThemeProvider>;\n```\n\n### Skeleton\n\n```jsx\nimport { ThemeProvider } from '@zendeskgarden/react-theming';\nimport { Skeleton } from '@zendeskgarden/react-loaders';\n\n/**\n * Place a `ThemeProvider` at the root of your React application\n */\n<ThemeProvider>\n  <Skeleton />;\n</ThemeProvider>;\n```\n\n### Spinner\n\n```jsx\nimport { ThemeProvider } from '@zendeskgarden/react-theming';\nimport { Spinner } from '@zendeskgarden/react-loaders';\n\n/**\n * Place a `ThemeProvider` at the root of your React application\n */\n<ThemeProvider>\n  <Spinner />;\n</ThemeProvider>;\n```\n"}}]);